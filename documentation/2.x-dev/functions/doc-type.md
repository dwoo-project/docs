---
layout: documentation
title: Functions:docType
---

Outputs a valid (X)HTML DOCTYPE
{% highlight php %}
docType([$docType = ''])
{% endhighlight %}

* **docType** : the name of the doctype, falls back to HTML5 if not recognized or given

## Available DOCTYPES
* HTML5
* XHTML11
* XHTML1_STRICT
* XHTML1_TRANSITIONAL
* XHTML1_FRAMESET
* XHTML_BASIC1
* HTML4_STRICT
* HTML4_LOOSE
* HTML4_FRAMESET

## Example
{% highlight smarty %}
{docType XHTML1_STRICT}
{docType}
{% endhighlight %}

## Output
{% highlight html %}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!DOCTYPE html>
{% endhighlight %}