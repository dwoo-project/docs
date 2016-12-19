---
layout: plugin
title: isset
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Checks whether a variable is not null
<div class="code-box">
{% highlight php %}
<?php
isset(mixed $var)
{% endhighlight %}
</div>

* **var**: variable to check

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{if isset($foo)}SET{else}not set or null{/if}
{$foo=1}
{if isset($foo)}SET{else}not set or null{/if}
{$bar=null}
{if isset($bar)}SET{else}not set or null{/if}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight smarty %}
not set or null
SET
not set or null
{% endhighlight %}
</div>

Note that, doing:
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{if $foo}{$foo}{/if}
{% endhighlight %}
</div>

..is the same as if you used:
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{if isset($foo)}{$foo}{/if}
{% endhighlight %}
</div>