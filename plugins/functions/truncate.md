---
layout: plugin
title: truncate
versions: [1.0, 1.1, 1.2, 1.3]
---

Truncates a string at the given length
<div class="code-box">
{% highlight php %}
<?php
truncate(string $value, [ int $length = 80, [ string $etc = '...', [ bool $break = false, [ bool $middle = false ]]]])
{% endhighlight %}
</div>

* **value**: text to truncate
* **length**: the maximum length for the string
* **etc**: the characters that are added to show that the string was cut off
* **break**: if true, the string will be cut off at the exact length, instead of cutting at the nearest space
* **middle**: if true, the string will contain the beginning and the end, and the extra characters will be removed from the middle

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{truncate "this text is really too long, or let's just pretend it is will you?" 30 middle=true}
{strlen truncate("this text is really too long, or let's just pretend it is will you?" 30 middle=true)} {* here we check its length to verify it's 30 chars alright *}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
this text is r... is will you?
30
{% endhighlight %}
</div>