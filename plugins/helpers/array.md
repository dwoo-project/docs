---
layout: plugin
title: array
versions: [1.0, 1.1, 1.2, 1.3]
---

Creates a PHP array with the given input
<div class="code-box">
{% highlight php %}
<?php
array(array $rest)
{% endhighlight %}
</div>

* **rest**: any number of values of variables, either with named parameters to build an associative array or without for an auto-indexed array

### Examples
Example #1: Associative Array Example
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{assign array(name="Bob" gender="male") user}
{$user.name} is {$user.gender}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
Bob is male
{% endhighlight %}
</div>


Example #2: Auto-indexed Array Examples
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{assign array("Bob" "John") users}
First user is : {$users.0}
User list : {foreach $users user}{$user} {/foreach}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight text %}
First user is : Bob
User list : Bob John
{% endhighlight %}
</div>