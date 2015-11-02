---
layout: documentation
title: "Functions:date_format"
---

Formats a date
{% highlight php %}
<?php
date_format(string $value, [ string $format = '%b %e, %Y', [ mixed $default = null ]])
{% endhighlight %}

* **value**: the date, as a unix timestamp, mysql datetime or whatever strtotime() can parse
* **format**: output format, see [http://php.net/strftime](http://php.net/strftime){:target="_blank"} for details
* **default**: a default timestamp value, if the first one is empty

##Example
{% highlight smarty %}
{$.now}
{date_format $.now "%Y-%m-%d"}
{date_format $.now "%D"}
{date_format "1994-3-15 10:24:22"}
{% endhighlight %}

##Output
{% highlight text %}
1211992444
2008-05-28
05/28/08
Mar 15, 1994
{% endhighlight %}