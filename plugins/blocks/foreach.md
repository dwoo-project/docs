---
layout: plugin
title: foreach
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Similar to the php foreach block, loops over an array
<div class="code-box">
{% highlight php %}
<?php
foreach(array $from, [ string $key = null, [ string $item = null, [ string $name = 'default', [ string $implode = null ]]]])
{% endhighlight %}
</div>

* **from**: the array that you want to iterate over
* **key**: variable name for the key (or for the item if item is not defined)
* **item**: variable name for each item
* **name**: foreach name to access it's iterator variables
* **implode**: if provided, this will be added between every item

> Note that this plugin supports [iterator variables](/documentation/v1.3/iterator-variables.html) through the name 
parameter and also supports the [else](/plugins/blocks/else.html) plugin.


### Examples
Example #1
<div class="code-box">
<header>index.php</header>
{% highlight php %}
array(
  'arr' => array(
    array('id'=>1, 'name'=>'Jim'),
    array('id'=>2, 'name'=>'John'),
    array('id'=>3, 'name'=>'Bob'),
  )
)
{% endhighlight %}
</div>

<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{foreach $arr val implode=", "}
  {$val.id} - {$val.name}
{/foreach}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
 1 - Jim,
 2 - John,
 3 - Bob
{% endhighlight %}
</div>

* The implode parameter allows you to use a comma or whatever you want to use to separate your items in a much easier way than having to do `{if $.foreach.name.last}`, `{/if}` inside the foreach block for example.