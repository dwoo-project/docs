---
layout: documentation
title: Template Inheritance
---

Inheritance brings the concept of Object Oriented Programming to templates, allowing you to define one (or more) base templates that can be extended by child templates. Extending means that the child can override some of the parent areas, read on as it is easier to understand by looking at an example.

##Usage
Let's say you want a default header and footer in your pages, the more common approach to this (without inheritance) is to put at the top and bottom of every template `{include "header.html"}` and `{include "footer.html"}`. However this is not very flexible since you can only modify the area between header and footer, and you have to redefine the entire content area in each template. That could be improved by including more than two files but it would quickly become messy to manage.

What you do with template inheritance is define blocks, which are areas that can be overriden by child templates, so your base template will look like this:

* **base.html**
{% highlight smarty %}
<html>
  <head>
    <title>{block "title"}My site name{/block}</title>
    {* css includes, etc. *}
  </head>
  <body>
    <h1>{block "page-title"}Default page title{/block}</h1>
    <div id="content">
      {block "content"}
        Welcome to my amazing homepage
      {/block}
    </div>
  </body>
</html>
{% endhighlight %}
So what we have here is a file that defines three blocks, title, page-title and content. Those three can -but don't have to- be overriden in a child template, for example if you have a photo gallery you may want to replace the title, so you can do:

* **gallery_base.html**
{% highlight smarty %}
{extends "base.html"}
 
{block "title"}
Gallery
{/block}
{% endhighlight %}
By doing this, all pages extending `gallery_base.html` will have "Gallery" as their title. Note that we did not redefine the content and page-title blocks since these we wanted to keep their default content from base.html.

The next thing you might want to do is define several gallery pages extending gallery_base.

* **gallery_home.html**
{% highlight smarty %}
{extends "gallery_base.html"}
 
{block "title"}Home - {$dwoo.parent}{/block}
 
{block "page-title"}Gallery home{/block}
 
{block "content"}
  {foreach $images img}
    <img src="{$img.url}" alt="{$img.description}" />
  {/foreach}
{/block}
{% endhighlight %}
As you see we redefined all the blocks here, however in the title block we used `{$dwoo.parent}`, which tells Dwoo to insert the default content from the parent template in its place. The content block was overriden to display the images of the gallery, and page-title has also be overriden to display a completely different title.

Now if we render `gallery_home.html` we will get this:
{% highlight html %}
<html>
  <head>
    <title>Home - Gallery</title>
  </head>
  <body>
    <h1>Gallery home</h1>
    <div id="content">
      <img src="/example.jpg" alt="image" />
      <img src="/example2.jpg" alt="image" />
      <img src="/example3.jpg" alt="image" />
    </div>
  </body>
</html>
{% endhighlight %}
Defining new blocks in children templates is currently not supported.

##Summary
To sum things up, here is a list of short hints and limitations that apply to template inheritance:

* You currently can not close a block with the short-hand syntax `{/}`, you must explicitly do `{/block}`
* The parent should define as much `{block "name"}...{/block}` parts as possible since it will be as flexible as the amount of blocks it has and this process happens entirely during template compilation so it adds nearly no overhead to the whole process
* The children templates must start with `{extends "parent.html"}`
* The children can not define any content besides what's inside {block} tags they override, anything outside of `{block}` blocks will be removed
* You can access the parent block content when overriding it through the `{$dwoo.parent}`
* The parent can define multiple blocks with the same name, they will all be overriden at once if the child redefines it, and `{$dwoo.parent}` will vary according to each overriden block
* The inheritance tree can be as big as you want (meaning you can extend a file that extends another one that extends another one and so on..), but be aware that all files have to be checked for modifications at runtime so the more inheritance the more overhead you add, but unless performance is really a concern for you it shouldn't matter too much