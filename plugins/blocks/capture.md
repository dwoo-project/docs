---
layout: plugin
title: capture
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

capture — Captures all the output within this block and saves it into `{$.capture.default}` by default, or
`{$.capture.name}` if you provide another name.

### Description
<div class="code-box">
{% highlight php %}
<?php
capture([string $name = 'default', [ string $assign = null, [ bool $cat = false ]]])
{% endhighlight %}
</div>

* **name** capture name, used to read the value afterwards
* **assign**: if set, the value is also saved in the given variable
* **cat**: if `true`, the value is appended to the previous one (if any) instead of overwriting it. If the `cat` 
parameter is `true`, the content will be appended to the existing content.

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{capture "foo"}
  Anything in here wont show, it will be saved for later use..
{/capture}
Captured: {$dwoo.capture.foo}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
Captured: Anything in here wont show, it will be saved for later use..
{% endhighlight %}
</div>