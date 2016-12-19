---
layout: plugin
title: literal
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Outputs the entire block contents without parsing them as template code.
<div class="code-box">
{% highlight php %}
<?php
literal()
{% endhighlight %}
</div>

> This block MUST be closed explicitly using `{/literal}`, doing it like `{/}` or closing it's parent block will not work


### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$var=3}
{literal}
 {$var} {* Comments and the strip plugin are an exception to the literal rule as they still behave as expected even within a literal block *}
{/literal}
{$var}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight smarty %}
{$var} 
3
{% endhighlight %}
</div>
