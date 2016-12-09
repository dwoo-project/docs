---
layout: plugin
title: count_sentences
versions: [1.0, 1.1, 1.2, 1.3]
---

Counts the sentences in a string
<div class="code-box">
{% highlight php %}
<?php
count_sentences(string $value)
{% endhighlight %}
</div>

* **value**: the string to process

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{count_sentences('ab cd')}
{count_sentences('ab. cd')}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
1
2
{% endhighlight %}
</div>