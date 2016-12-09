---
layout: plugin
title: wordwrap
versions: [1.0, 1.1, 1.2, 1.3]
---

Wraps a text at the given line length
<div class="code-box">
{% highlight php %}
<?php
wordwrap(string $value, [ int $length = 80, [ string $break = "\n", [ bool $cut = false ]]])
{% endhighlight %}
</div>

* **value**: the text to wrap
* **length**: maximum line length
* **break**: the character(s) to use to break the line
* **cut**: if true, the line is cut at the exact length instead of breaking at the nearest space

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{wordwrap "abcdefghijklmnopqrstuvwxyz" 8 cut=true}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
abcdefgh
ijklmnop
qrstuvwx
yz
{% endhighlight %}
</div>