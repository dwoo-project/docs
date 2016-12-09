---
layout: plugin
title: default
versions: [1.0, 1.1, 1.2, 1.3]
---

Returns a variable or a default value if it's empty
<div class="code-box">
{% highlight php %}
<?php
default(mixed $value, [ mixed $default = ""])
{% endhighlight %}
</div>

* **value**: the variable to check
* **default**: fallback value if the first one is empty

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$var1="foo"}
{$var2=""}
{default $var1 "bar"}
{default $var2 "bar"}
{default $var3 "bar"}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
foo
bar
bar
{% endhighlight %}
</div>