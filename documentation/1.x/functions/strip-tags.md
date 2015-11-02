---
layout: documentation
title: "Functions:strip_tags"
---

Removes all html tags
{% highlight php %}
<?php
strip_tags(string $value, [ bool $addspace = true ])
{% endhighlight %}

* **value**: the string to process
* **addspace**: if true, a space is added in place of every removed tag

##Example
{% highlight smarty %}
{strip_tags "foo<strong>bold</strong>bar"}
{strip_tags "foo<strong>bold</strong>bar" false}
{% endhighlight %}

##Output
{% highlight text %}
foo bold bar
fooboldbar
{% endhighlight %}