---
layout: plugin
title: dump
versions: [1.0, 1.1, 1.2, 1.3]
---

Dumps values of the given variable, or the entire data if nothing provided
<div class="code-box">
{% highlight php %}
<?php
dump([ $var = '$' ])
{% endhighlight %}
</div>

* **var**: the variable to display, by default it shows the current scope