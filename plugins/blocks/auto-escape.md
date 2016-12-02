---
layout: plugin
title: auto_escape
versions: [1.2, 1.3]
---

auto_escape — Overrides the compiler auto-escape setting within the block

### Description
<div class="code-box synopsis">
{% highlight php %}
<?php
auto_escape(mixed $enabled)
{% endhighlight %}
</div>

* **enabled**: if set to `on`, `enable`, `true` or `1` then the compiler autoescaping is enabled inside this block.
 set to `off`, `disable`, `false` or `0` to disable it.

### Examples
Example #1, no escaping:
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$user="<a href=\"javascript:jsAttack()\">EvilTroll</a>"}
{$user}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
<header>Interpreted as HTML by the browser</header>
{% highlight html %}
<a href="javascript:jsAttack()">EvilTroll</a>
{% endhighlight %}
</div>

Example #2, enable auto escaping:
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{auto_escape on}
{$user} {* here any injected html is escaped so it's safe *}
{/auto_escape}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
<header>Interpreted as text by the browser</header>
{% highlight html %}
&lt;a href="javascript:jsAttack()"&gt;EvilTroll&lt;/a&gt;
{% endhighlight %}
</div>