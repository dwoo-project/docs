---
layout: plugin
title: extends
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Extends another template, read more about [template inheritance](/documentation/v1.3/template-inheritance.html) for
 details and examples.
<div class="code-box">
{% highlight php %}
<?php
extends(string $file)
{% endhighlight %}
</div>

* **file**: the template (resource name) to extend