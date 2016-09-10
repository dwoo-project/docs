---
layout: documentation
title: math
---

Computes a mathematical equation
{% highlight php %}
<?php
math(string $equation, [ string $format = "", [ string $assign = "", [ array $rest = array() ]]])
{% endhighlight %}

* **equation**: the equation to compute, it can include normal variables with $foo or special math variables without the dollar sign
* **format**: output format, see [sprintf()](http://php.net/sprintf){:target="_blank"} for details
* **assign**: if set, the output is assigned into the given variable name instead of being output
* **rest**: all math specific variables that you use must be defined, see the example


## Example
{% highlight smarty %}
{$c=2}
{math "(a+b)*$c/4" a=3 b=5} {* which translates to: ((3+5)*2/4) *}
{% endhighlight %}

## Output
{% highlight text %}
4
{% endhighlight %}