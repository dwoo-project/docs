---
layout: plugin
title: else
versions: [1.2, 1.3]
---

Generic else block, it supports all builtin optional-display blocks which are [if](/plugins/blocks/if.html),
[loop](/plugins/blocks/loop.html), [for](/plugins/blocks/for.html), [foreach](/plugins/blocks/foreach.html) and
[with](/plugins/blocks/with.html).

If any of those block contains an else statement, the content between `{else}` and `{/*blockname*}` (you do not need to
close the else block) will be shown if the block's condition has no been met


### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{foreach $array val}
    $array is not empty so we display it's values : {$val}
{else}
    if this shows, it means that $array is empty or doesn't exist.
{/foreach}
{% endhighlight %}
</div>