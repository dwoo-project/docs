---
layout: plugin
title: regex_replace
versions: [1.0, 1.1, 1.2, 1.3]
---

Replaces the search string by the replace string using regular expressions
<div class="code-box">
{% highlight php %}
<?php
regex_replace(string $value, string $search, string $replace)
{% endhighlight %}
</div>

* **value**: the string to search into
* **search**: the string to search for, must be a complete regular expression including delimiters
* **replace**: the string to use as a replacement, must be a complete regular expression including delimiters

> Note that if you want to use backreferences, use `\$1` instead of `$1`, `\$2` for `$2` and so on, otherwise Dwoo will replace the `$1` as if it was a variable.

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{regex_replace "abcdABCD" "/([a-z])/" "\$1*"}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
a*b*c*d*ABCD
{% endhighlight %}
</div>