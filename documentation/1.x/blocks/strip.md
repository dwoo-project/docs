---
layout: documentation
title: "Blocks:strip"
---

Removes the white-space at the beginning and end of each line, and also removes all line breaks
{% highlight php %}
<?php
strip(string $mode = 'default')
{% endhighlight %}

* **mode**: the stripping mode defines some rules to prevent harmful behavior on some types of content, currently the only special mode is **js** or **javascript** that ensures javascript line comments do not break the script

## Example
{% highlight smarty %}
{strip}
   spaces between words in a same line     
  - are not removed -    
     but    
   everything   
       else   
     is     
{/strip}
{% endhighlight %}

## Output
{% highlight text %}
spaces between words in a same line- are not removed -buteverythingelseis
{% endhighlight %}

If you have a template with inline-Javascript, the `{strip}` plugin might break your script if it contains line comments.  
Take a look at this example:
{% highlight smarty %}
{strip}
<script type="text/javascript">
    // say hello!
    alert("hello!");
</script>
{/strip}
{% endhighlight %}

This will render the output to:
{% highlight html %}
<script type="text/javascript"> // say hello! alert("hello!"); </script>
{% endhighlight %}

The script is on a single line now, and since the first line is a comment, everything is treated as a comment. To avoid this, use the **js** parameter inside the `{strip}` plugin.
{% highlight smarty %}
{strip js}
<script type="text/javascript">
    // say hello!
    alert("hello!");
</script>
{/strip}
{% endhighlight %}

* This will remove all comments inside the script.
* Be careful to code properly and end each instruction with a **;**, otherwise it might become **foo()bar()** and the browser will most likely treat that as an error. Use [JSLint](http://www.jslint.com){:target="_blank"} to test your code if you have issues.