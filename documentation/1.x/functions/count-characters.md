---
layout: documentation
title: "Functions:count_characters"
---

Counts the characters in a string
{% highlight php %}
<?php
count_characters(string $value, [ bool $count_spaces = false ])
{% endhighlight %}

* **value**: the string to process
* **count_spaces**: if true, the white-space characters are counted as well


## Example
{% highlight smarty %}
{count_characters('ab cd')}
{count_characters('ab cd', true)}
{% endhighlight %}


## Output
{% highlight text %}
4
5
{% endhighlight %}
