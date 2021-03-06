---
layout: plugin
title: if
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Conditional block, the syntax is very similar to the php one, allowing `()` `||` `&&` and other [php operators](http://php.net/operators){:target="_blank"}.

Additional Dwoo operators and their equivalent php syntax are as follow:

* eq → ==
* neq or ne → !=
* gte or ge → >=
* lte or le → <=
* gt → >
* lt → <
* mod → %
* not → !
* X is [not] div by Y → (X % Y) == 0
* X is [not] even [by Y] → (X % 2) == 0 or ((X/Y) % 2) == 0
* X is [not] odd [by Y] → (X % 2) != 0 or ((X/Y) % 2) != 0

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{if 3 == 5}
  never gonna happen
{elseif 3 == 3}
  if you don't see this, the world is coming to its end
{else}
  this will never happen, unless, as previously mentionned, the world is coming to its end
{/if}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
if you don't see this, the world is coming to its end
{% endhighlight %}
</div>

## Changelog

| Version | Description |
| ------- | ----------- |
| **1.2.2** | Add support for `XOR` and `^` operators. |
{: class="table table-striped table-bordered"}