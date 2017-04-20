---
layout: documentation
title: Prerequisites & Installation
toc: true
---

Dwoo relies on plugins to provide useful functionality, such as **tags**, **functions**, **helpers**, **filters** and
 **processors**.   
For a full list see the [plugins](/plugins/) page.

## Prerequisites
Dwoo `2.0` is only compatible with **PHP 7.x**.   
It also require the PHP extension [Multibyte String](http://php.net/manual/en/book.mbstring.php){:target="_blank"}
to be installed on your server.

## Installation

### Installing via Composer **(recommended)**
Dwoo is available on [packagist.org](https://packagist.org/packages/dwoo/dwoo){:target="_blank"} to do so,
install [Composer](https://getcomposer.org/download/){:target="_blank"} and run the following command to get the
latest version:
<div class="code-box">
<header>bash</header>
{% highlight bash %}
composer require dwoo/dwoo 2.*
{% endhighlight %}
</div>

### Installing from the tarball release
1. Download the most recent tarball from the [releases page](https://github.com/dwoo-project/dwoo/releases){:target="_blank"},
2. Unpack the tarball,
3. Move the files somewhere in your project.
