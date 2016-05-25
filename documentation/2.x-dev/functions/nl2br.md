---
layout: documentation
title: Functions:nl2br
---

Converts line breaks into `<br />` tags
{% highlight php %}
nl2br(string $value)
{% endhighlight %}

* **value** : the string to process

## Example
{% highlight smarty %}
{nl2br("string
breaking")}
{% endhighlight %}

## Output
{% highlight html %}
string<br />
breaking
{% endhighlight %}