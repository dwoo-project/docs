---
layout: documentation
title: assign
---

Assigns a value to a variable
{% highlight php %}
assign(mixed $value, string $var)
{% endhighlight %}

* **value**: the value that you want to save
* **var**: the variable name (without the leading $)

## Example
{% highlight smarty %}
{assign 'test string' myVar}
Variable contains: {$myVar}
{% endhighlight %}

## Output
{% highlight text %}
Variable contains: test string
{% endhighlight %}

## Note that
this plugin was mostly provided for smarty compatibility, it is easier to do it with the = operator, just as in any language, using :

{% highlight smarty %}
{$myVar='test string'}
{% endhighlight %}