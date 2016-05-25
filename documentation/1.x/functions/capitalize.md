---
layout: documentation
title: "Functions:capitalize"
---

Uppercases the first letter of each word in the given string
{% highlight php %}
<?php
capitalize(string $value [, bool $numwords = false ] )
{% endhighlight %}

* **value**: string to capitalize
* **numwords**: whether or not to capitalize words with numbers


## Example
{% highlight smarty %}
{capitalize('this is a string what2')}
{% endhighlight %}

## Output
{% highlight text %}
This Is A String what2
{% endhighlight %}