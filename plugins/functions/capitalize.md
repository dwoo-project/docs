---
layout: plugin
title: capitalize
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Uppercases the first letter of each word in the given string
<div class="code-box">
{% highlight php %}
<?php
capitalize(string $value [, bool $numwords = false ] )
{% endhighlight %}
</div>

* **value**: string to capitalize
* **numwords**: whether or not to capitalize words with numbers


### Examples
Example #1
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{capitalize('this is a string what2')}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
This Is A String what2
{% endhighlight %}
</div>