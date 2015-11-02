---
layout: documentation
title: "Functions:load_templates"
---

Checks whether a variable is not null
{% highlight php %}
<?php
load_templates(string $file)
{% endhighlight %}

* **file**: the resource/template name to parse for sub-templates (those are defined using [{template}](/documentation/1.x/blocks/template.html))

> Templates are only visible in the file they are loaded, so if you include another file you have to call `load_templates` there also.

##Example
{% highlight smarty %}
{load_templates "subtemplates.tpl"}
 
{menu $menuTree}
{% endhighlight %}