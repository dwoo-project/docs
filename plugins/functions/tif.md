---
layout: plugin
title: tif
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Ternary if operation. This is the equivalent of the [ternary operator](http://uk2.php.net/ternary#language.operators.comparison.ternary){:target="_blank"}. It evaluates the first argument and returns the second if it's true, or the third if it's false.
<div class="code-box">
{% highlight php %}
<?php
tif(array $rest)
{% endhighlight %}
</div>

* **rest**: you can not use named parameters to call this, use it either with three arguments in the correct order (expression, true result, false result) or write it as in php (expression ? true result : false result)

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$foo = "foo"}
{tif $foo == "bar" ? "true" : "false"} {* full syntax *}
{tif $foo ?: "false"} {* you can omit the true value, in which case the expression will be re-used as the true value *}
{tif $foo ? "true"} {* you can omit the false value, in which case nothing will be output if it's false *}
{tif $foo} {* you can omit both values, in that case $foo is printed if it evaluates to true, otherwise nothing is printed *}
 
{$foo = null}
{tif $foo == "bar" ? "true" : "false"}
{tif $foo ?: "false"}
{tif $foo ? "true"}
{tif $foo}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
true
foo
true
foo

false
false
(empty)
(empty)
{% endhighlight %}
</div>