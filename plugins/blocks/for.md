---
layout: plugin
title: for
versions: [1.0, 1.1, 1.2, 1.3]
---

Similar to the php for statement
<div class="code-box">
{% highlight php %}
<?php
for(string $name, mixed $from, [ int $to = null, [ int $step = 1, [ int $skip = 0 ]]])
{% endhighlight %}
</div>

* **name**: foreach name to access it's iterator variables
* **from**: array to iterate from (which will translate to 0) or a number as a start value
* **to**: value to stop iterating at (if you set an array in `$from`, this is automatically set to `count($array))`
* **step**: defines the incrementation of the pointer at each iteration

> Note that this plugin supports [iterator variables](/documentation/1.2.x/iterator-variables.html) through the name parameter and also supports the else plugin


### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{for i 0 5} {$i} {/for}
 
{for i 0 5 2} {$i} {/for}
 
{$arr=array("Bob","John","Jim")}
{for i $arr}
  {$i} -> {$arr.$i} {* or $arr[$i] *}
{/for}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
0  1  2  3  4  5 
0  2  4 
0 -> Bob
1 -> John
2 -> Jim
{% endhighlight %}
</div>