---
layout: symfony
title: DwooBundle Extension
symfony_breadcrumb: true
---

## Assets Extension
Templates commonly refer to **images**, **JavaScript**, **stylesheets** and other assets.   
You could hard-code the path to these assets (e.g. /images/logo.png), but DwooBundle provides a more dynamic option via the `asset` modifier:
<div class="code-box">
{% highlight smarty %}
<img src="{'images/logo.png'|asset}" />
{% endhighlight %}
</div>
or `asset` block:
<div class="code-box">
{% highlight smarty %}
<link href="{asset}css/blog.css{/asset}" rel="stylesheet" type="text/css" />
{% endhighlight %}
</div>

## Routing Extension
To generate URLs from a Dwoo template you may use two functions (`path` and `url`) provided by the PluginPath and PluginUrl classes.
<div class="code-box">
{% highlight smarty %}
<a href="{path('homepage')}">Home page</a>
{% endhighlight %}
</div>
Absolute URLs can also be generated:
<div class="code-box">
{% highlight smarty %}
<a href="{url('homepage')}">Home page</a>
{% endhighlight %}
</div>
Please see the [Symfony - Routing](http://symfony.com/doc/current/routing.html) for full information about routing features and options in Symfony.