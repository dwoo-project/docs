---
layout: plugin
title: whitespace
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Replaces all white-space characters with the given string
<div class="code-box">
{% highlight php %}
<?php
whitespace(string $value, [ string $with = ' '])
assign(mixed $value, string $var)
{% endhighlight %}
</div>

* **value**: the text to process
* **with**: the replacement string, note that any number of consecutive white-space characters will be replaced by a single replacement string

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{"a    b  c        d\ne"|whitespace}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
a b c d e
{% endhighlight %}
</div>