---
layout: documentation
title: Functions:htmlStateSelect
---

Returns a simple HTML select element filled with a list of all US States.
{% highlight php %}
htmlStateSelect(string $name, [ string $width = "100%", [int $size = false, [bool $multiselect = false]]])
{% endhighlight %}

* **name** : The name and id of the select element
* **width** : The vertical display size of the select element, defaults to false
* **size** : moo, defaults to foo
* **multiselect** : A flag signifing multiple selections, defaults to false

## Example
{% highlight smarty %}
{htmlStateSelect name="state" width="200px"}
{% endhighlight %}

## Output
{% highlight html %}
<select name="state" id="state" style="width:200px;">
 <option value="AL">Alabama</option>
 ...
 <option value="WY">Wyoming</option>
</select>
{% endhighlight %}

## Example
{% highlight smarty %}
{htmlStateSelect name="state" size="5" multiselect="true"}
{% endhighlight %}

## Output
{% highlight html %}
<select name="state" id="state" style="width:100%;" size="5" multiple="multiple">
 <option value="AL">Alabama</option>
 ...
 <option value="WY">Wyoming</option>
</select>
{% endhighlight %}