---
layout: documentation
title: Functions:exectime
---

Return execution time of the php program.
{% highlight php %}
exectime([$precision = 0])
{% endhighlight %}

* **$precision** : The optional number of decimal digits to round to.

##Example
{% highlight smarty %}
{exectime 3}ms
{% endhighlight %}

##Output
{% highlight text %}
62.064ms
{% endhighlight %}