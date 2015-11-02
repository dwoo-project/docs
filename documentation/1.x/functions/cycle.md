---
layout: documentation
title: "Functions:cycle"
---

Cycles between several values and returns one of them on each call
{% highlight php %}
<?php
cycle([ string $name = 'default', [ mixed $values = null, [ bool $print = true, [ bool $advance = true, [ string $delimiter = ',', [ string $assign = null, [ bool $reset = false ]]]]]]])
{% endhighlight %}

* **name**: the cycler name, specify if you need to have multiple concurrent cycles running
* **values**: an array of values or a string of values delimited by $delimiter
* **print**: if false, the pointer will go to the next one but not print anything
* **advance**: if false, the pointer will not advance to the next value
* **delimiter**: the delimiter used to split values if they are provided as a string
* **assign**: if set, the value is saved in that variable instead of being output
* **reset**: if true, the pointer is reset to the first value

##Example
{% highlight smarty %}
{cycle values=array("1red","2blue","3green")}
{cycle}
{cycle advance=false}
{cycle}
{cycle}
{cycle}
{cycle reset=true}
{% endhighlight %}

##Output
{% highlight text %}
1red
2blue
3green
3green
1red
2blue
1red
{% endhighlight %}