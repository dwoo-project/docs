---
layout: plugin
title: counter
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Initiates a counter that is incremented every time you call it
<div class="code-box">
{% highlight php %}
<?php
counter([ string $name = 'default', [ int $start = 1, [ int $skip = 1, [ string $direction = "up", [ bool $print = true, [ string $assign = null ]]]]]])
{% endhighlight %}
</div>

* **name**: the counter name, define it if you want to have multiple concurrent counters
* **start**: the start value, if it's set, it will reset the counter to this value, defaults to 1
* **skip**: the value to add to the counter at each call, defaults to 1
* **direction**: **up** (default) or **down** to define whether the counter increments or decrements
* **print**: if false, the counter will not output the current count, defaults to true
* **assign**: if set, the counter is saved into the given variable and does not output anything, overriding the print parameter

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{counter start=10 skip=5}
{counter}
{counter}
{counter start=10 direction=down}
{counter}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
10
15
20
10
5
{% endhighlight %}
</div>