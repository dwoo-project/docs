---
layout: documentation
title: Functions:fetch
---

Reads a file
{% highlight php %}
fetch(string $file, [ string $assign = null ])
{% endhighlight %}

* **file** : path or URI of the file to read (however reading from another website is not recommended for performance reasons)
* **assign** : if set, the file will be saved in this variable instead of being output

## Example
{% highlight smarty %}
{fetch 'http://php.net'}
{% endhighlight %}

## Output
This will output the content of the site in your template (without display any `iframe`)