---
layout: documentation
title: autoEscape
---

Overrides the compiler auto-escape setting within the block
{% highlight php %}
autoEscape(mixed $enabled)
{% endhighlight %}
* **enabled** : if set to "on", "enable", true or 1 then the compiler autoescaping is enabled inside this block. set to "off", "disable", false or 0 to disable it

## Example
{% highlight smarty %}
{$user="<a href=\\"javascript:jsAttack()\\">EvilTroll</a>"}
{$user} {* => no escaping, if you didn't filter your data in your php code, this is potentially harmful user input *}
 
{autoEscape on}
{$user} {* here any injected html is escaped so it's safe *}
{/autoEscape}
{% endhighlight %}

## Output
{% highlight html %}
<a href="javascript:jsAttack()">EvilTroll</a>
&lt;a href="javascript:jsAttack()"&gt;EvilTroll&lt;/a&gt;
{% endhighlight %}
> First result will be interpreted as HTML by the browser.  
> Second result will be interpreted as text by the browser.