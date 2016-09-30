---
layout: documentation
title: function
---

Create a function inside your template file.
{% highlight php %}
function(string $name [, array $rest = array() ])
{% endhighlight %}
* **name** : the sub-template name, that's how you will call it, if you use an existing plugin name it will overwrite the default one
* **rest** : list of arguments and optional default values (the argument 'name' is reserved for the template name itself)

> Also see [{load_templates}](/documentation/1.3.x/functions/load-templates.html) that allow to load multiple templates from one file much like you include functions/classes from an external file in php.  
> **Attention**: It's not possible to create a function with the same name.

## Recursive menu example
With $menuTree being this array:
{% highlight php %}
<?php
$menuTree = array(
  array('name'=>'Foo', 'children'=>array(
    array('name'=>'Foo-Sub', 'children'=>array()),
    array('name'=>'Foo-Sub2', 'children'=>array()),
  )), 
  array('name'=>'Bar', 'children'=>array()), 
  array('name'=>'Baz', 'children'=>array()), 
);
{% endhighlight %}

{% highlight smarty %}
{function menu data tick="-" indent=""}
  {foreach $data entry}
    {$indent}{$tick} {$entry.name}<br />
 
    {if $entry.children}
      {* recursive calls are allowed which makes subtemplates especially good to output trees *}
      {menu $entry.children $tick cat("&nbsp;&nbsp;", $indent)}
    {/if}
  {/foreach}
{/function}
 
{menu $menuTree ">"}
{% endhighlight %}

## Output
{% highlight text %}
> Foo
  > Foo-Sub
  > Foo-Sub2
> Bar
> Baz
{% endhighlight %}