---
layout: documentation
title: Functions:extends
---

Extends another template, read more about template inheritance for details and examples.
{% highlight php %}
extends(string $file)
{% endhighlight %}

* **file** : the template (resource name) to extend

> **Note:** You cannot extends a parent template using `../`. However to refer to the root directory you can use `./`.

##Example:
{% highlight smarty %}
{extends "base.tpl"}
{% endhighlight %}