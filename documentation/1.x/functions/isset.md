---
layout: documentation
title: "Functions:isset"
---

Checks whether a variable is not null
{% highlight php %}
<?php
isset(mixed $var)
{% endhighlight %}

* **var**: variable to check

##Example
{% highlight smarty %}
{if isset($foo)}SET{else}not set or null{/if}
{$foo=1}
{if isset($foo)}SET{else}not set or null{/if}
{$bar=null}
{if isset($bar)}SET{else}not set or null{/if}
{% endhighlight %}

##Output
{% highlight smarty %}
not set or null
SET
not set or null
{% endhighlight %}

Note that, doing:
{% highlight smarty %}
{if $foo}{$foo}{/if}
{% endhighlight %}

..is the same as if you used:
{% highlight smarty %}
{if isset($foo)}{$foo}{/if}
{% endhighlight %}