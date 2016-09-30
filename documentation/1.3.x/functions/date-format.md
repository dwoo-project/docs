---
layout: documentation
title: dateFormat
---

Formats a date
{% highlight php %}
dateFormat([string $value = 'now', [ string $format = 'M n, Y', [ int $timestamp = 0, [int $timeZone = 2047, [string $modify = '']]]]]) 
{% endhighlight %}

* **value** : a date/time string, as a datetime formats or whatever the class `\DateTime` can support
* **format** : output format, see [http://www.php.net/manual/en/function.date.php](http://www.php.net/manual/en/function.date.php){:target="_blank"} for details
* **timestamp** : a valid timestamp value (int) needed
* **timeZone** : a datetimezone supported by the `\DateTimeZone` class
* **modify** : Alters the timestamp, see [http://www.php.net/manual/en/datetime.modify.php](http://www.php.net/manual/en/datetime.modify.php){:target="_blank"} for details

## Example
{% highlight smarty %}
{$.now}
{dateFormat value="now" format="Y-m-j"}
{dateFormat format="m/d/y" timestamp=$.now modify="+150 day"}
{dateFormat "1994-3-15 10:24:22"}
{% endhighlight %}

## Output
{% highlight text %}
1382017201.358
2013-10-17
03/16/14
Mar 3, 1994
{% endhighlight %}