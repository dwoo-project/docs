---
layout: documentation
title: Dwoo for Developers
---

This chapter describes the API to Dwoo and not the template language. It will be most useful as reference to those implementing the template interface to the application and not those who are creating Dwoo templates.

## Basics
{% highlight php %}
<?php
// Include Composer autoloader
require __DIR__ . '/vendor/autoload.php';

// Create a Dwoo core object
$dwoo = new Dwoo\Core();

// Create some data
$data = array('a' => 5, 'b' => 6);

// Outputs the result
echo $dwoo->get('path/to/index.tpl', $data);
{% endhighlight %}

## File & Data objects
{% highlight php %}
<?php
// Include Composer autoloader
require __DIR__ . '/vendor/autoload.php';

// Create a Dwoo core object
$dwoo = new Dwoo\Core();

// Load a template file, this is reusable if you want to render multiple times the same template with different data
$tpl = new Dwoo\Template\File('path/to/index.tpl');

// Create a data set, this data set can be reused to render multiple templates if it contains enough data to fill them all
$data = new Dwoo\Data();

// Fill it with some data 
$data->assign('foo', 'BAR');
$data->assign('bar', 'BAZ');

// Output the result
echo $dwoo->get($tpl, $data); 
{% endhighlight %}

## Compiler object
{% highlight php %}
<?php
// Include Composer autoloader
require __DIR__ . '/vendor/autoload.php';

// Create a Dwoo core object
$dwoo = new Dwoo\Core();

// Load a template file, this is reusable if you want to render multiple times the same template with different data
$tpl = new Dwoo\Template\File('path/to/index.tpl');
$data = array('a' => 5, 'b' => 6);
 
// Create the compiler instance
$compiler = new Dwoo\Compiler();
// Add a pre-processor that is in one of the plugin directories
$compiler->addPreProcessor('PluginSmartyCompatible', true);
// .. Or a custom filter you made
$compiler->addPreProcessor('PluginProcessorCustom');
 
// Output the result and provide the compiler to use
echo $dwoo->get($tpl, $data, $compiler);
{% endhighlight %}

## Set directories
In this example, we wild see how to use `setCompileDir` and `setCacheDir` methods.
{% highlight php %}
<?php
// Include Composer autoloader
require __DIR__ . '/vendor/autoload.php';

// Create a Dwoo core object
$dwoo = new \Dwoo\Core();

// Configure directories
$dwoo->setCompileDir('path/to/compiled/dir/'); // Folder to store compiled templates
$dwoo->setCacheDir('path/to/cached/dir/'); // Folder to store cached templates

// Create some data
$data = array('a'=>5, 'b'=>6);

// Output the result
echo $dwoo->get('index.tpl', $data);
{% endhighlight %}