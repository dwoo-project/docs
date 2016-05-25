---
layout: documentation
title: Functions:dump
---

Dumps values of the given variable, like a `var_dump()`
{% highlight php %}
dump($value)
{% endhighlight %}

* **value** : the variable to display

## Example
{% highlight smarty %}
{dump $}
{% endhighlight %}

## Output
Will output an array of all variables global.