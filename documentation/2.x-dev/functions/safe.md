---
layout: documentation
title: Functions:safe
---

Marks the variable as safe and removes the auto-escape function, only useful if you turned auto-escaping on
{% highlight php %}
safe(mixed $var)
{% endhighlight %}

* **var** : the variable to pass through untouched

##Example
{% highlight smarty %}
{auto_escape on}
{safe $user}
{/auto_escape}
{% endhighlight %}