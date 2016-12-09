---
layout: plugin
title: replace
versions: [1.0, 1.1, 1.2, 1.3]
---

Replaces the search string by the replace string
<div class="code-box">
{% highlight php %}
<?php
replace(string $value, mixed $search, mixed $replace)
{% endhighlight %}
</div>

* **value**: the string to search into
* **search**: the string to search for or an array of strings
* **replace**: the string to use as a replacement or an array of strings (matching the search array)

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{replace "abc" "b" "B"} or {"abc"|replace:array(a,c):array(A,C)}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
aBc or AbC
{% endhighlight %}
</div>