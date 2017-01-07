---
layout: plugin
title: strip_tags
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Removes all html tags
<div class="code-box">
{% highlight php %}
<?php
strip_tags(string $value, [ bool $addspace = true ])
{% endhighlight %}
</div>

* **value**: the string to process
* **addspace**: if true, a space is added in place of every removed tag
* **allowed_tags**: specify tags which should not be stripped

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{strip_tags "foo<strong>bold</strong>bar"}
{strip_tags "foo<strong>bold</strong>bar" false}
{strip_tags "<i>foo</i><strong>bold</strong>bar" false "<strong>"}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
foo bold bar
fooboldbar
foo<strong>bold</strong>bar
{% endhighlight %}
</div>

## Changelog

| Version | Description |
| ------- | ----------- |
| **1.3.3** | Added the `allowed_tags` parameter. |
{: class="table table-striped table-bordered"}