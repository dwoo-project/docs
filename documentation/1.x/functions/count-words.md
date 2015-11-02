---
layout: documentation
title: "Functions:count_words"
---

Counts the words in a string
{% highlight php %}
<?php
count_words(string $value)
{% endhighlight %}

* **value**: the string to process

##Example
{% highlight smarty %}
{count_words('ab cd')}
{% endhighlight %}

##Output
{% highlight text %}
2
{% endhighlight %}