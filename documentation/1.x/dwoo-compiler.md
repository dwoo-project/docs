---
layout: documentation
title: Dwoo_Compiler class
---

##Settings

###setDelimiters(string $left, string $right) - Changing the default syntax delimiters ({ and })

###getDelimiters()

{% highlight php %}
<?php
setDelimiters(string $left, string $right)
{% endhighlight %}

Delimiters are used to enter and exit the "template code", by default the left one (that opens the interpreter) is { and the right (that closes) is }, but through this method you can change them to be as you wish.  
Example, if you set the delimiters to <% and %> as such :

{% highlight php %}
<?php
$compiler->setDelimiters('<%', '%>')
{% endhighlight %}

Then your templates should be written as:
{% highlight smarty %}
<%if 1==1%>
  <p><%$var%></p>
<%/if%>
{% endhighlight %}

###setLooseOpeningHandling(bool $allow) - Allowing spaces within template blocks

###getLooseOpeningHandling()

{% highlight php %}
<?php
setLooseOpeningHandling(bool $allow)
{% endhighlight %}

By default - and unlike Smarty for those that are used to it - the template code works only if it doesn't have any space (whitespace to be exact) after the opening delimiter. Let's see a short example that will be much clearer:
{% highlight smarty %}
{$foo="bar"}
{$foo} // we see 'bar' here
{ $foo} // here the output is '{ $foo}' because of the space the compiler doesn't see this as template code
{% endhighlight %}

Why is it so ? Because often in html pages you use some css or javascript, even though it is not a very good practice, but let's not argue about that here. With this setting disabled (it is by default), the javascript and css code will not likely interfere with the template parsing, unless you do it inline like `a{color:red}` or if you create js objects with the shorthand syntax `{property: "value"}`. In such cases, the compiler will throw an exception, but it is quite easy to just add a space or a line break after the `{` to fix it.

If you really don't like this, because you want to use spaces in your template code, there are two options :

* Use `$compiler->setLooseOpeningHandling(true);` and it will work fine, but then you must be careful to escape all {'s in your css/js code as such : `\{`
* Use `$compiler->setDelimiters('{ ', ' }');` so your delimiters include the spaces, but the css/js should still not interfere. Obviously this only works if you are really consistent with the way you type your template code, because if you type `{` (curly brace + two spaces) then it will not get picked up by the compiler, neither will a single `{`.

##setAutoEscape(bool $enabled) - Automatically html-escape variables

##getAutoEscape()

{% highlight php %}
<?php
setAutoEscape(bool $enabled)
{% endhighlight %}

This enables or disables the auto escape functionality, in two words it applies `htmlspecialchars()` automatically to all variables unless you pass them through the safe plugin
See AutoEscape for more details.

###allowNestedComments(bool $allow) - Allow parsing of nested comment blocks
{% highlight php %}
<?php
allowNestedComments(bool $allow)
{% endhighlight %}

When this setting is enabled (it's off by default), this syntax becomes valid:
{% highlight smarty %}
{* some big comment
  {* spanning more child comments *}
  <p>Whatever</p>
*}
{% endhighlight %}

This can be useful if you like to disable big parts of your templates using comments during development, and you already have comments inside the part you disable. So enable it if it makes your life easier.
As you can see in the code example above, when it is off (the syntax highlighter doesn't support this), `<p>Whatever</p> *}` is still visible because the child comment has ended the comment parsing.

##Adding pre/post processors

###addPreProcessor(mixed $callback, bool $autoload=false)
Adds a template pre processor, either by name if it's in a Dwoo plugin directory (in which case you can set $autoload to true), or with a direct callback.  
The pre processor will receive the template and can modify it before it's parsed/compiled.

###addPostProcessor(mixed $callback, bool $autoload=false)
Same thing than above, but post processors can act on the php source after the template has been compiled.

###removePreProcessor(mixed $callback)
Removes a pre processor by name (if autoloaded) or callback.

###removePostProcessor(mixed $callback)
Removes a post processor by name (if autoloaded) or callback.

##Utilities
The following methods are giving you access to some properties and/or objects that might be useful.

###getSecurityPolicy()
Returns the current security policy if any.

###getDwoo()
Returns the current Dwoo object using this compiler.

###getLine()
Returns the current line (from the source template) that is being parsed, i.e. this can be useful to build a custom handler for `Dwoo_Compilation_Exception`'s, using `$exception->getCompiler()->getLine();`

##[Advanced] Plugin development
The following methods are mostly designed to be used when developing advanced plugins.

###getCompiledParams(array $params)
Returns an array of compiled php strings from a parameter array. You need to use this if you're building a block plugin using the preProcessing/postProcessing methods.

###getRealParams(array $params)
Returns an array of source strings from a parameter array. This is useful only in block plugins and you most likely don't need this function.

###getTemplateSource(bool $fromPointer=false)

###setTemplateSource(string $newSource, bool $fromPointer=false)
Returns or overrides the template source, the fromPointer parameter defines whether it is read/written from the current parsing position or if the entire source is returned/replaced.  
This is used for example in the extends plugin, where the template source is replaced by a new template (all parent templates + the current one with all blocks merged).

###getPointer()

###setPointer(int $position, bool $isOffset=false)
Returns the parser's pointer position, or moves it by offset or absolutely. If you do setPointer(0) the template is reparsed entirely - this means that the entire block stack is flushed and all variables reset just as if nothing had been parsed yet. Otherwise the parsing will continue from the new pointer position.

###setScope(mixed $scope, bool $absolute=false)

###forceScope(mixed $scope)
Those modify the current variable scope and should be used by scope-modifying plugins, but this is very likely to change in a future version and you should be considered unstable.

###setLine(int $number, bool $isOffset=false)
{% highlight smarty %}
setLine(int $number, [ bool $isOffset = false ])
{% endhighlight %}
Changes the current line, by offset or with an absolute value.

##[Advanced] Block handling
Those are functions you most likely don't want to look at :)

###& getCurrentBlock()
Returns the current block, this is an array that has the following content:
{% highlight php %}
<?php
array(
    'type' => ... // block type (i.e. "foreach" or "if")
    'params' => ... // the parameter array where you can add stuff if you want to pass them to the block's postProcessing method
    'buffer' => ... // the contents buffer that will be passed to the postProcessing method
    'class' => ... // the full class name, you can use it to do checks like is_subclass_of() but it's mostly not needed
    'custom' => ... // a boolean flag that tells if it's a custom callback or a real dwoo plugin, you shouldn't need this
)
{% endhighlight %}
It is returned by reference so you can modify it (i.e. the parameters array).

###& findBlock(string $type, bool $closeAlong=false)
The return value is the same as getCurrentBlock() but this will look in the block stack (starting from the current position) for a particular type. Optionally it can also close all blocks that do not match the given type until it finds one. If the type is not found it throws a `Dwoo_Compilation_Exception`

###injectBlock(string $type, array $params)
Injects a block at the top of the plugin stack without calling its preProcessing method,  
See the else plugin's source for an use case.

###push(string $content, int $lineCount=null)
Adds compiled content to the current block, the line count is the number of lines from the template source that generated this content, this is important to keep track of line numbers for parse errors.

###removeTopBlock()
Removes the block at the top of the stack and calls its postProcessing() method

###removeBlock(string $type)
Removes the closest-to-top block of the given type and all other blocks encountered while going down the block stack (quite similar to findBlock($type, true) but it doesn't return anything)