---
layout: plugin
title: html_select_time
versions: [1.0, 1.1, 1.2, 1.3]
plugin_breadcrumb: true
---

Creates select boxes for any/all of hour, minute, seconds and meridian.
<div class="code-box">
{% highlight php %}
<?php
html_select_time( [$prefix = "Time_", [$time = null, [$display_hours = true, [$display_minutes = true,[$display_seconds = true, [$display_meridian = true, [$use_24_hours = true, [$minute_interval = 1,[$second_interval = 1, [$field_array = null, [$all_extra = "", [$hour_extra = "", [$minute_extra = "",[$second_extra = "", [$meridian_extra = ""]]]]]]]]]]]]]]] )
{% endhighlight %}
</div>

* **prefix**: the prefix to attach to name
* **time**: the time to use, can be any value parseable by strtotime(), a mysql timestamp or a unix timestamp
* **display_hours**: show hours select box
* **display_minutes**: show minutes select box
* **display_seconds**: show seconds select box
* **display_meridian**: show meridian (am/pm) select box
* **use_24_hours**: use 24 hour times
* **minute_interval**: interval to use in minute select box
* **second_interval**: interval to use in second select box
* **field_array**: use name arrays. ie. foo[hour], foo[minute]...
* **all_extra**: extra attributes to add to all select boxes
* **hour_extra**: extra attributes to add to the hour select box
* **minute_extra**: extra attributes to add to the minute select box
* **second_extra**: extra attributes to add to the second select box
* **meridian_extra**: extra attributes to add to the meridian select box

### Basic Usage
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{html_select_time}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
{% highlight html %}
<select name='Time_Hour'>
 <option value='0'>0</option>
 <option value='1'>1</option>
 ...
 <option value='22'>22</option>
 <option value='23' selected='selected'>23</option>
</select>
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
</div>

### Extended Example
<div class="code-box">
<header>index.tpl</header>
{% highlight smarty %}
{html_select_time prefix="MyTime_" display_seconds=false use_24_hours=false}
{% endhighlight %}
</div>

The above example will output:
<div class="code-box">
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
</div>

### Sources
<div class="code-box">
<header>Dwoo_Plugin_html_select_time.php</header>
{% highlight php %}
<?php
/**
 * Creates select boxes for any/all of hour, minute, seconds and meridian.
 * <pre>
 *  * prefix : the prefix to attach to name
 *  * time : the time to use, can be any value parseable by strtotime(), a mysql timestamp or a unix timestamp
 *  * display_hours : show hours select box
 *  * display_minutes : show minutes select box
 *  * display_seconds : show seconds select box
 *  * display_meridian : show meridian (am/pm) select box
 *  * use_24_hours : use 24 hour times
 *  * minute_interval : interval to use in minute select box
 *  * second_interval : interval to use in second select box
 *  * field_array : use name arrays. ie. foo[hour], foo[minute]...
 *  * all_extra : extra attributes to add to all select boxes
 *  * hour_extra : extra attributes to add to the hour select box
 *  * minute_extra : extra attributes to add to the minute select box
 *  * second_extra : extra attributes to add to the second select box
 *  * meridian_extra : extra attributes to add to the meridian select box
 * </pre>
 *
 * Output is XHTML valid.
 *
 * This file is released under the LGPL "GNU Lesser General Public License"
 * More information can be found at:
 * {@link http://www.gnu.org/copyleft/lesser.html}
 *
 * This software is provided 'as-is', without any express or implied warranty.
 * In no event will the authors be held liable for any damages arising from
 * the use of this software.
 *
 * @author     Tim Oram <mitmaro@mitmaro.ca>
 * @copyright  Copyright (c) 2009, Tim Oram
 * @license    http://www.gnu.org/copyleft/lesser.html  GNU Lesser General Public License
 * @link       http://dwoo.org/
 * @date       2009-05-09
 * @package    Dwoo
 */
 
