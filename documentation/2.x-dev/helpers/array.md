---
layout: documentation
title: Helpers:array
---

Creates a PHP array with the given input
{% highlight php %}
array(array $rest)
{% endhighlight %}
* **rest** : any number of values of variables, either with named parameters to build an associative array or without for an auto-indexed array

##Associative Array Example
{% highlight html %}
{assign array(name="Bob" gender="male") user}
{$user.name} is {$user.gender}
{% endhighlight %}

##Output
{% highlight html %}
Bob is male
{% endhighlight %}

##Auto-indexed Array Examples
{% highlight html %}
{assign array("Bob" "John") users}
First user is : {$users.0}
User list : {foreach $users user}{$user} {/foreach}
{% endhighlight %}

##Output
{% highlight html %}
First user is : Bob
User list : Bob John
{% endhighlight %}
