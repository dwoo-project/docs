---
layout: documentation
title: Functions:countCharacters
---

Counts the characters in a string
{% highlight php %}
countCharacters(string $value, [ bool $count_spaces = false ])
{% endhighlight %}

* **value** : the string to process
* **count_spaces** : if true, the white-space characters are counted as well

## Example
{% highlight smarty %}
{countCharacters('ab cd')}
{countCharacters('ab cd', true)}
{% endhighlight %}

## Output
{% highlight text %}
4
5
{% endhighlight %}