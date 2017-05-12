---
layout: plugin
title: a
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

a — Outputs an html `<a>` tag

### Description
<div class="code-box synopsis">
{% highlight php %}
<?php
a(string $href, array $rest = [])
{% endhighlight %}
</div>

* **href**: the target URI where the link must point
* **rest**: any other attributes you want to add to the tag can be added as named parameters

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{a $url class="external"}Dwoo{/a}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight html %}
<a href="dwoo.org" class="external">Dwoo</a>
{% endhighlight %}
</div>

Example #2, short syntax
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{a $url /}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight html %}
<a href="dwoo.org">dwoo.org</a>
{% endhighlight %}
</div>
