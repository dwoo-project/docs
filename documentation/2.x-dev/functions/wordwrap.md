---
layout: documentation
title: Functions:wordwrap
---

Wraps a text at the given line length
{% highlight php %}
wordwrap(string $value, [ int $length = 80, [ string $break = "\n", [ bool $cut = false ]]])
{% endhighlight %}

* **value** : the text to wrap
* **length** : maximum line length
* **break** : the character(s) to use to break the line
* **cut** : if true, the line is cut at the exact length instead of breaking at the nearest space

## Example
{% highlight smarty %}
{wordwrap "abcdefghijklmnopqrstuvwxyz" 8 cut=true}
{% endhighlight %}

## Output
{% highlight text %}
abcdefgh
ijklmnop
qrstuvwx
yz
{% endhighlight %}