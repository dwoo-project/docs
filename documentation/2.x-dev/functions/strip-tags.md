---
layout: documentation
title: Functions:stripTags
---

Removes all html tags
{% highlight php %}
stripTags(string $value, [ bool $addspace = true ])
{% endhighlight %}

* **value** : the string to process
* **addspace** : if true, a space is added in place of every removed tag

##Example
{% highlight smarty %}
{stripTags "foo<strong>bold</strong>bar"}
{stripTags "foo<strong>bold</strong>bar" false}
{% endhighlight %}

##Output
{% highlight text %}
foo bold bar
fooboldbar
{% endhighlight %}