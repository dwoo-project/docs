---
layout: documentation
title: Extending Dwoo
doc_breadcrumb: true
toc: true
---

Dwoo can be extended in many ways; you can add extra **blocks**, **functions** and **filters***.
You can even extend the **Core** itself for your application.

## Globals
A global variable is like any other template variable, except that it's available in all templates.

<blockquote class="blockquote">
Actually globals are defined in the <code>Core</code> class and cannot be modified directly.
This feature is now available from Dwoo <code>1.3.2</code>, please upgrade your dependency!
</blockquote>

## Extending Core
<div class="code-box">
<header>MyTemplate.php</header>
{% highlight php %}
<?php
class MyTemplate extends Dwoo_Core {

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
// simple plugin
function fix_address(Dwoo_Core $core, $str) {
    return str_replace(
      array('@', '.', '-'), 
      array(' at ', ' dot ', ' dash '), 
      $str
    );
}

// create Core object
$dwoo = new Dwoo_Core();

// read template file
$tpl = new Dwoo_Template_File('tmpl/plugin.tpl');

// add custom plugin
$dwoo->addPlugin('email_safe', 'fix_address');

// set sample string
$data['string']= 'vikram@example.com';

// interpolate values into template
// send interpolated result to output device
echo $dwoo->get($tpl, $data);
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
$dwoo->getLoader()->addDirectory(__DIR__ . 'Views/plugins/');
{% endhighlight %}
</div>