---
layout: documentation
title: "Functions:truncate"
---

Truncates a string at the given length
{% highlight php %}
<?php
truncate(string $value, [ int $length = 80, [ string $etc = '...', [ bool $break = false, [ bool $middle = false ]]]])
{% endhighlight %}

* **value**: text to truncate
* **length**: the maximum length for the string
* **etc**: the characters that are added to show that the string was cut off
* **break**: if true, the string will be cut off at the exact length, instead of cutting at the nearest space
* **middle**: if true, the string will contain the beginning and the end, and the extra characters will be removed from the middle

## Example
{% highlight smarty %}
{truncate "this text is really too long, or let's just pretend it is will you?" 30 middle=true}
{strlen truncate("this text is really too long, or let's just pretend it is will you?" 30 middle=true)} {* here we check its length to verify it's 30 chars alright *}
{% endhighlight %}

## Output
{% highlight text %}
this text is r... is will you?
30
{% endhighlight %}