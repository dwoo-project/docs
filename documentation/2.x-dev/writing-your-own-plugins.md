---
layout: documentation
title: Writing your own plugins
---

Dwoo plugins come in different flavours, **functions/modifiers**, **blocks/tags** and **filters**. All of those need to be build with classes.

Before we start, you should know about those general plugin features:

* Dwoo automatically loads the plugins that are in it's **Plugins** directory, along with those you manually add through `\Dwoo\Loader::addDirectory`.
However, for those plugins to work correctly, they must follow some naming conventions. The function plugins must be declared as `Function<name>`, block plugins must be declared as `Block<name>` while the filters use `Filter<name>` and processors use `Processor<name>`. Plugins added manually must follow those rules when using `\Dwoo\Loader::addDirectory` method.
* The parameter names that you define in your plugin and the default values as well are important, because that will define the parameter names to use in the template when you call that plugin, and it will also allow the compiler to detect when a required argument is missing, so that plugins don't have to handle that logic.
* All plugins **always have access to the Core class**.
* The main functions for each plugin, the ones that accept the parameters, can have a rest array parameters, which aggregates all unmapped parameters. It has to be declared as `array $rest` or `array $rest=array()` to work as it should. See the [array](/documentation/2.x-dev/helpers/array.html) and [math](/documentation/2.x-dev/functions/math.html) plugins for examples.

## Blocks vs Functions

## Blocks/Tags

### Simple block plugins
Those are the default block type, that you are most likely to want to use, by default they automatically buffer all their content and then `process()` is called at the end. That's where you should do your work, anyway here is an example :
{% highlight php %}
<?php
use Dwoo\Block\Plugin;
class BlockUpper extends Plugin {
    // parameters go here if you need any settings
    public function init() {
    }

    // this can be ommitted, it's called once when the block ends, don't implement if you don't need it
    public function end() {
    }

    // this is called when the block is required to output it's data, it should read $this->buffer, process it and return it
	public function process() {
	return strtoupper($this->buffer);
	}
}
{% endhighlight %}

### Precompiled block plugins
More complex to build as they make use of the `preProcessing` and `postProcessing` methods, precompiled block plugins allowed complex things like **if**, **elseif**, **foreach**, **for** and so on to be made as plugins completely separated from the compiler.
Those plugins that are completely handled by the compiler should implement the `\Dwoo\ICompilable\Block` interface, which does nothing but tells the compiler that the plugin should not be loaded at runtime, which enhances performances a bit.
The block compiler functions have the particularity to receive two sets of arguments in **$params**, one set containing the output-ready php safe values, accessible through `\Dwoo\Compiler::getCompiledParams($params)`, and the other set that contains the original arguments provided by the template source, which are accessible through `\Dwoo\Compiler::getRealParams($params)`. This is required in some rare cases, but usually the first method is sufficient.
Here is an example that compiles our now famous upper plugin. However this example is quite limited and I advise you to look at **for**, **foreach** and **if** plugins for more advanced implementations.
{% highlight php %}
<?php
use Dwoo\Block\Plugin;
use Dwoo\Compiler;
use Dwoo\ICompilable\Block;
class BlockUpper extends Plugin implements Block {

    public function begin() {

    }

    public static function preProcessing(Compiler $compiler, array $params, $prepend, $append, $type) {
        return Compiler::PHP_OPEN.$prepend.' ob_start(); '.$append . Compiler::PHP_CLOSE;
    }

    public static function postProcessing(Compiler $compiler, array $params, $prepend, $append, $content) {
        // the block is responsible for outputting it's entire content (passed as $content),
        // so you can transform it and then return it, but in this case we don't because
        // we want the content to be uppercased at runtime and not at compile time
        return $content . Compiler::PHP_OPEN.$prepend.' $tmp = ob_get_clean(); echo strtoupper($tmp); '.$append . Compiler::PHP_CLOSE;
    }
}
{% endhighlight %}

## Functions/Modifiers

### Simple modifier plugin
{% highlight php %}
<?php
use Dwoo\Plugin;
class FunctionUpper extends Plugin {

    public function process($value) {
        return strtoupper($value);
    }
}
{% endhighlight %}

### Precompiled modifier plugin
{% highlight php %}
<?php
use Dwoo\Compiler;
use Dwoo\ICompilable;
use Dwoo\Plugin;
class FunctionUpper extends Plugin implements ICompilable {

    public static function compile(Compiler $compiler, $value) {
        return 'strotoupper('.$value.')';
    }
}
{% endhighlight %}

## FAQ

### How can i access to a Core object ?

From a simple plugin you can access using: `$this->core`, however from a precompiled plugin you can access using: `$compiler->getCore()`.

### How can i get data from a class inside a Plugin ?
To do this, you have 2 solutions:

1. Using a static method. You can call your static method like: `Class::method();`
2. Passing your data to `\Dwoo\Plugin` class. You need to use the next method to push data: `Core::setPluginData();` and the `Core::getPluginData()` to retrieve your data.

### How can i manage template error ?
