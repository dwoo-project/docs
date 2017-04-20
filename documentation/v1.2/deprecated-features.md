---
layout: documentation
title: Deprecated features
toc: true
---

This document lists all deprecated features of Dwoo.
Deprecated features are kept for backward compatibility and removed in the next release
(a feature that was deprecated in Dwoo 1.2.x is removed in Dwoo 1.3.0).

## PHP
* Since version `1.2.0` support of **PHP5.2** has been dropped. Use **PHP5.3** to **PHP5.6** versions.

## PEAR
PEAR support has been discontinued since project has been transferred from owner **Seldaek** to **DSanchez**,
and no PEAR packages are provided anymore. Use [Composer](http://getcomposer.org){:target="_blank"} instead.
 
## Autoloading
* Since `1.2.2` version, file `lib/dwooAutoload.php` has been removed, use **Composer** to autoload classes.

## Dwoo compilated
* Since `1.2.2` version, file `lib/Dwoo.compiled.php` has been removed.
