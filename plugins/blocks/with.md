---
layout: plugin
title: with
versions: [1.0, 1.1, 1.2, 1.3]
---

Moves the scope down into an array of values, allowing one to type `{$var}` instead of `{$array.var}` within the `{with}` block
<div class="code-box">
{% highlight php %}
<?php
with(array $var)
{% endhighlight %}
</div>

* **var**: the array where to move the scope


### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$arr.foo}
{with $arr} {$foo} / {$arr.foo} {/with}
{% endhighlight %}
</div>

<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
'arr' => array( 'foo' => 'bar' )
{% endhighlight %}
</div>

<div class="code-box">
{% highlight text %}
bar
bar / 
{% endhighlight %}
</div>

> Note: The tricky thing with this plugin is that as the scopes moves to another location, you can not access the global variables anymore.

As you can see with the above example, `{$arr.foo}` within the `{with}` block is not valid and returns null. To fix this you can use the `_parent` and `_root` keywords. **$_root** links to the top-level scope, and **$_parent** goes up by one level. The magic **$dwoo** variable is not affected by this and is accessible in the same way no matter the current scope.

Example #2
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{with $arr.sub}
{$foo} / {$_root.arr.sub.foo} / {$_parent.foo}
{$_root.url} / {$_parent._parent.url}
{$dwoo.version}
{/with}
{% endhighlight %}
</div>

<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
'arr' => array( 'sub' => array( 'foo' => 'bar' ) )
'url' => 'example.org'
{% endhighlight %}
</div>

<div class="code-box">
{% highlight text %}
bar / bar / bar
example.org / example.org
0.3.3
{% endhighlight %}
</div>