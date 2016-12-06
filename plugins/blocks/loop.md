---
layout: plugin
title: loop
---

Loops over an array of arrays and allows for really simple / small constructs by moving the scope down to each element automatically. It is basically a combination of foreach and with internally.
<div class="code-box">
{% highlight php %}
<?php
loop(array $from [, $name = "default ] )
{% endhighlight %}
</div>

> Note that this plugin supports [iterator variables](/documentation/iterator-variables.html) through the name parameter and also supports the [else](/plugins/blocks/else.html) plugin

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{loop $users}
    {$id}-{$name}
{/loop}
{% endhighlight %}
</div>

Data file:
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
'users' => array(
  array( 'id' => 1, 'name' => 'Bob'),
  array( 'id' => 2, 'name' => 'John' )
)
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
1-Bob
2-John
{% endhighlight %}
</div>

## Accessing the array key
To access the array key you have to use the `{$_key}` var within the loop, its name is not user-definable to keep this plugin as simple as possible.

## Extra reads
* [Using iterator variables](/documentation/iterator-variables.html)