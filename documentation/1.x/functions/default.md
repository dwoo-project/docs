---
layout: documentation
title: "Functions:default"
---

Returns a variable or a default value if it's empty
{% highlight php %}
<?php
default(mixed $value, [ mixed $default = ""])
{% endhighlight %}

* **value**: the variable to check
* **default**: fallback value if the first one is empty

## Example
{% highlight smarty %}
{$var1="foo"}
{$var2=""}
{default $var1 "bar"}
{default $var2 "bar"}
{default $var3 "bar"}
{% endhighlight %}

## Output
{% highlight text %}
foo
bar
bar
{% endhighlight %}