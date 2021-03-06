---
layout: documentation
title: Dwoo variables
---

Variable names are limited to `/[a-z0-9_]/i`, which means all alpha-numeric characters plus the underscore character, they are case-sensitive.

Also, as an advice, I would recommend that you do not use any variable name starting with an underscore `_` since should I need to add a magic variable I will be using such `$_foo` named variables, that way everyone avoids bad surprises.

## The following are reserved variables
* **$dwoo**
* **$dwoo.parent**
* **$_key**

## Retrieving scoped variables
From PHP side, you can retrieve variables scoped from template side. Here is an example:
<div class="code-box">
<header>Example</header>
{% highlight php %}
<?php
$dwoo->get($tpl, $data);
// Will return an array containing all scoped variables
$dwoo->getScope();
{% endhighlight %}
</div>

> **Note**: Scoped variables from included files are also in the same returned array.
