---
layout: documentation
title: include
---

Include allows you to insert other templates into the current template.
{% highlight php %}
include(string $file [, int $cache_time = null [, string $cache_id = null [, string $compile_id = null [, mixed $data = '_root' [, string $assign = null [, array $rest = array() ]]]]]])
{% endhighlight %}

* **file** : the resource name to include
* **cache_time** : the template cache length in seconds, defaults to null (= will take the Dwoo object cache length)
* **cache_id** : the template cache id
* **compile_id** : the template compile id
* **data** : this is the data array that will be used as the root data for the included template, by default the current data is sent
* **assign** : if set, the included file will be assigned to the given variable and it will not be output
* **rest** : any number of values that will override the $data argument (see below)

> **Note:** All assigned variables are passed and available from the included file !  
> **Note:** You cannot include a parent template using `../`. However to refer to the root directory you can use `./`.

As an example, you may have a common header that you would like to include into all of your pages. This can be accomplished like this :

index.html:
{% highlight smarty %}
<html>
  <head>
    <title>Some awesome website</title>
  </head>
  <body>
 
    {include file="header.html"}
 
  </body>
</html>
{% endhighlight %}

header.html:
{% highlight smarty %}
<h1>Some awesome website</h1>
<div id="menu">
{loop $menuItems}<a href="{$url}">{$title}</a>{/loop}
</div>
{% endhighlight %}

Output:
{% highlight html %}
<html>
  <head>
    <title>Some awesome website</title>
  </head>
  <body>
 
    <h1>Some awesome website</h1>
    <div id="menu">
      <a href="index.html">Home</a>
      <a href="products.html">Products</a>
      <a href="contact.html">Contact</a>
    </div>
 
  </body>
</html>
{% endhighlight %}

## Overriding/passing template variables
Sometimes you may need to pass variables to another template without wanting to include them in the data parameter of the get or output methods of the Dwoo class. This can be done by adding them in as parameters as the following example illustrates:

site_header.tpl:
{% highlight smarty %}
<html>
  <head>
    <title>{$title} - Awesome Inc.</title>
  </head>
  <body>
{% endhighlight %}

page_about.tpl:
{% highlight smarty %}
{include file="site_header.tpl" title="About Us"}
 
<!-- Other content for a company "About us" webpage goes here -->
{% endhighlight %}

In the above example we have two files, one for a header and a snippet of a fictional 'About us' page. The page_about.tpl is parsed and passes it's title "About Us" through the title variable in the include statement to give the output:
{% highlight html %}
<html>
  <head>
    <title>About Us - Awesome Inc.</title>
  </head>
  <body>
{% endhighlight %}
