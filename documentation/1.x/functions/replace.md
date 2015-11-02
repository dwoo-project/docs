---
layout: documentation
title: "Functions:replace"
---

Replaces the search string by the replace string
{% highlight php %}
<?php
replace(string $value, mixed $search, mixed $replace)
{% endhighlight %}

* **value**: the string to search into
* **search**: the string to search for or an array of strings
* **replace**: the string to use as a replacement or an array of strings (matching the search array)

##Example
{% highlight smarty %}
{replace "abc" "b" "B"} or {"abc"|replace:array(a,c):array(A,C)}
{% endhighlight %}

##Output
{% highlight text %}
aBc or AbC
{% endhighlight %}