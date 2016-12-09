---
layout: plugin
title: math
versions: [1.0, 1.1, 1.2, 1.3]
---

Computes a mathematical equation
<div class="code-box">
{% highlight php %}
<?php
math(string $equation, [ string $format = "", [ string $assign = "", [ array $rest = array() ]]])
{% endhighlight %}
</div>

* **equation**: the equation to compute, it can include normal variables with $foo or special math variables without the dollar sign
* **format**: output format, see [sprintf()](http://php.net/sprintf){:target="_blank"} for details
* **assign**: if set, the output is assigned into the given variable name instead of being output
* **rest**: all math specific variables that you use must be defined, see the example


### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$c=2}
{math "(a+b)*$c/4" a=3 b=5} {* which translates to: ((3+5)*2/4) *}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
4
{% endhighlight %}
</div>