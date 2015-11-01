---
layout: documentation
title: Functions:gravatar
---

Returns a link to the gravatar of someone based on his email address, see the [Gravatar](http://en.gravatar.com/) website if you don't know what this is about.
{% highlight php %}
gravatar(string $email, [ int $size = 80, [ string $default = "", [ string $rating = "g" ]]] )
{% endhighlight %}

* **email** : email address of the user for whom you want the gravatar
* **size** : the size in pixels of the served image, defaults to 80
* **default** : an url to the default image to display, or one of the three image generators: identicon, monsterid or wavatar, see [http://en.gravatar.com/site/implement/url](http://en.gravatar.com/site/implement/url) for more infos on those, by default this will be the gravatar logo
* **rating** : the highest allowed rating for the images, it defaults to `g` (general, the lowest/safest) and other allowed values (in order) are `pg` (parental guidance), `r` (restricted) and `x` (boobies, crackwhores, etc.)

##Example
{% highlight smarty %}
<img src="{gravatar "test@gravatar.com" 20 "identicon" "x"}" alt="Test gravatar" />
{% endhighlight %}

##Output
{% highlight html %}
<img src="http://www.gravatar.com/avatar/df3d4780faaf2446a65ce39eafdfe1c0?s=20&r=x" alt="Test gravatar" />
{% endhighlight %}