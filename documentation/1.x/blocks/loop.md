---
layout: documentation
title: loop
---

Loops over an array of arrays and allows for really simple / small constructs by moving the scope down to each element automatically. It is basically a combination of foreach and with internally.
{% highlight php %}
<?php
loop(array $from [, $name = "default ] )
{% endhighlight %}

> Note that this plugin supports [iterator variables](/documentation/1.x/iterator-variables.html) through the name parameter and also supports the [else](/documentation/1.x/blocks/else.html) plugin

## Example
{% highlight smarty %}
{loop $users}
    {$id}-{$name}
{/loop}
{% endhighlight %}

### Data
{% highlight php %}
<?php
'users' => array(
  array( 'id' => 1, 'name' => 'Bob'),
  array( 'id' => 2, 'name' => 'John' )
)
{% endhighlight %}

## Output
{% highlight text %}
1-Bob
2-John
{% endhighlight %}

## Accessing the array key
To access the array key you have to use the `{$_key}` var within the loop, its name is not user-definable to keep this plugin as simple as possible.

## Extra reads
* [Using iterator variables](/documentation/1.x/iterator-variables.html)