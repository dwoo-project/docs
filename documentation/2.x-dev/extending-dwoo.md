---
layout: documentation
title: Extending Dwoo
---

Dwoo can be extended in many ways; you can add extra `blocks` or `functions`. You can even extend the `Core` itself for your application.

## Add custom plugin(s)
In addition to providing you with an abundance of built-in plugins, Dwoo also allows you to create your own. These plugins may be implemented as user-defined functions or standalone classes, and can be either manually added at run-time via Dwoo’s `addPlugin()` method or automatically loaded by the Dwoo autoloader.

To illustrate, consider the following script, which sets up a simple plugin to manipulate email addresses:
{% highlight php %}
<?php
// simple plugin
function fix_address(Core $core, $str) {
    return str_replace(
      array('@', '.', '-'), 
      array(' at ', ' dot ', ' dash '), 
      $str
    );
}

try {
    // create Core object
    $dwoo = new \Dwoo\Core();

    // read template file
    $tpl = new \Dwoo\Template\File('tmpl/plugin.tpl');

    // add custom plugin
    $dwoo->addPlugin('email_safe', 'fix_address');

    // set sample string  
    $data['string']= 'vikram@example.com';

    // interpolate values into template
    // send interpolated result to output device
    $dwoo->output($tpl, $data);
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();      
}
{% endhighlight %}

Here, the fix_address() function replaces common email address characters with human-readable words, in order to make it harder for spammers to harvest these addresses from Web pages. The addPlugin() method takes care of adding this function to Dwoo’s plugin list, specifying both the local plugin name and the function callback. Here’s how you’d use it in a template:
{% highlight html %}
{email_safe($string)}
{% endhighlight %}

If you want add more than one custom plugin, you can specify to the loader a custom directory to search for, such as :
{% highlight php %}
<?php
$this->getLoader()->addDirectory(__DIR__ . 'Views/plugins/'); // BUGGED FOR NOW
{% endhighlight %}

## How to extends to the \Dwoo\Core class ?
{% highlight php %}
<?php
use \Dwoo\Core;
class MyTemplate extends Core {

}
{% endhighlight %}
> Careful, this class **cannot** be a **Singleton** because plugins clone it!