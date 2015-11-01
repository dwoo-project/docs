---
layout: documentation
title: Functions:loadTemplates
---

Load other templates in the current template, any variables available in the current template are also available within the included template.
{% highlight php %}
loadTemplates(string $file)
{% endhighlight %}

* **file** : the resource/template name to parse for sub-templates (those are defined using `{template}`
Templates are only visible in the file they are loaded, so if you include another file you have to call load_templates there also.

##Example
{% highlight smarty %}
{loadTemplates "subtemplates.tpl"}
{% endhighlight %}