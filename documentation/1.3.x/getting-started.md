---
layout: documentation
title: Getting started
---

This is the official documentation for Dwoo 1.3.x, oriented object PHP5 Template Engine for PHP.

If you have any exposure to other text-based template languages, such as Smarty you should feel right at home with Dwoo. It's both designer and developer friendly by sticking to PHP's principles and adding functionality useful for templating environments.

Dwoo is a templating system used to make creating websites easier and more structured.  
Developing with Dwoo can be broken up into two parts:

* Creating, initializing and managing the Dwoo runtime;
* Templating with the Dwoo templating language.

## A bit of history
Dwoo is a PHP5 Template engine that was started in early 2008.  
The idea came from the fact that [Smarty](http://www.smarty.net/){:target="_blank"}, a well known template engine, is getting older and older.  
It carries the weight of it's age, having old features that are inconsistent compared to newer ones, being written for PHP4 its Object Oriented aspect doesn't take advantage of PHP5's more advanced features in the area, etc.  
Hence Dwoo was born, hoping to provide a more up to date and stronger engine.  
So far it has proven to be faster than Smarty in many areas, and it provides a compatibility layer to allow developers that have been using Smarty for years to switch their application over to Dwoo progressively.

## Prerequisites
Dwoo 1.3.x embedded new PHP features like namespaces, it requires at least **PHP 5.3** to run.
However, this version is only compatible from **PHP 5.3.x** to **PHP 5.6.x**. 

## Installation

### Installing via Composer **(recommended)**
Dwoo is available on [packagist.org](https://packagist.org/packages/dwoo/dwoo){:target="_blank"} to do so, install [Composer](https://getcomposer.org/download/){:target="_blank"} and run the following command to get the latest version:
{% highlight bash %}
composer require dwoo/dwoo 1.3.*
{% endhighlight %}

### Installing from the tarball release
1. Download the most recent tarball from the [releases page](https://github.com/dwoo-project/dwoo/releases){:target="_blank"},
2. Unpack the tarball,
3. Move the files somewhere in your project,
4. Go to the [Basic section](#basic) to know how to use classes. 

## Usage
This section gives you a brief introduction for include and load Dwoo in your project.

### Basic
{% highlight php %}
<?php
// Include the main class (it should handle the rest on its own)
require __DIR__ . '/vendor/autoload.php';

// Create the controller, this is reusable
$dwoo = new Dwoo\Core();

// Load a template file (name it as you please), this is reusable
// if you want to render multiple times the same template with different data
$tpl = new Dwoo\Template\File('path/to/index.tpl');

// Create a data set, if you don't like this you can directly input an
// associative array in $dwoo->get()
$data = new Dwoo\Data();
// Fill it with some data
$data->assign('foo', 'BAR');
$data->assign('bar', 'BAZ');

// Outputs the result ...
echo $dwoo->get($tpl, $data);
// ... or get it to use it somewhere else
$dwoo->get($tpl, $data);
{% endhighlight %}