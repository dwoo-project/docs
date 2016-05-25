---
layout: documentation
title: "Blocks:foreach"
---

Similar to the php foreach block, loops over an array
{% highlight php %}
<?php
foreach(array $from, [ string $key = null, [ string $item = null, [ string $name = 'default', [ string $implode = null ]]]])
{% endhighlight %}

* **from**: the array that you want to iterate over
* **key**: variable name for the key (or for the item if item is not defined)
* **item**: variable name for each item
* **name**: foreach name to access it's iterator variables
* **implode**: if provided, this will be added between every item

> Note that this plugin supports [iterator variables](/documentation/1.x/iterator-variables.html) through the name parameter and also supports the [else](/documentation/1.x/blocks/else.html) plugin.


## Example
{% highlight php %}
array(
  'arr' => array(
    array('id'=>1, 'name'=>'Jim'),
    array('id'=>2, 'name'=>'John'),
    array('id'=>3, 'name'=>'Bob'),
  )
)
{% endhighlight %}

{% highlight smarty %}
{foreach $arr val implode=", "}
  {$val.id} - {$val.name}
{/foreach}
{% endhighlight %}

## Output
{% highlight text %}
 1 - Jim,
 2 - John,
 3 - Bob
{% endhighlight %}

* The implode parameter allows you to use a comma or whatever you want to use to separate your items in a much easier way than having to do `{if $.foreach.name.last}`, `{/if}` inside the foreach block for example.