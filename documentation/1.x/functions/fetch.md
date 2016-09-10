---
layout: documentation
title: fetch
---

Reads a file
{% highlight php %}
<?php
fetch(string $file, [ string $assign = null ])
{% endhighlight %}

* **file**: path or URI of the file to read (however reading from another website is not recommended for performance reasons)
* **assign**: if set, the file will be saved in this variable instead of being output