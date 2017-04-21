---
layout: symfony
title: Cookbook
---

## Injecting variables into all templates (i.e. Global Variables)
As exemplified in the
[Symfony Cookbook](http://symfony.com/doc/current/cookbook/templating/global_variables.html){:target="_blank"} it
is possible to make a variable to be accessible to all the templates you use by configuring your
`app/config/config.yml` file:
<div class="code-box">
<header>app/config/config.yml</header>
{% highlight yaml %}
dwoo:
    # ...
    globals:
        ga_tracking: UA-xxxxx-x
{% endhighlight %}
</div>
Now, the variable `ga_tracking` is available in all Dwoo templates:
<div class="code-box">
{% highlight smarty %}
<p>Our google tracking code is: {$ga_tracking} </p>
{% endhighlight %}
</div>

## How to Access the User, Request, Session & more via the `app` Variable
During each request, Symfony will set a global template variable `app` available in both **Twig** and **PHP** template
engines by default.   
Dwoo SymfonyBundle add the same global variable to be accessible from all templates.   
The `app` variable is a
[GlobalVariables](http://api.symfony.com/3.2/Symfony/Bundle/FrameworkBundle/Templating/GlobalVariables.html){:target="_blank"}
 instance which will give you access to some application specific variables automatically.

Like the Twig implementation you can access to this variables like:

| **Twig syntax**         | **Dwoo syntax**            |
| ----------------------- | -------------------------- |
| {% raw %}`{{ app.user }}`{% endraw %}        | `{$app->getUser()}`        |
| {% raw %}`{{ app.request }}`{% endraw %}     | `{$app->getRequest()}`     |
| {% raw %}`{{ app.session }}`{% endraw %}     | `{$app->getSession()}`     |
| {% raw %}`{{ app.environment }}`{% endraw %} | `{$app->getEnvironment()}` |
| {% raw %}`{{ app.debug }}`{% endraw %}       | `{$app->getDebug()}`       |
| {% raw %}`{{ app.token }}`{% endraw %}       | `{$app->getToken()}`       |
{: class="table table-striped table-bordered"}

<div class="code-box">
{% highlight smarty %}
<p>Username: {$app->getUser()->getUsername()}</p>
{if $app->getDebug()}
    <p>Request method: {$app->getRequest()->getMethod()}</p>
    <p>Application Environment: {$app->getEnvironment()}</p>
{/if}
{% endhighlight %}
</div>

## Enable WebProfile
<div class="code-box">
<header>app/config/config.yml</header>
{% highlight yaml %}
dwoo:
    # ...
    web_profiler: '%kernel.debug%'
{% endhighlight %}
</div>