---
layout: integrations
title: Agavi adapter
---

### Installation
* Drop dwoo's directory in `app/lib/renderer` (create if needed)
* Add a renderer to `app/config/output_types.xml` as such:
<div class="code-box synopsis">
<header>output_types.xml</header>
{% highlight xml %}
<renderer name="dwoo" class="DwooRenderer">
	<parameter name="assigns">
      <parameter name="routing">ro</parameter>
      <parameter name="request">rq</parameter>
      <parameter name="controller">ct</parameter>
      <parameter name="user">us</parameter>
      <parameter name="translation_manager">tm</parameter>
      <parameter name="request_data">rd</parameter>
   </parameter>
   <parameter name="extract_vars">true</parameter>
   <parameter name="plugin_dir">%core.lib_dir%/dwoo_plugins</parameter>
</renderer>
{% endhighlight %}
</div>

* Add the renderer to `app/config/autoload.xml` as such :
<div class="code-box synopsis">
<header>autoload.xml</header>
{% highlight xml %}
<autoload name="DwooRenderer">%core.lib_dir%/renderer/dwoo/Dwoo/Adapters/Agavi/DwooRenderer.php</autoload>
{% endhighlight %}
</div>

* You can copy the `/Dwoo/Adapters/Agavi/dwoo_plugins` directory to your agavi app's lib directory, or change the
`plugin_dir` parameter in the `output_types.xml` file. These plugins are `agavi-specific` helpers that shortens the
syntax to call common agavi helpers (i18n, routing, ..)