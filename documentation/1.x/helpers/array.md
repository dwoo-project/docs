---
layout: documentation
title: "Helpers:array"
---

Creates a PHP array with the given input
{% highlight php %}
<?php
array(array $rest)
{% endhighlight %}

* **rest**: any number of values of variables, either with named parameters to build an associative array or without for an auto-indexed array

##Associative Array Example:
{% highlight smarty %}
{assign array(name="Bob" gender="male") user}
{$user.name} is {$user.gender}
{% endhighlight %}

##Output
{% highlight text %}
Bob is male
{% endhighlight %}


##Auto-indexed Array Examples:
{% highlight smarty %}
{assign array("Bob" "John") users}
First user is : {$users.0}
User list : {foreach $users user}{$user} {/foreach}
{% endhighlight %}

##Output
{% highlight text %}
First user is : Bob
User list : Bob John
{% endhighlight %}