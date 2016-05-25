---
layout: documentation
title: Functions:htmlSelectTime
---

Creates select boxes for any/all of hour, minute, seconds and meridian.
{% highlight php %}
htmlSelectTime( [$prefix = "Time_", [$time = null, [$display_hours = true, [$display_minutes = true, [$display_seconds = true, [$display_meridian = true, [$use_24_hours = true, [$minute_interval = 1, [$second_interval = 1, [$field_array = null, [$all_extra = "", [$hour_extra = "", [$minute_extra = "", [$second_extra = "", [$meridian_extra = ""]]]]]]]]]]]]]]] )
{% endhighlight %}

* **prefix** : the prefix to attach to name
* **time** : the time to use, can be any value parseable by strtotime(), a mysql timestamp or a unix timestamp
* **display_hours** : show hours select box
* **display_minutes** : show minutes select box
* **display_seconds** : show seconds select box
* **display_meridian** : show meridian (am/pm) select box
* **use_24_hours** : use 24 hour times
* **minute_interval** : interval to use in minute select box
* **second_interval** : interval to use in second select box
* **field_array** : use name arrays. ie. foo[hour], foo[minute]...
* **all_extra** : extra attributes to add to all select boxes
* **hour_extra** : extra attributes to add to the hour select box
* **minute_extra** : extra attributes to add to the minute select box
* **second_extra** : extra attributes to add to the second select box
* **meridian_extra** : extra attributes to add to the meridian select box

## Basic Usage
{% highlight smarty %}
{htmlSelectTime}
{% endhighlight %}

## Output
{% highlight html %}
<select name='Time_Hour'>
 <option value='0'>0</option>
 <option value='1'>1</option>
 ...
 <option value='22'>22</option>
 <option value='23' selected='selected'>23</option>
</select>
{% endhighlight %}

{% highlight html %}
<select name='Time_Minute'>
 <option value='0'>0</option>
 <option value='1'>1</option>
 ...
 <option value='35' selected='selected'>35</option>
 <option value='36'>36</option>
 ...
 <option value='58'>58</option>
 <option value='59'>59</option>
</select>
{% endhighlight %}

{% highlight html %}
<select name='Time_Second'>
 <option value='0'>0</option>
 <option value='1'>1</option>
 ...
 <option value='14' selected='selected'>14</option>
 <option value='15'>15</option>
 ...
 <option value='58'>58</option>
 <option value='59'>59</option>
</select>
{% endhighlight %}

## Extended Example
{% highlight smarty %}
{htmlSelectTime prefix="MyTime_" display_seconds=false use_24_hours=false}
{% endhighlight %}

## Output
{% highlight html %}
<select name='MyTime_Hour'  >
 <option value='1'>1</option>
 ...
 <option value='11' selected='selected'>11</option>
 <option value='12'>12</option>
</select>
<select name='MyTime_Minute'  >
 <option value='0'>0</option>
 <option value='1'>1</option>
 ...
 <option value='38'>38</option>
 <option value='39' selected='selected'>39</option>
 ...
 <option value='58'>58</option>
 <option value='59'>59</option>
</select>
<select name='MyTime_Meridian'>
 <option value='am'>AM</option>
 <option value='pm' selected='selected'>PM</option>
</select>
{% endhighlight %}