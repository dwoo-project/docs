---
layout: documentation
title: Functions:do
---

Executes whatever follows without output. This is basically a cleaner alternative to doing `{assign func("foo") var}` or to use `{capture}` to silence some output.  
I can't think of any reason to use it in a template, but since it's there for internal reasons, you might as well use it if required.

##Example :
{% highlight smarty %}
{do "foo"}
{do reverse("bar")}
{% endhighlight %}

##Output:
{% highlight text %}
*nothing*
{% endhighlight %}