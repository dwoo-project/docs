---
layout: documentation
title: "Functions:gravatar"
---

Returns a link to the gravatar of someone based on his email address, see the Gravatar website if you don't know what this is about.
{% highlight php %}
<?php
gravatar(string $email, [ int $size = 80, [ string $default = "", [ string $rating = "g" ]]] )
{% endhighlight %}

* **email**: email address of the user for whom you want the gravatar
* **size**: the size in pixels of the served image, defaults to 80
* **default**: an url to the default image to display, or one of the three image generators: identicon, monsterid or wavatar, see [http://en.gravatar.com/site/implement/url](http://en.gravatar.com/site/implement/url){:target="_blank"} for more infos on those, by default this will be the gravatar logo
* **rating**: the highest allowed rating for the images, it defaults to 'g' (general, the lowest/safest) and other allowed values (in order) are 'pg' (parental guidance), 'r' (restricted) and 'x' (boobies, crackwhores, etc.)

##Example
{% highlight smarty %}
<img src="{gravatar "test@gravatar.com" 20 rating="x"}" alt="Test gravatar" />
{% endhighlight %}

##Output
{% highlight html %}
<img src="http://www.gravatar.com/avatar/df3d4780faaf2446a65ce39eafdfe1c0?s=20&r=x" alt="Test gravatar" />
{% endhighlight %}

##Sources
{% highlight php %}
<?php
/**
 * Returns a link to the gravatar of someone based on his email address, see {@link http://en.gravatar.com/}.
 * <pre>
 *  * email : email address of the user for whom you want the gravatar
 *  * size : the size in pixels of the served image, defaults to 80
 *  * default : an url to the default image to display, or one of the three image 
 *              generators: identicon, monsterid or wavatar, see {@link http://en.gravatar.com/site/implement/url} 
 *              for more infos on those, by default this will be the gravatar logo
 *  * rating : the highest allowed rating for the images, 
 *             it defaults to 'g' (general, the lowest/safest) and other allowed 
 *             values (in order) are 'pg' (parental guidance), 'r' (restricted) 
 *             and 'x' (boobies, crackwhores, etc.)
 * </pre>
 * This software is provided 'as-is', without any express or implied warranty.
 * In no event will the authors be held liable for any damages arising from the use of this software.
 *
 * This file is released under the LGPL
 * "GNU Lesser General Public License"
 * More information can be found here:
 * {@link http://www.gnu.org/copyleft/lesser.html}
 *
 * @author     Jordi Boggiano <j.boggiano@seld.be>
 * @copyright  Copyright (c) 2008, Jordi Boggiano
 * @license    http://www.gnu.org/copyleft/lesser.html  GNU Lesser General Public License
 * @link       http://dwoo.org/
 * @version    1.0.0
 * @date       2008-09-13
 * @package    Dwoo
 */
function Dwoo_Plugin_gravatar_compile(Dwoo_Compiler $compiler, $email, $size = null, $default = null, $rating = null)
{
	$out = '\'http://www.gravatar.com/avatar/\'.md5(strtolower(trim('.$email.')))';
 
	$params = array();
	if ($size != 'null') {
		if (is_numeric($size)) {
			$params[] = 's='.((int) $size);
		} else {
			$params[] = 's=\'.((int) '.$size.').\'';
		}
	}
	if ($default != 'null') {
		$params[] = 'd=\'.urlencode('.$default.').\'';
	}
	if ($rating != 'null') {
		$r = trim(strtolower($rating), '"\'');
		if (in_array($r, array('g','pg','r','x'))) {
			$params[] = 'r='.$r;
		} else {
			$params[] = 'r=\'.'.$rating.'.\'';
		}
	}
	if (count($params)) {
		$out .= '.\'?'.implode('&amp;', $params).'\'';
	}
 
	if (substr($out, -3) == ".''") {
		$out = substr($out, 0, -3);
	}
	return $out;
}
{% endhighlight %}