---
layout: documentation
title: "Blocks:template"
---

Checks whether a variable is not null
{% highlight php %}
<?php
template(string $name [, array $rest = array() ])
{% endhighlight %}

* **name**: the sub-template name, that's how you will call it, if you use an existing plugin name it will overwrite the default one
* **rest**: list of arguments and optional default values (the argument 'name' is reserved for the template name itself)

> Also see [{load_templates}](/documentation/1.x/functions/load-templates.html) that allow to load multiple templates from one file much like you include functions/classes from an external file in php.


## Recursive menu example
With **$menuTree** being this array:
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
{template menu data tick="-" indent=""}
  {foreach $data entry}
    {$indent}{$tick} {$entry.name}<br />
 
    {if $entry.children}
      {* recursive calls are allowed which makes subtemplates especially good to output trees *}
      {menu $entry.children $tick cat("&nbsp;&nbsp;", $indent)}
    {/if}
  {/foreach}
{/template}
 
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