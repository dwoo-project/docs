---
layout: documentation
title: Syntax
toc: true
---

## Variables
Those are the simplest thing to handle in Dwoo, you just need to know the variable name and you can output it like that : {$name}. So let's say you have a variable called date, you would output it using `{$date}`.

To handle arrays, if you have for example a variable called article that contains three items, title, author and content, you can access the sub-items by separating the array name and the sub-item by a dot (.) so that it looks like this for example:
<div class="code-box">
{% highlight html %}
<p>The date is {$date}</p> 
<div class="article"> 
  <h1 class="title">{$article.title}</h1> 
  <p class="content">{$article.content}</p> 
  <p class="title">Posted by : {$article.author}</p> 
</div>
{% endhighlight %}
</div>

Variables in strings are interpolated (replaced) automatically just like in PHP's double-quoted strings. In some cases the variables have to be concatenated with letters, which means that you must delimit the variable string with backticks:
<div class="code-box">
{% highlight smarty %}
Here is a {$var}
{upper("Here is a $var in a string")}
{upper("And a `$var`iable sticking to text")}
{% endhighlight %}
</div>

prints:
<div class="code-box">
{% highlight text %}
Here is a FOO
HERE IS A FOO IN A STRING
AND A FOOIABLE STICKING TO TEXT
{% endhighlight %}
</div>
You can also concatenate strings and variables with the [cat()](/plugins/functions/cat.html) function.

## Functions
The function syntax is quite flexible, functions can either be called just like in php, using `{upper("hello")}` to call the function upper with the parameter hello. This would print HELLO, as the upper function's purpose is to make strings uppercased. In this case the multiple parameters are split using a comma, i.e. {function("a", "b")} will call function with two parameters, a and b.
<div class="code-box">
{% highlight smarty %}
Here are some {upper("uppercased words")}
{% endhighlight %}
</div>

prints:
<div class="code-box">
{% highlight text %}
Here are some UPPERCASED WORDS
{% endhighlight %}
</div>

The other way is to call a function using named parameters, the same example as above would then become `{upper value="hello"}`, in this example we explicitly tell it to use hello as the value.
<div class="code-box">
{% highlight smarty %}
Here are some {upper value="uppercased words"}
{% endhighlight %}
</div>

prints:
<div class="code-box">
{% highlight text %}
Here are some UPPERCASED WORDS
{% endhighlight %}
</div>

Both ways have pros and cons. The first one is shorter and allows you to forget about parameter names, but the second is more flexible when it comes to complex functions with a lot of parameters, because it not only allows you to forget about their order, but you can also skip parameters and provide only those you really need (i.e. see [the blocks example](#blocks)).

If you want to use variables inside of a function call, just pass them as for printing:
<div class="code-box">
{% highlight smarty %}
Hello {upper($username)}!
{% endhighlight %}
</div>

prints:
<div class="code-box">
{% highlight text %}
Hello JOHNDOE!
{% endhighlight %}
</div>

## Modifiers
Modifiers are simply functions that can be applied on variables or strings to modify them, this syntax is not mandatory, modifiers like upper can be called using the function syntax without any problem, but the alternative exists if you prefer it. To make **hello** uppercased using the upper function as a modifier, you must do `{"hello"|upper}`.
<div class="code-box">
{% highlight smarty %}
Abcd reversed is {"Abcd"|reverse}
{% endhighlight %}
</div>

prints:
<div class="code-box">
{% highlight text %}
Abcd reversed is dcbA
{% endhighlight %}
</div>

Modifiers parameters are split with ":", and multiple modifiers can be applied on the same variable/string as such:
<div class="code-box">
{% highlight smarty %}
{"test"|spacify:"-"|reverse|upper} equals {upper(reverse(spacify("test", "-")))}
{% endhighlight %}
</div>

prints:
<div class="code-box">
{% highlight text %}
T-S-E-T equals T-S-E-T
{% endhighlight %}
</div>
This example shows that multiple functions are applied from "inside" the parenthesis (right) to the "outside" (left), while multiple modifiers are applied from left to right.

## Blocks
Blocks are started like functions, using `{blockname(parameter1, parameter2)}` or the named parameter syntax, and they are closed with `{/blockname}`. Unclosed blocks are automatically closed when one of their parent is closed, or at the template's end, however it's better to close them yourselves to be sure they are closed when you want them to be and to avoid any conflict to arise.
<div class="code-box">
{% highlight smarty %}
{textformat wrap=10 indent_first=3}
foo bar baz qux quuux
{/textformat}
{% endhighlight %}
</div>

prints:
<div class="code-box">
{% highlight text %}
   foo bar
baz qux
quuux
{% endhighlight %}
</div>

## Advanced Syntax
### The @ Operator
If you use the modifier syntax on an array and prepend the modifier with an `@`, the modifier will be applied to every element of the array.  
For example, the following:
<div class="code-box">
{% highlight smarty %}
{assign array('ab', 'cd') myArray}
{foreach $myArray|reverse element}
  {$element}
{/foreach}
{% endhighlight %}
</div>

would output **cd ab** as the reverse modifier reversed the array elements order before looping over them.  
However, if we do :
<div class="code-box">
{% highlight smarty %}
{assign array('ab', 'cd') myArray}
{foreach $myArray|@reverse element}
  {$element}
{/foreach}
{% endhighlight %}
</div>

would output **ba dc** as with the `@`, reverse was not applied to the array but to 'ab' and then to 'cd', reversing each character sequence.

### Shortcuts
Read more about [shortcuts](/documentation/shortcuts.html) to write templates faster.