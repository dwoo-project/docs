---
layout: documentation
title: Extending Dwoo - Writing Plugins
---

Dwoo plugins come in different flavours, functions/modifiers, blocks and filters. Most of those can be built using simple functions or more complex classes.
Before we start, you should know about those general plugin featuers :

* Dwoo automatically loads the plugins that are in it's plugin directory, along with those you manually add through Dwoo_Loader::addDirectory. However, for those plugins to work correctly, they must follow some naming conventions. The function/block plugins must be declared as `function Dwoo_Plugin_<name>` or `class Dwoo_Plugin_<name>`, while the filters use `function Dwoo_Filter_<name>` and `class Dwoo_Filter_<name>` and processors use `Dwoo_Processor_`. Plugins added manually must not follow those rules as you provide their exact function callbacks when you add them.
* The parameter names that you define in your plugin and the default values as well are important, because that will define the parameter names to use in the template when you call that plugin, and it will also allow the compiler to detect when a required argument is missing, so that plugins don't have to handle that logic.
* The main functions for each plugin, the ones that accept the parameters, can have a rest array parameters, which aggregates all unmapped parameters. It has to be declared as `array $rest` or `array $rest=array()` to work as it should. See the [array](/documentation/1.x/helpers/array.html) and [math](/documentation/1.x/functions/math.html) plugins for examples.

## Functions / Modifiers
There are three ways of building function plugins, we will explore those, learning how to make a plugin that returns an uppercased string.

## Simple function plugin
This function will be called when the template is ran, with the required arguments, the only requirement is that the first argument must be of type Dwoo and will always be the Dwoo instance that runs the template.
{% highlight php %}
<?php
function Dwoo_Plugin_upper(Dwoo $dwoo, $value)
{
    return strtoupper($value);
}
{% endhighlight %}
You can also create a simple plugin that has all arguments in associative array. This is useful for plugins that take optional parameters. The second argument needs to be called `$rest` in order for it to work.
{% highlight php %}
<?php
function Dwoo_Plugin_exampleplugin(Dwoo $dwoo, array $rest=array())
{
    return var_export($rest);
}
{% endhighlight %}

## Precompiled function plugin
The example above is very simple and just wraps a php function into a plugin. That is a bit silly as it adds the function call overhead plus the plugin file loading time for no benefit at all. Because of that, we are going to make it compilable by appending "_compile" to it's name, and this time the first argument will not be of type Dwoo but will be Dwoo_Compiler.
{% highlight php %}
<?php
function Dwoo_Plugin_upper_compile(Dwoo_Compiler $compiler, $value)
{
    return 'strtoupper('.$value.')';
}
{% endhighlight %}
As you can see, the function now returns what should be done at the template runtime, instead of actually waiting for the run time to act.
While this is a great feature of Dwoo, it is a bit dangerous to fiddle with, and you should be sure you know what you're doing when working with precompiled plugins. Here are some important things to remember :

* The arguments are passed as "compiled strings", that is, if the template contains `{upper "foo"}`, the `Dwoo_Plugin_upper_compile` function will receive it as "foo", quotes included.
* You must not enclose the variables you output in double quotes or anything, as they already contain whatever they need to be safely parsed by PHP. Just output where they should go in your code.
* You can only return one "command", indeed as those functions should be capable to be inside other function calls, you can not return a colon (;) or it will break everything.
* You can NOT make assumptions as to the value of the parameters you get. For example, `{upper $foo}` will be received as `$this->scope['foo']` (as a string). That means that can't have conditions in your compiled functions, because `if($value=="foo")` will ALWAYS be false.
* A little exception to the previous rule is for booleans, you can do `if($value=='true')` or `if($value=='false')`, but note that true and false are strings here, not real booleans.
You can look at most of Dwoo function plugins's source code for more examples, more than half of them are precompiled functions. The math plugin for example is a very good example of a complex precompiled plugin, as it parses it's input at compile-time to improve the performance a lot at run-time. Since templates are ran more often than they are compiled, this is overall better.

