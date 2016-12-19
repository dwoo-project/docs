---
layout: plugin
title: count_words
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Counts the words in a string
<div class="code-box">
{% highlight php %}
<?php
count_words(string $value)
{% endhighlight %}
</div>

* **value**: the string to process

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{count_words('ab cd')}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
2
{% endhighlight %}
</div>