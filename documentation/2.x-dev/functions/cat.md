---
layout: documentation
title: Functions:cat
---

Concatenates any number of variables or strings fed into it
{% highlight php %}
cat(array $rest)
{% endhighlight %}

* **rest** : two or more strings that will be merged into one.


##Example:
{% highlight smarty %}
{$a='abc'}
{$d='def'}
{$g='ghi'}
{cat $a $d $g}
{% endhighlight %}

##Output:
{% highlight text %}
abcdefghi
{% endhighlight %}