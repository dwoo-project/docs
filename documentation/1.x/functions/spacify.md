---
layout: documentation
title: "Functions:spacify"
---

Adds spaces (or the given character(s)) between every character of a string
{% highlight php %}
<?php
spacify(string $value, [ $space_char = ' ' ])
{% endhighlight %}

* **value**: the string to process
* **space_char**: the character(s) to insert between each character

## Example
{% highlight smarty %}
{spacify 'abcd'}
{spacify 'abcd' '-'}
{% endhighlight %}

## Output
{% highlight text %}
a b c d
a-b-c-d
{% endhighlight %}