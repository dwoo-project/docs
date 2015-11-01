---
layout: documentation
title: Blocks:a
---

Outputs a html `<a>` tag

{% highlight php %}
a($href, [array $rest = array()])
{% endhighlight %}

* **href** : the target URI where the link must point
* **rest** : any other attributes you want to add to the tag can be added as named parameters

## Example
{% highlight smarty %}
{* Create a simple link out of an url variable and add a special class attribute: *}
{a $url class="external" /}

{* Mark a link as active depending on some other variable : *}
{a $link.url class=tif($link.active "active"); $link.title /}

{* This is similar to: <a href="{$link.url}" class="{if $link.active}active{/if}">{$link.title}</a> *}
{% endhighlight %}