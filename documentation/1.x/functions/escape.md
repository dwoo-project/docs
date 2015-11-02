---
layout: documentation
title: "Functions:escape"
---

Applies various escaping schemes on the given string
{% highlight php %}
<?php
escape([ $value = "", [ $format = 'html', [ $charset = null ]]])
{% endhighlight %}

* **value**: the string to process
* **format**: escaping format to use, valid formats are : html, htmlall, url, urlpathinfo, quotes, hex, hexentity, javascript and mail
* **charset**: character set to use for the conversion (applies to some formats only), defaults to the current Dwoo charset

##Example
{% highlight smarty %}
{"some <strong>html</strong> tags"|escape}
{% endhighlight %}

##Output
{% highlight html %}
some &lt;strong&gt;html&lt;/strong&gt; tags
{% endhighlight %}