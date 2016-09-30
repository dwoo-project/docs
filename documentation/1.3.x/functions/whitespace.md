---
layout: documentation
title: whitespace
---

Replaces all white-space characters with the given string
{% highlight php %}
whitespace(string $value, [ string $with = ' '])
{% endhighlight %}

* **value** : the text to process
* **with** : the replacement string, note that any number of consecutive white-space characters will be replaced by a single replacement string

## Example
{% highlight smarty %}
{"a    b  c        d\ne"|whitespace}
{% endhighlight %}

## Output
{% highlight text %}
a b c d e
{% endhighlight %}