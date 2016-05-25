---
layout: documentation
title: "Functions:count_sentences"
---

Counts the sentences in a string
{% highlight php %}
<?php
count_sentences(string $value)
{% endhighlight %}

* **value**: the string to process

## Example
{% highlight smarty %}
{count_sentences('ab cd')}
{count_sentences('ab. cd')}
{% endhighlight %}

## Output
{% highlight text %}
1
2
{% endhighlight %}