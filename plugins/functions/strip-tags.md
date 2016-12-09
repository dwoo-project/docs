---
layout: plugin
title: strip_tags
versions: [1.0, 1.1, 1.2, 1.3]
---

Removes all html tags
<div class="code-box">
{% highlight php %}
<?php
strip_tags(string $value, [ bool $addspace = true ])
{% endhighlight %}
</div>

* **value**: the string to process
* **addspace**: if true, a space is added in place of every removed tag

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{strip_tags "foo<strong>bold</strong>bar"}
{strip_tags "foo<strong>bold</strong>bar" false}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
foo bold bar
fooboldbar
{% endhighlight %}
</div>