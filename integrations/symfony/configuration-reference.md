---
layout: symfony
title: Configuration Reference
symfony_breadcrumb: true
---

The example below uses YAML format. Please adapt the example if using XML or PHP.


<div class="code-box">
<header>app/config/config.yml</header>
{% highlight yaml %}
# Dwoo Configuration
dwoo:
    # Enable WebProfiler
    web_profiler: '%kernel.debug%'
    # globals:
    globals:
        ga_tracking: UA-xxxxx-x
{% endhighlight %}
</div>
