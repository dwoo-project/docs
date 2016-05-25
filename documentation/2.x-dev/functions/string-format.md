---
layout: documentation
title: Functions:stringFormat
---

Formats a string using the sprintf function
{% highlight php %}
stringFormat(string $value, string $format)
{% endhighlight %}

* **value** : the string to format
* **format** : the format to use, see sprintf() for details

## Example
{% highlight smarty %}
{stringFormat('23.5787446', "%.2f")}
{stringFormat('23.5787446', "%d")}
{% endhighlight %}

## Output
{% highlight html %}
23.58
23
{% endhighlight %}