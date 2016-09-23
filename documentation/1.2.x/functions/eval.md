---
layout: documentation
title: eval
---

Evaluates the given string as if it was a template
{% highlight php %}
<?php
eval(string $var, [ $assign = null ])
{% endhighlight %}

* **var**: the string to use as a template
* **assign**: if set, the output of the template will be saved in this variable instead of being output

Although this plugin is kind of optimized and will not recompile your string each time, it is still not a good practice to use it.  
If you want to have templates stored in a database or something you should probably use the `Dwoo_Template_String` class or make another class that extends it.