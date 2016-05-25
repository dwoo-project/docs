---
layout: documentation
title: "Functions:regex_replace"
---

Replaces the search string by the replace string using regular expressions
{% highlight php %}
<?php
regex_replace(string $value, string $search, string $replace)
{% endhighlight %}

* **value**: the string to search into
* **search**: the string to search for, must be a complete regular expression including delimiters
* **replace**: the string to use as a replacement, must be a complete regular expression including delimiters

> Note that if you want to use backreferences, use `\$1` instead of `$1`, `\$2` for `$2` and so on, otherwise Dwoo will replace the `$1` as if it was a variable.

## Example
{% highlight smarty %}
{regex_replace "abcdABCD" "/([a-z])/" "\$1*"}
{% endhighlight %}

## Output
{% highlight text %}
a*b*c*d*ABCD
{% endhighlight %}