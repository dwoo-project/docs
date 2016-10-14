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
In the <code>1.4.0</code> version, you will be able to add new <strong>globals</strong> variables.
</blockquote>

## Extending Core
<div class="code-box">
<header>MyTemplate.php</header>
{% highlight php %}
<?php
use \Dwoo\Core;
class MyTemplate extends Core {

}
{% endhighlight %}
</div>

## Creating custom Plugin(s)
In addition to providing you with an abundance of built-in plugins, Dwoo also allows you to create your own.
These plugins may be implemented as user-defined functions or standalone classes, and can be either manually added at
run-time via Dwoo’s `addPlugin()` method or automatically loaded by the Dwoo autoloader.

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
$dwoo->output($tpl, $data);
{% endhighlight %}
</div>