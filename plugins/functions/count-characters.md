---
layout: plugin
title: count_characters
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Counts the characters in a string
<div class="code-box">
{% highlight php %}
<?php
count_characters(string $value, [ bool $count_spaces = false ])
{% endhighlight %}
</div>

* **value**: the string to process
* **count_spaces**: if true, the white-space characters are counted as well


### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{count_characters('ab cd')}
{count_characters('ab cd', true)}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
4
5
{% endhighlight %}
</div>
