---
layout: symfony
title: Basic Usage / Tips & Tricks
symfony_breadcrumb: true
---

## Basic usage
You can render a Dwoo template instead of a Twig one simply by using the `.dwoo` extension in the template name instead of `.twig`.   
The controller below renders the `index.html.dwoo` template:
<div class="code-box">
<header>src/AppBundle/Controller/DefaultController.php</header>
{% highlight php %}
<?php
public function indexAction(Request $request)
{
    return $this->render('default/index.html.dwoo');
}
{% endhighlight %}
</div>

## Template Inheritance
Like Symfony2 PHP renderer or Twig, Dwoo provides template inheritance.   

Let’s assume you have a `app/Resources/views/base.html.dwoo` as layout:
<div class="code-box">
{% highlight smarty %}
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>{block "title"}Welcome!{/block}</title>
    {block "stylesheets"}{/block}
</head>
<body>
    {block "body"}{/block}
    {block "javascripts"}{/block}
</body>
</html>
{% endhighlight %}
</div>
and `app/Resources/views/default/index.html.dwoo` for the content:
<div class="code-box">
{% highlight smarty %}
{extends 'file:base.html.dwoo'}

{block "title"}Welcome to the DwooBundle{/block}
{block "body"}Welcome to the DwooBundle{/block}
{% endhighlight %}
</div>
Then the output of `index.html.dwoo` will be:
<div class="code-box">
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Welcome to the DwooBundle</title>
</head>
<body>
Welcome to the DwooBundle
</body>
</html>
{% endhighlight %}
</div>