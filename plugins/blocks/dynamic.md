---
layout: plugin
title: dynamic
versions: [1.0, 1.1, 1.2, 1.3]
---

Marks the contents of the block as dynamic. Which means that it will not be cached.

### Description
<div class="code-box">
{% highlight php %}
<?php
dynamic()
{% endhighlight %}
</div>

If you are using Dwoo's caching (as in real output caching, not just the compiled templates thing), and you want some
piece of a template not to be cached, just suround it with the `{dynamic}...{/dynamic}` tag