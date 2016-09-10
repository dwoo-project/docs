---
layout: documentation
title: dynamic
---

Marks the contents of the block as dynamic. Which means that it will not be cached.
{% highlight php %}
<?php
dynamic()
{% endhighlight %}

If you are using Dwoo's caching (as in real output caching, not just the compiled templates thing), and you want some piece of a template not to be cached, just suround it with the `{dynamic}...{/dynamic}` tag