## Class function plugin
If one of your plugins uses several functions, it might be a good idea to regroup them all inside a class. Dwoo class plugins must follow some rules :

* The constructor's first parameter must be of type Dwoo, you can extend the Dwoo_Plugin class for convenience so that the constructor already does what it needs to, or you can provide that logic yourself.
* The method that Dwoo will call at runtime is called "process", that's the method that will receive all the plugin parameters so that is where you must define them.
{% highlight php %}
<?php
class Dwoo_Plugin_upper extends Dwoo_Plugin
{ 
    public function process($value)
    {
        return strtoupper($value); 
    } 
}
{% endhighlight %}
A particularity of class plugins is that only one instance of each class is created for the entire template. That means that instance variables are "template-static", they remain present while the template is run, but they are not static across templates. Static variables are of course shared by all instances, nothing special about that. Anyway if you absolutely need per-plugin-call variables, you will have to reset their value in the process() method.

## Precompiled class function plugin
* It must implement the Dwoo_ICompilable interface.
* The method that Dwoo will call must now be static and is called "compile" instead of "process", it will receive all the parameters with the `Dwoo_Compiler` object calling it being first.
{% highlight php %}
<?php
class Dwoo_Plugin_upper extends Dwoo_Plugin implements Dwoo_ICompilable
{
    public static function compile(Dwoo_Compiler $compiler, $value)
    {
        return 'strotoupper('.$value.')';
    }
}
{% endhighlight %}

## Block
Block plugins on their end, can only be built with classes. You should extend the `Dwoo_Block_Plugin` class, but your block plugin must still be named `Dwoo_Plugin_<name>`, NOT `Dwoo_Block_Plugin_<name>`.
Some Block facts :

* They have two static methods, preProcessing and postProcessing, that are called at compile time, the first when the block opening tag is encountered, and the other when it's closed. By default those two functions output block-management code that you should only override if you know what you're doing.
* The block equivalent to the process() method is called init() and must include all parameters, it is called when the block is opened, followed by end() (no parameters) when the block is closed, and finally process() (no parameters) when the block buffer is required by a parent block.
* The block contents can be accessed in the process function through the buffer property : `$this->buffer`

### Simple block plugins
Those are the default block type, that you are most likely to want to use, by default they automatically buffer all their content and then process() is called at the end. That's where you should do your work, anyway here is an example :
{% highlight php %}
<?php
class Dwoo_Plugin_upper extends Dwoo_Block_Plugin
{ 
    // parameters go here if you need any settings
    public function init()
    { 
    } 
 
    // this can be ommitted, it's called once when the block ends, don't implement if you don't need it
    public function end()
    { 
    } 
 
    // this is called when the block is required to output it's data, it should read $this->buffer, process it and return it
    public function process(){ 
        return strtoupper($this->buffer); 
    } 
}
{% endhighlight %}

### Precompiled block plugins
More complex to build as they make use of the pre and postProcessing functions, precompiled block plugins allowed complex things like if, elseif, foreach, for and so on to be made as plugins completely separated from the compiler.  
Those plugins that are completely handled by the compiler should implement the `Dwoo_ICompilable_Block` interface, which does nothing but tells the compiler that the plugin should not be loaded at runtime, which enhances performances a bit.  
The block compiler functions have the particularity to receive two sets of arguments in `$params`, one set containing the output-ready php safe values, accessible through `Dwoo_Utils::getCompiledParams($params)`, and the other set that contains the original arguments provided by the template source, which are accessible through `Dwoo_Utils::getRealParams($params)`. This is required in some rare cases, but usually the first method is sufficient.  
Here is an example that compiles our now famous upper plugin. However this example is quite limited and I advise you to look at [for](/documentation/1.x/blocks/for.html), [foreach](/documentation/1.x/blocks/foreach.html) and if plugins for more advanced implementations.  
{% highlight php %}
<?php
class Dwoo_Plugin_upper extends Dwoo_Block_Plugin implements Dwoo_ICompilable_Block 
{
    public function init()
    {
    }
 
