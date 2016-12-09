---
layout: plugin
title: lower
versions: [1.0, 1.1, 1.2, 1.3]
---

Converts a given string to lower case.
<div class="code-box">
{% highlight php %}
<?php
lower(string $value)
{% endhighlight %}
</div>

* **value**: string to convert

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{lower('ThiS IS a STRING')}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
this is a string
{% endhighlight %}
</div>