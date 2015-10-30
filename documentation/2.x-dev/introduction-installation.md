---
layout: documentation
title: Introduction / Installation
---

This is the official documentation for Dwoo 2.0, oriented object PHP5 Template Engine for PHP.

If you have any exposure to other text-based template languages, such as Smarty you should feel right at home with Dwoo. It's both designer and developer friendly by sticking to PHP's principles and adding functionality useful for templating environments.

Dwoo is a templating system used to make creating websites easier and more structured.  
Developing with Dwoo can be broken up into two parts:
* Creating, initializing and managing the Dwoo runtime;
* Templating with the Dwoo templating language.

## A bit of history
Dwoo is a PHP5 Template Engine that was started in early 2008.  
The idea came from the fact that [Smarty](http://www.smarty.net/), a well known template engine, is getting older and older.  
It carries the weight of it's age, having old features that are inconsistent compared to newer ones, being written for PHP4 its Object Oriented aspect doesn't take advantage of PHP5's more advanced features in the area, etc.  
Hence Dwoo was born, hoping to provide a more up to date and stronger engine.  
So far it has proven to be faster than Smarty in many areas, and it provides a compatibility layer to allow developers that have been using Smarty for years to switch their application over to Dwoo progressively.

## Prerequisites
Dwoo 2.0 embedded new features of PHP like Namespaces, so it need at least **PHP 5.3** to run.

## Installation
1. Dwoo include a `composer.json` file to easily install Dwoo on your server. It's also available on [packagist.org](https://packagist.org/packages/dwoo/dwoo).
2. A PHAR archive of Dwoo is also available.

## Usage
This section gives you a brief introduction for include and load Dwoo in your project.

### Basic
{% highlight php %}
<?php
// Include autoloader
require 'lib/Dwoo/Autoloader.php';

// Register Dwoo namespace and register autoloader
$autoloader = new Dwoo\Autoloader();
$autoloader->add('Dwoo', 'lib/Dwoo');
$autoloader->register(true);

// Create the controller, it is reusable and can render multiple templates
$dwoo = new Dwoo\Core();

// Create some data
$data = array('a'=>5, 'b'=>6);

// Output the result directly ... 
$dwoo->output('path/to/index.tpl', $data);
// ... or get it to use it somewhere else
$var = $dwoo->get('path/to/index.tpl', $data);
echo $var;
{% endhighlight %}

### Phar archive
This is the same example as above, using a Phar compile archive.
{% highlight php %}
<?php
// Include phar archive, not need to call autoloader anymore
require 'phar://dwoo.phar';

// Create the controller, it is reusable and can render multiple templates
$dwoo = new Dwoo\Core();

// Create some data
$data = array('a'=>5, 'b'=>6);

// Output the result directly ... 
$dwoo->output('path/to/index.tpl', $data);
// ... or get it to use it somewhere else
$var = $dwoo->get('path/to/index.tpl', $data);
echo $var;
{% endhighlight %}