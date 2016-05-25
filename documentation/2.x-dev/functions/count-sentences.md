---
layout: documentation
title: Functions:countSentences
---

Counts the sentences in a string
{% highlight php %}
countSentences(string $value)
{% endhighlight %}

* **value** : the string to process

## Example
{% highlight smarty %}
{countSentences('ab cd')}
{countSentences('ab. cd')}
{% endhighlight %}

## Output
{% highlight text %}
1
2
{% endhighlight %}