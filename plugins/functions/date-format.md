---
layout: plugin
title: date_format
versions: [1.0, 1.1, 1.2, 1.3]
---

Formats a date
<div class="code-box">
{% highlight php %}
<?php
date_format(string $value, [ string $format = '%b %e, %Y', [ mixed $default = null ]])
{% endhighlight %}
</div>

* **value**: the date, as a unix timestamp, mysql datetime or whatever strtotime() can parse
* **format**: output format, see [http://php.net/strftime](http://php.net/strftime){:target="_blank"} for details
* **default**: a default timestamp value, if the first one is empty

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$.now}
{date_format $.now "%Y-%m-%d"}
{date_format $.now "%D"}
{date_format "1994-3-15 10:24:22"}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
1211992444
2008-05-28
05/28/08
Mar 15, 1994
{% endhighlight %}
</div>