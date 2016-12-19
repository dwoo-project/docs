---
layout: plugin
title: upper
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Converts a given string to upper case.
<div class="code-box">
{% highlight php %}
<?php
upper(string $value)
{% endhighlight %}
</div>

* **value**: string to convert

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{upper('This is a String')}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
THIS IS A STRING
{% endhighlight %}
</div>