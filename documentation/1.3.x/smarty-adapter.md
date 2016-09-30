---
layout: documentation
title: Using the Smarty Adapter to convert your Smarty code
---

It is perfectly understandable that some people are relunctant to leave Smarty because they have a big codebase using it. Dwoo is compatible syntax-wise and supports most of Smarty's plugins, but on the PHP end things are indeed quite different. To ease that up Dwoo has an adapter class, that adapter mimics a Smarty object in order for your code to keep working as if you were running on Smarty, while in fact it runs on Dwoo.
The benefit of this is that it allows you to try Dwoo and see if it works with all your code or not in a snap. The drawbacks are that it's not as performant (far from it) as running Dwoo directly, and that it does not support all Dwoo features, because of some architectural changes that were made compared to Smarty.
Anyway, enough talk, if you want to try it here is what you need to change :

{% highlight php %}
<?php
// Include smarty library
include 'path/to/Smarty.class.php';
 
// Include the main Dwoo class and the Smarty Adapter class
include 'path/to/Dwoo.php'; 
 
// Replace your Smarty class by Dwoo\Smarty\Adapter, i.e. this : 
// $smarty = new Smarty(); 
// Would become : 
$smarty = new \Dwoo\Smarty\Adapter();
 
// If you want to get errors when you use an unsupported feature, enable errors like that
$smarty->show_compat_errors = true;
{% endhighlight %}

You are set. You can now try to run your site using Dwoo, it should (if you used that last line) trigger errors when it encounters a missing Smarty feature. If that happens, go read the the smarty support list to figure out what you can do about it.