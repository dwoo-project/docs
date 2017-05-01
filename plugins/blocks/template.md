---
layout: plugin
title: template
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Checks whether a variable is not null
<div class="code-box">
{% highlight php %}
<?php
template(string $name [, array $rest = array() ])
{% endhighlight %}
</div>

* **name**: the sub-template name, that's how you will call it, if you use an existing plugin name it will overwrite the default one
* **rest**: list of arguments and optional default values (the argument 'name' is reserved for the template name itself)

> Also see [{load_templates}](/plugins/functions/load-templates.html) that allow to load multiple templates from one file much like you include functions/classes from an external file in php.


## Recursive menu example
With **$menuTree** being this array:
<div class="code-box">
<header>index.php</header>
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
</div>

<div class="code-box">
<header>index.tpl</header>
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
</div>

<div class="code-box">
{% highlight text %}
> Foo
  > Foo-Sub
  > Foo-Sub2
> Bar
> Baz
{% endhighlight %}
</div>