---
layout: plugin
title: reverse
versions: [1.0, 1.1, 1.2, 1.3]
---

Reverses a string or an array
<div class="code-box">
{% highlight php %}
<?php
reverse(string $value, [ bool $preserve_keys = false ])
{% endhighlight %}
</div>

* **value**: the string or array to reverse
* **preserve_keys**: if value is an array and this is true, then the array keys are left intact

### Examples
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{loop reverse(array('a', 'b', 'c'))}{$} {/loop}
{"abc"|reverse}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
c b a 
cba
{% endhighlight %}
</div>