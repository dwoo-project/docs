---
layout: plugin
title: escape
versions: [1.0, 1.1, 1.2, 1.3]
---

Applies various escaping schemes on the given string
<div class="code-box">
{% highlight php %}
<?php
escape([ $value = "", [ $format = 'html', [ $charset = null ]]])
{% endhighlight %}
</div>

* **value**: the string to process
* **format**: escaping format to use, valid formats are : html, htmlall, url, urlpathinfo, quotes, hex, hexentity, javascript and mail
* **charset**: character set to use for the conversion (applies to some formats only), defaults to the current Dwoo charset

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{"some <strong>html</strong> tags"|escape}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight html %}
some &lt;strong&gt;html&lt;/strong&gt; tags
{% endhighlight %}
</div>