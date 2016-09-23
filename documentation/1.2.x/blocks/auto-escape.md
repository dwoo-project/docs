---
layout: documentation
title: auto_escape
---

Overrides the compiler auto-escape setting within the block
{% highlight php %}
<?php
auto_escape(mixed $enabled)
{% endhighlight %}

* **enabled**: if set to "on", "enable", true or 1 then the compiler autoescaping is enabled inside this block. set to "off", "disable", false or 0 to disable it

## Example
{% highlight smarty %}
{$user="<a href=\"javascript:jsAttack()\">EvilTroll</a>"}
{$user} {* => no escaping, if you didn't filter your data in your php code, this is potentially harmful user input *}
 
{auto_escape on}
{$user} {* here any injected html is escaped so it's safe *}
{/auto_escape}
{% endhighlight %}

## Output
{% highlight html %}
<a href="javascript:jsAttack()">EvilTroll</a> => interpreted as HTML by the browser
&lt;a href="javascript:jsAttack()"&gt;EvilTroll&lt;/a&gt; => interpreted as text by the browser
{% endhighlight %}