---
layout: plugin
title: cat
versions: [1.0, 1.1, 1.2, 1.3]
---

Concatenates any number of variables or strings fed into it
<div class="code-box">
{% highlight php %}
<?php
cat(array $rest)
{% endhighlight %}
</div>

* **rest**: two or more strings that will be merged into one.


### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$a='abc'}
{$d='def'}
{$g='ghi'}
{cat $a $d $g}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
abcdefghi
{% endhighlight %}
</div>