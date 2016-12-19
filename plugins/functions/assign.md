---
layout: plugin
title: assign
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Assigns a value to a variable
<div class="code-box">
{% highlight php %}
<?php
assign(mixed $value, string $var)
{% endhighlight %}
</div>

* **value**: the value that you want to save
* **var**: the variable name (without the leading $)


### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{assign 'test string' myVar}
Variable contains: {$myVar}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
Variable contains: test string
{% endhighlight %}
</div>

> Note that this plugin was mostly provided for smarty compatibility, it is easier to do it with the = operator, just
 as in any language, using :

<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$myVar='test string'}
{% endhighlight %}
</div>