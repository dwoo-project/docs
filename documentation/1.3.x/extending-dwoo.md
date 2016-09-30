---
layout: documentation
title: Extending Dwoo
---

Dwoo can be extended in many ways; you can add extra **blocks**, **filters**, **functions**, **helpers** or **processors**.
You can even extend the `Core` itself for your application.

## Add custom plugin(s)
In addition to providing you with an abundance of builtin plugins, Dwoo also allows you to create your own.
These plugins may be implemented as user-defined functions or standalone classes, and can be either manually added at run-time via Dwoo’s `Dwoo\Core::addPlugin()` method or automatically loaded by the autoloader.

To illustrate, consider the following script, which sets up a simple plugin to manipulate email addresses:
{% highlight php %}
<?php
// Simple function plugin
function fix_address(Dwoo\Core $core, $str) {
    return str_replace(
      array('@', '.', '-'), 
      array(' at ', ' dot ', ' dash '), 
      $str
    );
}

// create Core object
$dwoo = new Dwoo\Core();

// read template file
$tpl = new Dwoo\Template\File('tmpl/plugin.tpl');

// add custom plugin from function ...
$dwoo->addPlugin('email_safe', 'fix_address');

// ... you can also add it as an anonymous function
$dwoo->addPlugin('email_safe', function (Dwoo\Core $core, $str) {
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
echo $dwoo->get($tpl, $data);
{% endhighlight %}

Here, the `fix_address()` function replaces common email address characters with human-readable words, in order to make it harder for spammers to harvest these addresses from Web pages.   
The `Dwoo\Core::addPlugin()` method takes care of adding this function to Dwoo’s plugin list, specifying both the local plugin name and the function callback.   
Here’s how you’d use it in a template:
{% highlight smarty %}
{email_safe($string)}
{% endhighlight %}

If you want add more than one custom plugin, you can specify to the loader a custom directory to search for, such as :
{% highlight php %}
<?php
$this->getLoader()->addDirectory(__DIR__ . 'Views/plugins/'); // BUGGED FOR NOW
{% endhighlight %}

## How to extends to the Dwoo\Core class ?
{% highlight php %}
<?php
use Dwoo\Core;
class MyTemplate extends Core {

}
{% endhighlight %}
> Careful, this class **cannot** be a **Singleton** because plugins clone it!