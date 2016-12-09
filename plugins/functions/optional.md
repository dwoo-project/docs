---
layout: plugin
title: optional
versions: [1.0, 1.1, 1.2, 1.3]
---

Prints out a variable without any notice if it doesn't exist.
<div class="code-box">
{% highlight php %}
<?php
optional(mixed $value)
{% endhighlight %}
</div>

* **value**: variable to print

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{optional $var}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
(nothing if $var isn't defined, but no warning either)
{% endhighlight %}
</div>