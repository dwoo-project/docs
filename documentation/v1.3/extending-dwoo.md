---
layout: documentation
title: Extending Dwoo
---

Dwoo can be extended in many ways; you can add extra **blocks**, **functions** and **filters***.
You can even extend the **Core** itself for your application.

## Globals
A global variable is like any other template variable, except that it's available in all templates.

<blockquote class="blockquote">
Actually globals are defined in the <code>Core</code> class and cannot be modified directly.<br>
Since Dwoo <code>1.3.2</code>, this feature is now available, let's see how to use it:
</blockquote>
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
// create Core object
$core = new Dwoo\Core();
// assing new global variable named 'text'
$core->addGlobal('text', 'value');
{% endhighlight %}
</div>

You can now use your new global variable such as:
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{$.text}
{% endhighlight %}
</div>

## Extending Core
<div class="code-box">
<header>MyTemplate.php</header>
{% highlight php %}
<?php
class MyTemplate extends Dwoo\Core {

}
{% endhighlight %}
</div>

## Creating custom Plugin(s)
In addition to providing you with an abundance of built-in plugins, Dwoo also allows you to create your own.
These plugins may be implemented as user-defined functions or standalone classes, and can be either manually added at
run-time via Dwoo’s `addPlugin()` method or automatically loaded by the Dwoo autoloader.

To illustrate, consider the following script, which sets up a simple plugin to manipulate email addresses:
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
// create Core object
$core = new Dwoo\Core();

// read template file
$tpl = new Dwoo\Template\File('tmpl/plugin.tpl');

// add custom plugin
$core->addPlugin('email_safe', function (Dwoo\Core $core, $str) {
   return str_replace(
     array('@', '.', '-'), 
     array(' at ', ' dot ', ' dash '), 
     $str
   );
});

// set sample string
$data['string']= 'vikram@example.com';

// interpolate values into template
// send interpolated result to output device
echo $core->get($tpl, $data);
{% endhighlight %}
</div>

Here, the `fix_address()` function replaces common email address characters with human-readable words, in order to
make it harder for spammers to harvest these addresses from Web pages.
The `addPlugin()` method takes care of adding this function to Dwoo’s plugin list, specifying both the local plugin
name and the function callback.

Here’s how you’d use it in a template:
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{email_safe($string)}
{% endhighlight %}
</div>

If you want add more than one custom plugin, you can specify to the loader a custom directory to search for, such as:
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
$core->getLoader()->addDirectory(__DIR__ . 'Views/plugins/');
{% endhighlight %}
</div>

## Allow/Disallow PHP native functions
Dwoo allow users to use PHP native functions within the template.   
Default allowed PHP functions are:
* str_repeat
* number_format
* htmlentities
* htmlspecialchars
* long2ip
* strlen
* list
* empty
* count
* sizeof
* in_array
* is_array

However, developers can decide to _allow more_ but also _disallow less_ PHP functions to be used within template.   
To do so, you just need to follow this example:
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
// Allow `str_pad` PHP function
$core->getSecurityPolicy()->allowPhpFunction('str_pad');

// Disallow `sizeof` PHP function
$core->getSecurityPolicy()->disallowPhpFunction('sizeof');
{% endhighlight %}
</div>