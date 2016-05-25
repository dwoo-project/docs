---
layout: documentation
title: Blocks:capture
---

Captures all the output within this block and saves it into `{$.capture.default}` by default, or `{$.capture.name}` if you provide another name.
{% highlight php %}
capture([ string $name = 'default', [ string $assign = null, [ bool $cat = false ]]])
{% endhighlight %}
* **name** : capture name, used to read the value afterwards
* **assign** : if set, the value is also saved in the given variable
* **cat** : if true, the value is appended to the previous one (if any) instead of overwriting itIf the cat parameter is true, the content will be appended to the existing content

## Example
{% highlight smarty %}
{capture "foo"}
  Anything in here wont show, it will be saved for later use..
{/capture}
Captured: {$.capture.foo}
{% endhighlight %}

## Output 
{% highlight text %}
Captured: Anything in here wont show, it will be saved for later use..
{% endhighlight %}