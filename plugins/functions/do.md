---
layout: plugin
title: do
versions: [1.0, 1.1, 1.2, 1.3]
---

Executes whatever follows without output. This is basically a cleaner alternative to doing `{assign func("foo") var}` or to use `{capture}` to silence some output.

I can't think of any reason to use it in a template, but since it's there for internal reasons, you might as well use it if required.

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{do "foo"}
{do reverse("bar")}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
*nothing*
{% endhighlight %}
</div>