    public static function preProcessing(Dwoo_Compiler $compiler, array $params, $prepend, $append, $type) 
    { 
        return Dwoo_Compiler::PHP_OPEN.$prepend.' ob_start(); '.$append . Dwoo_Compiler::PHP_CLOSE; 
    } 
 
    public static function postProcessing(Dwoo_Compiler $compiler, array $params, $prepend, $append, $content)
    {
        // the block is responsible for outputting it's entire content (passed as $content), 
        // so you can transform it and then return it, but in this case we don't because 
        // we want the content to be uppercased at runtime and not at compile time
        return $content . Dwoo_Compiler::PHP_OPEN.$prepend.' $tmp = ob_get_clean(); echo strtoupper($tmp); '.$append . Dwoo_Compiler::PHP_CLOSE; 
    } 
}
{% endhighlight %}

## Filters and Processors
Filters are added to the Dwoo object and they are called after the template rendering, right before it is cached or output.
Processors are filters for the compiler, they can be "pre" or "post" processor, being called before and after compilation.

* As previously mentionned, filters use the `Dwoo_Filter_` class/function prefix and processors use `Dwoo_Processor_`.
* That prefix only has to be used if you want to use the autoload capability. In that case, place your file in one of the plugin directories, and then use `addFilter('name', true);` where name matches the filename and the name found after `Dwoo_Filter_` or `Dwoo_Processor_`.
* If you are loading a filter from somewhere else, then you must provide a valid callback to the processor/filter function, for example use `addFilter('function_name');` for function based filters or `addFilter(array($object, 'method'));` for class-based filters.

### PreProcessors
Preprocessors are added to the compiler through `$compiler->addPreProcessor()`, and are called before template compilation. It allows you to do some processing over the template if you need that in your application. For example Dwoo uses that to help supporting Smarty templates, there is a prefilter that converts some unsupported / legacy smarty features into Dwoo ones, transparently.
Here we will see how to create a simple function-based processor that adds a date automatically at the end of every template. You could use a similar processor to force all your templates to have a specific footer, a Google Analytics tracking code or anything.
{% highlight php %}
<?php
function Dwoo_Processor_timestamp(Dwoo_Compiler $compiler, $template)
{
    return $template.'{date_format $dwoo.now "%Y-%m-%d"}';
}
{% endhighlight %}
To build it as a class-based processor, you can extend `Dwoo_Processor`, such as :
{% highlight php %}
<?php
class Dwoo_Processor_timestamp extends Dwoo_Processor
{
    public function process($input)
    {
        // you can access the compiler in here through $this->compiler
        return $input.'{date_format $dwoo.now "%Y-%m-%d"}';
    }
}
{% endhighlight %}

### PostProcessors
Postprocessors are added to the compiler through `$compiler->addPostProcessor()`, and are called after template compilation. It allows you to process the template after it has been created, if you want to add something to it or whatever.
They are built exactly as preprocessors so see the examples above.

### Filters
Filters are added to the Dwoo instance through `$dwoo->addFilter()`, and are called after the template is fully rendered, right before it is cached (if cache is in use). You can use those to do some work on the HTML output. For example Dwoo includes an [html_format](/documentation/1.x/filters/html-format.html) filter that correctly indents the html of your page so that the sources look nicer and are easier to read. Which can be useful especially while developing the site.
They are built exactly like processors excepted that they receive a Dwoo object as parameter and that they use the `Dwoo_Filter_` prefix, for example :
{% highlight php %}
<?php
function Dwoo_Filter_timestamp(Dwoo $dwoo, $input)
{
    return $input . date('Y-m-d');
}
{% endhighlight %}