class Dwoo_Plugin_html_select_time extends Dwoo_Plugin
{
	public function process($prefix = 'Time_', $time = null, $display_hours = true, $display_minutes = true, $display_seconds = true, $display_meridian = true, $use_24_hours = true, $minute_interval = 1, $second_interval = 1, $field_array = null, $all_extra = '', $hour_extra = '', $minute_extra = '', $second_extra = '', $meridian_extra = '') {
 
		$return = '';
		// parse the time
 
		// if no value was given use current
		if(null === $time) {
			$time = time();
		}
		// a mysql timestamp
		elseif (preg_match('/^[0-9]{14}$/', $time)) {
			$time = mktime(substr($time, 8, 2), substr($time, 10, 2), substr($time, 12, 2),
				substr($time, 4, 2), substr($time, 6, 2), substr($time, 0, 4));
		}
		// a number
		elseif (is_numeric($time)) {
		    // it is a numeric string, we handle it as timestamp
		    $time = (int)$time;
		}
		// last try strtotime
		else {
			$time = strtotime($time);
			// if didn't work
			if ($time == -1 || $time === false) {
				$time = time();
			}
		}
 
		// parse name
		if($field_array === null) {
			$hour_name = $prefix . 'Hour';
			$minute_name = $prefix . 'Minute';
			$second_name = $prefix . 'Second';
			$meridian_name = $prefix . 'Meridian';
		}
		else {
			$hour_name = $field_array . '[' . $prefix . 'Hour' . ']';
			$minute_name = $field_array . '[' . $prefix . 'Minute' . ']';
			$second_name = $field_array . '[' . $prefix . 'Second' . ']';
			$meridian_name = $field_array . '[' . $prefix . 'Meridian' . ']';
		}
 
		// create the hours drop down if it is wanted
		if($display_hours) {
			$return .= "<select name='$hour_name' $hour_extra $all_extra>\n";
			if($use_24_hours) {
				// get the current hour
				$current = strftime('%H', $time);
				// for all 24 hours
				for($i = 0; $i < 24; $i++) {
					// select the one that is current
					if($current == $i) {
						$return .= "	<option value='$i' selected='selected'>$i</option>\n";
					}
					else {
						$return .= "	<option value='$i'>$i</option>\n";
					}
				}
			}
			else {
				// get the current hour
				$cur_hour = strftime('%I', $time);
				// for all 12 hours
				for($i = 1; $i < 13; $i++) {
					// select the one that is current
					if($cur_hour == $i) {
						$return .= "	<option value='$i' selected='selected'>$i</option>\n";
					}
					else {
						$return .= "	<option value='$i'>$i</option>\n";
					}
				}
			}
			$return .= "</select>\n";
		}
 
		// create the minutes drop down if it is wanted
		if($display_minutes) {
			// calculate current minute (using interval)
			$current = (int)(floor(strftime('%M', $time) / $minute_interval) * $minute_interval);
			$return .= "<select name='$minute_name' $minute_extra $all_extra>\n";
			// for each minute
			for($i = 0; $i <= 59; $i += $minute_interval) {
				// select the current
				if($current == $i) {
					$return .= "	<option value='$i' selected='selected'>$i</option>\n";
				}
				else {
					$return .= "	<option value='$i'>$i</option>\n";
				}
			}
			$return .= "</select>\n";
		}
 
		// create the seconds drop down if it is wanted
		if($display_seconds) {
			// calculate the current second (using interval)
			$current = (int)(floor(strftime('%S', $time) / $second_interval) * $second_interval);
			$return .= "<select name='$second_name' $second_extra $all_extra>\n";
			// for each second
			for($i = 0; $i <= 59; $i += $second_interval) {
				// select the current second
				if($current == $i) {
					$return .= "	<option value='$i' selected='selected'>$i</option>\n";
				}
				else {
					$return .= "	<option value='$i'>$i</option>\n";
				}
			}
			$return .= "</select>\n";
		}
 
		// create the meridian drop down if it is wanted and not 24 hour time
		if($display_meridian && !$use_24_hours) {
			// calculate the current second (using interval)
			$return .= "<select name='$meridian_name' $meridian_extra $all_extra>\n";
			if(strftime('%P', $time) == 'am') {
				$return .= '	<option value=\'am\' selected=\'selected\'>AM</option>' . "\n";
				$return .= '	<option value=\'pm\'>PM</option>' . "\n";
			}
			else {
				$return .= '	<option value=\'am\'>AM</option>' . "\n";
				$return .= '	<option value=\'pm\' selected=\'selected\'>PM</option>' . "\n";
			}
			$return .= "</select>\n";
		}
 
 
		return $return;
	}
}
{% endhighlight %}
</div>