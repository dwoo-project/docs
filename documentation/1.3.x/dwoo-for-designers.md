---
layout: documentation
title: Dwoo for Designers
---

This document describes the syntax and semantics of the template engine and will be most useful as reference to those creating Dwoo templates.

## Synopsis
A template is simply a text file. It can generate any text-based format (HTML, XML, TPL, etc.). It doesn't have a specific extension, .html or .tpl are just fine.

A template contains `variables` or `expressions`, which get replaced with values when the template is evaluated, and `tags`, which control the logic of the template.

Below is a minimal template that illustrates a few basics. We will cover the details later on:
{% highlight smarty %}
<!DOCTYPE html>
<html>
    <head>
        <title>My Webpage</title>
    </head>
    <body>
        <ul id="navigation">
        {foreach $navigation item}
            <li><a href="{$item.href}">{$item.caption}</a></li>
        {/foreach}
        </ul>

        <h1>My Webpage</h1>
        {$a_variable}
    </body>
</html>
{% endhighlight %}

In Dwoo there is only one kind of delimiter: `{...}` used by `variables`, `expressions` and `tags`.

## IDEs Integration
Seeing that Dwoo use the same syntax as Smarty, you can find many support of syntax highlighting and auto-completion such as:

* Eclipse via the [Smarty Plugin](https://code.google.com/p/smartypdt/){:target="_blank"}
* PhpStorm (native)
* and more ...

## Variables
The application passes variables to the templates you can mess around in the template. Variables may have attributes or elements on them you can access too. How a variable looks like heavily depends on the application providing those.

You can use a dot `.` to access attributes of a variable (methods or properties of a PHP object, or items of a PHP array), or the so-called "subscript" syntax `[]`:
{% highlight smarty %}
{$foo}
{$foo.bar}
{$foor['bar']}
{% endhighlight %}

## Global Variables
The following variables are always available in templates:

* `{$.version}` : Version number of Dwoo
* `{$.ad}` : Link to dwoo website
* `{$.now}` : Request time to execute the page
* `{$.charset}` : Return the used charset (default: **UTF-8**)

## Functions
Functions can be called to generate content. Functions are called by their name followed by parentheses and may have arguments.  
For example with the function `date_format`:
{% highlight smarty %}
{date_format "now" "Y-m-j"}
{% endhighlight %}

## Named Arguments
Using named arguments makes your templates more explicit about the meaning of the values you pass as arguments:
{% highlight smarty %}
{date_format value="now" format"Y-m-j"}
{% endhighlight %}

Named arguments also allow you to skip some arguments for which you don't want to change the default value:
{% highlight smarty %}
{date_format format="m/d/y" timestamp=$.now modify="+150 day"}
{% endhighlight %}

## Comments
To comment-out part of a line in a template, use the comment syntax {* ... *}.  
These comments are handled by Dwoo, and are not sent as output to the browser, unlike HTML comments.  
This is useful for debugging or to add information for other template designers or yourself:
{% highlight smarty %}
{* This is a Dwoo comment *}
 
{*
 * This is a multi line
 * Dwoo comment!
 *}
 
{*
  This is also a comment
*}
{% endhighlight %}

## Including other Templates
The include function is useful to include a template and return the rendered content of that template into the current one:
{% highlight smarty %}
{include 'header.html'}
{% endhighlight %}

Sometimes you may need to pass variables to another template without wanting to include them in the data parameter of the get or output methods of the Dwoo class. This can be done by adding them in as parameters as the following example illustrates:
{% highlight smarty %}
{include file='site_header.tpl' title='About Us'}
{% endhighlight %}

## Template Inheritance
The most powerful part of Dwoo is template inheritance. Template inheritance allows you to build a base "skeleton" template that contains all the common elements of your site and defines blocks that child templates can override.

Sounds complicated but is very basic. It's easier to understand it by starting with an example.

Let's define a base template, base.html, which defines a simple HTML skeleton document that you might use for a simple two-column page:
{% highlight smarty %}
<!DOCTYPE html>
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

In this example, the block tags define four blocks that child templates can fill in. All the block tag does is to tell the template engine that a child template may override those portions of the template.

A child template might look like this:
{% highlight smarty %}
{extends "base.html"}
 
{block "title"}
Gallery
{/block}
{% endhighlight %}

It's possible to render the contents of the parent block by using the parent function. This gives back the results of the parent block:
{% highlight smarty %}
{extends "base.html"}
 
{block "title"}Home - {$dwoo.parent}{/block}
{% endhighlight %}

## HTML Escaping
If you want to display, for some reasons the HTML code of a part of a code, you can use the function `escape`:
{% highlight smarty %}
{"some <strong>html</strong> tags"|escape}
{% endhighlight %}
will output: 
{% highlight html %}
some &lt;strong&gt;html&lt;/strong&gt; tags
{% endhighlight %}