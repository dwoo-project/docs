---
layout: plugin
title: block
versions: [1.0, 1.1, 1.2, 1.3]
---

block — Defines a block that can be extended by a child template

### Description
<div class="code-box">
{% highlight php %}
<?php
block(string $name)
{% endhighlight %}
</div>

* **name**: block name, create a new block with that same name in the child template to override it

Read the [template inheritance](/documentation/template-inheritance.html) page for more details and examples.