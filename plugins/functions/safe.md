---
layout: plugin
title: safe
versions: [1.0, 1.1, 1.2, 1.3]
---

Marks the variable as safe and removes the auto-escape function, only useful if you turned auto-escaping on
<div class="code-box">
{% highlight php %}
<?php
safe(mixed $var)
{% endhighlight %}
</div>

* **var**: the variable to pass through untouched