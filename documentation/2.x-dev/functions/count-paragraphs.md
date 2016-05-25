---
layout: documentation
title: Functions:countParagraphs
---

Counts the paragraphs in a string
{% highlight php %}
countParagraphs(string $value)
{% endhighlight %}

* **value** : the string to process

## Example
{% highlight smarty %}
{countParagraphs('ab cd')}
{countParagraphs('ab\n cd')}
{% endhighlight %}

## Output
{% highlight text %}
1
2
{% endhighlight %}