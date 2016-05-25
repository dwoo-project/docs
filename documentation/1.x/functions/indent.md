---
layout: documentation
title: "Functions:indent"
---

Indents every line of a text by the given amount of characters
{% highlight php %}
<?php
indent(string $value, [ int $by = 4, [ string $char = ' ' ]])
{% endhighlight %}

* **value**: the string to indent
* **by**: how many characters should be inserted before each line
* **char**: the character(s) to insert

## Example
{% highlight smarty %}
baseline
{indent "foo bar baz
qux and then what was it
again? quux quuux and so on I think"}
{% endhighlight %}

## Output
{% highlight text %}
baseline
    foo bar baz
    qux and then what was it
    again? quux quuux and so on I think
{% endhighlight %}