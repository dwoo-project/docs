---
layout: plugin
title: load_templates
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Checks whether a variable is not null
<div class="code-box">
{% highlight php %}
<?php
load_templates(string $file)
{% endhighlight %}
</div>

* **file**: the resource/template name to parse for sub-templates (those are defined using
[{template}](/plugins/blocks/template.html))

> Templates are only visible in the file they are loaded, so if you include another file you have to call `load_templates` there also.

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{load_templates "subtemplates.tpl"}
 
{menu $menuTree}
{% endhighlight %}
</div>