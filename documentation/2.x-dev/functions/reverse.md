---
layout: documentation
title: Functions:reverse
---

Reverses a string or an array
{% highlight php %}
reverse(string $value, [ bool $preserve_keys = false ])
{% endhighlight %}

* **value** : the string or array to reverse
* **preserve_keys** : if value is an array and this is true, then the array keys are left intact

##Example
{% highlight smarty %}
{loop reverse(array('a', 'b', 'c'))}{$} {/loop}
{"abc"|reverse}
{% endhighlight %}

##Output
{% highlight text %}
c b a 
cba
{% endhighlight %}