---
layout: documentation
title: Functions:lower
---

Converts a given string to lower case.
{% highlight php %}
lower(string $value)
{% endhighlight %}

* **value** : string to convert

##Example
{% highlight smarty %}
{lower('ThiS IS a STRING')}
{% endhighlight %}

#Output:
{% highlight html %}
this is a string
{% endhighlight %}