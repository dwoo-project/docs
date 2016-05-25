---
layout: documentation
title: "Functions:count_paragraphs"
---

Counts the paragraphs in a string
{% highlight php %}
<?php
count_paragraphs(string $value)
{% endhighlight %}

* **value**: the string to process


## Example
{% highlight smarty %}
{count_paragraphs('ab cd')}
{count_paragraphs('ab\n cd')}
{% endhighlight %}

## Output
{% highlight text %}
1
2
{% endhighlight %}