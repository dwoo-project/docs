---
layout: documentation
title: "Adapters: CakePHP"
---

## Installation
1. Download and install the dwoo library, preferably on the 'vendors' directory of CakePHP.
(However you can place it anywhere you want; if you do, make sure to change the App::import line in dwoo.php (found in Dwoo/Adapters/CakePHP) to include the dwoo library properly.)
2. Place this Dwoo/Adapters/CakePHP/dwoo.php file in the app/views directory, or on cake/libs/view.
3. Create the app/tmp/dwoo/cache and app/tmp/dwoo/compile directories and make sure they are writable.

## Usage example
{% highlight php %}
<?php
// In your controller class you need to change the view property to
// use Dwoo at some point in the execution using :
$this->view = 'Dwoo';
 
// Or you can also override the view property in your AppController class as such :
class AppController extends Controller {
    public $view = 'Dwoo';
}
 
// If you want another template extension (default is .tpl) you must
// edit the dwoo.php file at line 44 and change it to :
$this->ext = ".html";
{% endhighlight %}

{% highlight smarty %}
{include $templatedir."index.tpl"}
{% endhighlight %}