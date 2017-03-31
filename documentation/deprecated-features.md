---
layout: documentation
title: Deprecated features
toc: true
---

This document lists all deprecated features of Dwoo.
Deprecated features are kept for backward compatibility and removed in the next release
(a feature that was deprecated in Dwoo 1.2.x is removed in Dwoo 1.3.0).

## PHP
* Since version `1.2.0` support of **PHP5.2** has been dropped. Use **PHP5.3** to **PHP5.6** in Dwoo `1.2.x` and `1.3.x` versions.
* Since version `1.4.0` support of major **PHP 5** has been dropped in favor of **PHP 7** including main features of this new PHP version.

## PEAR
PEAR support has been discontinued since project has been transferred from owner **Seldaek** to **DSanchez**,
and no PEAR packages are provided anymore. Use [Composer](http://getcomposer.org){:target="_blank"} instead.
 
## Autoloading
* Since `1.2.2` version, file `lib/dwooAutoload.php` has been removed, use **Composer** to autoload classes.

## Dwoo compilated
* Since `1.2.2` version, file `lib/Dwoo.compiled.php` has been removed.

## Dwoo class
* Since `1.3.0` version, **Dwoo** class has been removed. you need to use `Dwoo_Core` or `Dwoo\Core` instead!

## Core class
* Since `1.3.0` version, method `output()` has been removed, you now need to use function `echo` with method `get()`.

## Smarty support
* Since `1.4.0` version, Smarty support and compatibility layer has been removed. Please use dwoo syntax instead!