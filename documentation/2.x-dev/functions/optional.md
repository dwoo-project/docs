---
layout: documentation
title: Functions:optional
---

Prints out a variable without any notice if it doesn't exist.
{% highlight php %}
optional(mixed $value)
{% endhighlight %}

* **value** : variable to print

## Example
{% highlight smarty %}
{optional $var}
{% endhighlight %}

## Output
{% highlight text %}
(nothing if $var isn't defined, but no warning either)
{% endhighlight %}