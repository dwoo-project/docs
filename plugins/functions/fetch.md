---
layout: plugin
title: fetch
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Reads a file
<div class="code-box">
{% highlight php %}
<?php
fetch(string $file, [ string $assign = null ])
{% endhighlight %}
</div>

* **file**: path or URI of the file to read (however reading from another website is not recommended for performance reasons)
* **assign**: if set, the file will be saved in this variable instead of being output