---
layout: documentation
title: Functions:googleAnalytics
---

Generate Google Analytics script.
{% highlight php %}
googleAnalytics($code, [$domain = ''])
{% endhighlight %}

* **$code** : Code UA Google Analytics
* **$domain** : Specify the domain name

##Example
{% highlight smarty %}
{googleAnalytics code="UA-xxxxxxxx-1"}
{% endhighlight %}

##Output
{% highlight html %}
<script>
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-xxxxxxxx-1']);
	
	_gaq.push(['_setAllowLinker', true]);
	_gaq.push(['_trackPageview']);

	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript';
	  ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
	  'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	  s.parentNode.insertBefore(ga, s);
	})();
</script>
{% endhighlight %}