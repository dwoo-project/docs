---
layout: documentation
title: literal
---

Outputs the entire block contents without parsing them as template code.
{% highlight php %}
<?php
literal()
{% endhighlight %}

> This block MUST be closed explicitly using `{/literal}`, doing it like `{/}` or closing it's parent block will not work


### Example
{% highlight smarty %}
{$var=3}
{literal}
 {$var} {* Comments and the strip plugin are an exception to the literal rule as they still behave as expected even within a literal block *}
{/literal}
{$var}
{% endhighlight %}

### Output
{% highlight smarty %}
{$var} 
3
{% endhighlight %}