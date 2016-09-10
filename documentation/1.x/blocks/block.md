---
layout: documentation
title: block
---

Defines a block that can be extended by a child template
{% highlight php %}
<?php
block(string $name)
{% endhighlight %}

* **name**: block name, create a new block with that same name in the child template to override it

Read the [template inheritance](/documentation/1.x/template-inheritance.html) page for more details and examples.