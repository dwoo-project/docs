---
layout: integrations
title: Yii adapter
---

### Installation
Bootstrap code:
<div class="code-box synopsis">
<header>index.php</header>
{% highlight php %}
<?php
/**
 * Initialize Dwoo wraper:
 *
 * compile_dir and cache_dir can be passed as an assoc-array values
 * to the constructor to change the default path for the directories
 * where the compiled and cached templates are stored
 */
$viewInterface = new Dwoo_Adapters_ZendFramework_View();
 
/**
 * Init new view renderer and bind the wraper to it:
 *
 * More info about the ViewRenderer:
 * http://framework.zend.com/manual/en/zend.controller.actionhelpers.html#zend.controller.actionhelpers.viewrenderer
 */
$viewRenderer = new Zend_Controller_Action_Helper_ViewRenderer($viewInterface);
 
/**
 * And add the helper to the controler:
 *
 * More info about the HelperBroker:
 * http://framework.zend.com/manual/en/zend.controller.actionhelpers.html#zend.controller.actionhelper.broker
 */
Zend_Controller_Action_HelperBroker::addHelper($viewRenderer);
{% endhighlight %}
</div>

#### Some additional tuning
If you don't want to use .phtml template suffix, you can change it to .tpl (or whatever you want):
<div class="code-box synopsis">
{% highlight php %}
<?php
$viewRenderer->setViewSuffix('tpl')
{% endhighlight %}
</div>

#### Changing properties of the Dwoo or Dwoo_Compiler objects
You can access the setSomething() methods of the Dwoo and Dwoo_Compiler classes through the configuration array as such:
<div class="code-box synopsis">
{% highlight php %}
<?php
$viewInterface = new Dwoo_Adapters_ZendFramework_View(array(
            'engine' => array(
                  'compileDir' => '/path/to/writeable/dir', // calls the $dwoo->setCompileDir() method
                  'cacheDir' => '/path/to/other/writeable/dir' // calls the $dwoo->setCacheDir() method
            ),
            'compiler' => array(
                  'autoEscape' => true // calls $compiler->setAutoEscape()
            )
));
{% endhighlight %}
</div>
Constructor accepts a configuration array (via setOptions() method) or instance of Zend_Config object (via setConfig() method).  
Alternatively you can just provide a custom pre-configured object instead of those settings sub-arrays, see below.

#### Using your own engine class
You can ask the adapter to use any class that extends Dwoo as its engine (as of 2008/09/12 only SVN version):
<div class="code-box synopsis">
{% highlight php %}
<?php
class My_Custom_Engine extends Dwoo
{
    /* Your own code here */
}
{% endhighlight %}
</div>

Then:
<div class="code-box synopsis">
{% highlight php %}
<?php
$viewInterface = new Dwoo_Adapters_ZendFramework_View(array(
            'engine' => 'My_Custom_Engine'
));
{% endhighlight %}
</div>

Or:
<div class="code-box synopsis">
{% highlight php %}
<?php
$engine = new My_Custom_Engine();
$engine -> doSomething();
$engine -> initSomethingElse();
$viewInterface = new Dwoo_Adapters_ZendFramework_View(array(
            'engine' => $engine,
));
{% endhighlight %}
</div>

In addition, you can set the custom class and set params for it:
<div class="code-box synopsis">
{% highlight php %}
<?php
$viewInterface = new Dwoo_Adapters_ZendFramework_View(array(
	'engine' => array(
		  'type' => 'My_Custom_Engine', // an class name or an object
		  'compileDir' => '/path/to/writeable/dir', // calls the setCompileDir() method on the My_Custom_Engine object
		  'cacheDir' => '/path/to/other/writeable/dir' // calls the setCacheDir() method on the My_Custom_Engine object
	)                        
));
{% endhighlight %}
</div>

#### View helpers
Dwoo_Adapters_ZendFramework_View supports Zend's view helpers with the use of Dwoo_Adapters_ZendFramework_PluginProxy.
This proxy is bonded to the Dwoo engine and checks for available helpers (headTitle, headLink, url, etc).

Some helper call examples:
<div class="code-box synopsis">
<header>index.tpl</header>
{% highlight smarty %}
<!-- Outputing title -->
{headTitle}
 
<!-- Outputing content in the layout template -->
{layout()->content}
 
 
<!-- Outputing URL from some defined routes -->
{url(array(controller = 'foo', action = 'bar'), 'baz')}
{% endhighlight %}
</div>