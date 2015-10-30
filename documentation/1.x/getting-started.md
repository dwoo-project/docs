---
layout: documentation
---

## Overview
Dwoo is a templating system used to make creating websites easier and more structured. Developing with Dwoo can be broken up into two parts:

1. Creating, initializing and managing the Dwoo runtime; and
2. Templating with the Dwoo templating language.

Dwoo relies on [plugins]() to provide useful functionality, examples may include: if-else blocks, include functionality, string manipulation and loops. For a full list see the [plugins]()	page.

## Running Dwoo
### Dwoo at its simplest
Here is the simplest way to output a Dwoo template.
{% highlight php %}
<?php
// Include the main class, the rest will be automatically loaded
include 'path/to/dwooAutoload.php';

// Create the controller, it is reusable and can render multiple templates
$dwoo = new Dwoo();

// Create some data
$data = array('a'=>5, 'b'=>6);

// Output the result ...
$dwoo->output('path/to/index.tpl', $data);
// ... or get it to use it somewhere else
$dwoo->get('path/to/index.tpl', $data);
{% endhighlight %}

And an index.tpl file could look like that:
{% highlight html %}
<html>
	<body>
		<h1>{$a}</h1>
		<p>{$b}</p>
	</body>
</html>
{% endhighlight %}

### Using Template and Data objects
In this example we add the Dwoo_Data class that serves as a data container, and the Dwoo_Template_File class that represents a template file in your application.
{% highlight php %}
<?php
// Include the main class, the rest will be automatically loaded
include 'path/to/dwooAutoload.php';

// Create the controller, it is reusable and can render multiple templates
$dwoo = new Dwoo();

// Load a template file, this is reusable if you want to render multiple times the same template with different data
$tpl = new Dwoo_Template_File('path/to/index.tpl');

// Create a data set, this data set can be reused to render multiple templates if it contains enough data to fill them all
$data = new Dwoo_Data();
// Fill it with some data
$data->assign('foo', 'BAR');
$data->assign('bar', 'BAZ');

// Output the result ...
$dwoo->output($tpl, $data);
// ... or get it to use it somewhere else
$dwoo->get($tpl, $data);
{% endhighlight %}

### Using a Compiler object
If you want to use custom pre- or post-processors, you need to instantiate a Dwoo_Compiler and add the processors to it.
{% highlight php %}
<?php
include 'path/to/dwooAutoload.php';
$dwoo = new Dwoo();
$tpl = new Dwoo_Template_File('path/to/index.tpl');
$data = array('a'=>5, 'b'=>6);

// Create the compiler instance
$compiler = new Dwoo_Compiler();
// Add a pre-processor that is in one of the plugin directories
$compiler->addPreProcessor('Processor_Name', true);
// .. Or a custom filter you made
$compiler->addPreProcessor('Processor_Function_Name');

// Output the result and provide the compiler to use
$dwoo->output($tpl, $data, $compiler);
{% endhighlight %}