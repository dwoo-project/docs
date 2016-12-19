---
layout: documentation
title: Iterator variables
---

Those variables are special variables that are automatically added to the [$dwoo variables](/documentation/2.x-dev/reference/dwoo-variables.html) when you run an iterator plugin ([foreach](/documentation/2.x-dev/blocks/foreach.html), [loop](/documentation/2.x-dev/blocks/loop.html) or [for](/documentation/2.x-dev/blocks/for.html)).

## Variables
* **first** _(bool)_ : true if the item being processed is the first, false otherwise
* **last** _(bool)_ : true if the item being processed is the last one, false otherwise
* **index** _(int)_ : the index number (starts from 0 and increases by 1 at each iteration)
* **iteration** _(int)_ : the iteration number (starts from 1 and increases by 1 at each iteration)
* **show** _(bool)_ : true if the loop will display something, false otherwise
* **total** _(int)_ : the total amount of items in the array

## Facts
* You access them through `{$dwoo.<plugin (foreach, loop or for)>.<foreach name>.<var>}`
* If you don't provide the name argument to a plugin, it will use the name "default" by default, which means that for example you can access a foreach var with `{$dwoo.foreach.default.first}`
* The `$dwoo` var can be [shortened](/documentation/2.x-dev/reference/shortcuts.html) as `$` which means that `{$.foreach.default.first}` would also work.

<div class="code-box">
<header>Example</header>
{% highlight smarty %}
{foreach $mArr, key, value, name='default'}
   {if $dwoo.foreach.default.first}
      First element
   {elseif $dwoo.foreach.default.index == 2}
      Second element
   {elseif $dwoo.foreach.default.last}
      Last element
   {/if}
{/foreach}
{% endhighlight %}
</div>