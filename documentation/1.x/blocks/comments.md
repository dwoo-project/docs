---
layout: documentation
title: comments
---

The comments plugin allows you to put comments in your template files. These comments are handled by Dwoo, and are not sent as output to the browser, unlike HTML comments.

Comments are delimited by `{*` and `*}` tags, and can be on a single line or spread across multiple lines.

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