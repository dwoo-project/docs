---
layout: symfony
title: Installation
---

## Download DwooBundle
Tell composer to add the bundle to your `composer.json` by running the command:
<div class="code-box">
{% highlight bash %}
$ php composer.phar require dwoo/symfony-bundle
{% endhighlight %}
</div>
Composer will install the bundle to your project's `vendor/dwoo/symfony-bundle` directory.

## Enable the bundle
Enable the bundle in the kernel:
<div class="code-box">
<header>app/AppKernel.php</header>
{% highlight php %}
<?php
public function registerBundles()
{
    $bundles = array(
        // ...
        new Dwoo\SymfonyBundle\DwooBundle(),
    );
}
{% endhighlight %}
</div>

## Enable the Dwoo template engine in the config
<div class="code-box">
<header>app/config/config.yml</header>
{% highlight yaml %}
# ...
framework:
    templating:
        engines: ['twig', 'php', 'dwoo']
{% endhighlight %}
</div>
> You need to enable the `php` engine as well. Otherwise some services will not work as expected