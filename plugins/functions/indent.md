---
layout: plugin
title: indent
versions: [1.0, 1.1, 1.2, 1.3]
---

Indents every line of a text by the given amount of characters
<div class="code-box">
{% highlight php %}
<?php
indent(string $value, [ int $by = 4, [ string $char = ' ' ]])
{% endhighlight %}
</div>

* **value**: the string to indent
* **by**: how many characters should be inserted before each line
* **char**: the character(s) to insert

### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
baseline
{indent "foo bar baz
qux and then what was it
again? quux quuux and so on I think"}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
baseline
    foo bar baz
    qux and then what was it
    again? quux quuux and so on I think
{% endhighlight %}
</div>