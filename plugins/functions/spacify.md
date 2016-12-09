---
layout: plugin
title: spacify
versions: [1.0, 1.1, 1.2, 1.3]
---

Adds spaces (or the given character(s)) between every character of a string
<div class="code-box">
{% highlight php %}
<?php
spacify(string $value, [ $space_char = ' ' ])
{% endhighlight %}
</div>

* **value**: the string to process
* **space_char**: the character(s) to insert between each character

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{spacify 'abcd'}
{spacify 'abcd' '-'}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
a b c d
a-b-c-d
{% endhighlight %}
</div>