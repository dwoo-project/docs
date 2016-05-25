---
layout: documentation
title: Functions:formatSize
---

Formats a given filesize in bytes into a human readable filesize
{% highlight php %}
formatSize($size)
{% endhighlight %}

* **size** : the filesize in bytes
* **unit** : the output unit desired
* **decimals** : round to display

> Thanks to [JR](http://www.if-not-true-then-false.com/author/juissi/){:target="_blank"} for is helpful function: [http://www.if-not-true-then-false.com/2009/format-bytes-with-php-b-kb-mb-gb-tb-pb-eb-zb-yb-converter/](http://www.if-not-true-then-false.com/2009/format-bytes-with-php-b-kb-mb-gb-tb-pb-eb-zb-yb-converter/){:target="_blank"}

## Example
{% highlight smarty %}
{"123"|formatSize}
{"2049"|formatSize}
{"123456"|formatSize}
{"5000000"|formatSize}
{"1572864"|formatSize}
{formatSize("1572864", "KB", 3)}
{% endhighlight %}

## Output
{% highlight text %}
123.00 B
2.00 KB
120.56 KB
4.77 MB
1.50 MB
1536.000 KB
{% endhighlight %}