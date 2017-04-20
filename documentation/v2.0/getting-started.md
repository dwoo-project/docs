---
layout: documentation
title: Getting started
toc: true
---

## Running Dwoo

### Dwoo at its simplest
Here is the simplest way to output a Dwoo template.
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
// Include the main class, the rest will be automatically loaded
require 'vendor/autoload.php';

// Create the controller, it is reusable and can render multiple templates
$dwoo = new Dwoo\Core();

// Output the result
echo $dwoo->get('path/to/index.tpl', ['a'=>5, 'b'=>6]);
{% endhighlight %}
</div>

And a template file could look like that:
<div class="code-box">
<header>index.tpl</header>
{% highlight html %}
<html>
	<body>
		<h1>{$a}</h1>
		<p>{$b}</p>
	</body>
</html>
{% endhighlight %}
</div>

### Using Template and Data objects
In this example we add the `Dwoo\Data` class that serves as a data container, and the `Dwoo\Template\File` class that
represents a template file in your application.
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
// Include the main class, the rest will be automatically loaded
require 'vendor/autoload.php';

// Create the controller, it is reusable and can render multiple templates
$dwoo = new Dwoo\Core();

// Load a template file, this is reusable if you want to render multiple times the same template with different data
$tpl = new Dwoo\Template\File('path/to/index.tpl');

// Create a data set, this data set can be reused to render multiple templates if it contains enough data to fill them all
$data = new Dwoo\Data();
// Fill it with some data
$data->assign('foo', 'BAR');
$data->assign('bar', 'BAZ');

// Output the result
echo $dwoo->output($tpl, $data);
{% endhighlight %}
</div>

### Using a Compiler object
If you want to use [custom pre-processors or post-processors](/plugins/#processors), you need to instantiate a
`Dwoo\Compiler` and add the processors to it.
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
require 'vendor/autoload.php';

$dwoo = new Dwoo\Core();
$tpl = new Dwoo\Template\File('path/to/index.tpl');
$data = ['a'=>5, 'b'=>6];

// Create the compiler instance
$compiler = new Dwoo\Compiler();
// Add a pre-processor that is in one of the plugin directories
$compiler->addPreProcessor('Processor_Name', true);
// .. Or a custom filter you made
$compiler->addPreProcessor('Processor_Function_Name');

// Output the result and provide the compiler to use
echo $dwoo->get($tpl, $data, $compiler);
{% endhighlight %}
</div>

### Using Dwoo with loops - Blog example
Let's assume you are looping over multiple articles of a blog that you want to display, here is what you can do to do
it as lightly as possible:

You first have to create an "article.tpl" template file, the name doesn't matter really it's up to you, here is what
goes in:
<div class="code-box">
<header>article.tpl</header>
{% highlight html %}
<div class="article">
	<h1>{$title}</h1>
	{$content}
	<p class="footer">posted by {$author} on {date_format $date "%d/%m/%Y"}</p>
</div>
{% endhighlight %}
</div>

You will then use this template to render all the articles.
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
require 'vendor/autoload.php';

$dwoo = new Dwoo\Core();
// Load the "article" template
$tpl = new Dwoo\Template\File('path/to/article.tpl');

// Retrieve your data using whatever means you use
$articles = getMyArticles();

// Loop over them
foreach($articles as $article) {
    // Output each article using their data (assuming it is an
    // associative array containing "title", "content", "author"
    // and "date" keys)
    echo $dwoo->get($tpl, $article);
}
{% endhighlight %}
</div>

## Basic Templating
As already mentioned, the Dwoo runtime parses the template files to generate HTML output. In this section we introduce
some common constructs to quickly get you up to speed.

### Variables

#### Simple variables
As above in Dwoo simple variables are passed and rendered to HTML using an associated array, as the following example
illustrates:
<div class="code-box">
<header>index.tpl</header>
{% highlight html %}
<h1>{$page_title}</h1>
<div id="content">
   {$page_content}
</div>
{% endhighlight %}
</div>

The variables page_title and page_content are passed to the template rendering API like such:
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
$dwoo = new Dwoo\Core();
 
$params                 = [];
$params['page_title']   = 'The next social networking website';
$params['page_content'] = 'Make friends online? Y/N';
 
echo $dwoo->get("code_snippet.tpl", $params);
{% endhighlight %}
</div>
In the above example the $params array is loaded with parameters that are substituted in the Dwoo code snippet.

#### Variable arrays
In Dwoo it is possible to 'bundle' your variables up into arrays on the PHP side and address them separately in a
Dwoo template using the 'dot' operator. This helps reduce the possibility of confusion with one variable with two
different purposes being used in different places in your Dwoo template. An example will be used to illustrate this:
<div class="code-box">
<header>index.tpl</header>
{% highlight html %}
<div id="action-bar">welcome {$auth.username} | <a href="logout.php">logout...</a></div>
 
<h1>{$page.title}</h1>
<div id="content">
   {$page.content}
</div>
{% endhighlight %}
</div>

In the above code snippet we have two bundles, the first is the auth array that includes the user's username.
The second is the array that contains the page content. This snippet is setup with the following PHP code:
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
$dwoo = new Dwoo\Core();
 
/* We hard code the parameters in here but in a real world app this would come from 
 * an authenticating module using a DB or maybe from an LDAP server. 
*/
$auth             = [];
$auth['username'] = 'corey';
$auth['ok']       = true;
$auth['is_admin'] = false;
 
/* Load the page content. */
$page            = [];
$page['title']   = 'The next social networking website';
$page['content'] = 'Make friends online? Y/N';
 
$params         = [];
$params['auth'] = $auth;
$params['page'] = $page;
 
echo $dwoo->get("code_snippet.tpl", $params);
{% endhighlight %}
</div>
The above two snippets generate roughly the same HTML as the first example using simple variables.
You may wonder why using arrays to bundle your parameters has any benefit:

1. It prevents naming collisions.
2. Allows you to group or encapsulate related blocks of variables.
3. You can have different PHP modules generating their own output arrays making your site's design more modularized.

### Conditionals
Dwoo has if/else constructs to allow the coder to add conditional sections to web pages. This can be used for things
such as restricting content to authorized users or displaying form components only if certain conditions are met.
Dwoo's conditional statements are quite flexible, however we only cover the basics here.

### Loops
Sometimes you need to repeat parts of a web page in a systematic manor. In Dwoo this is done using
[loops](/plugins/blocks/loop.html). This is best illustrated by an example:
<div class="code-box">
<header>select.tpl</header>
{% highlight html %}
<select name="type_id" value="{$type_id}">
 {loop $licensee_type_list}
   <option value="{$id}">{$name}</option>
 {/loop}
</select>
{% endhighlight %}
</div>

Above is a code snippet from an HTML form. The `type_id` is a simple variable (see above). The `licensee_type_list`
variable is an array containing associated arrays. What occurs is that in every iteration of the loop the
[loop](/plugins/blocks/loop.html) plugin extracts the values from an array entry with its name and id as
keys and substitutes them into the template. The above snippet (if in a file called `code_snippet.tpl`) would be
initialized and setup with the following PHP:
<div class="code-box">
<header>index.php</header>
{% highlight php %}
<?php
$dwoo = new Dwoo\Core();
 
/* Although we are populating this by hand it will usually come from a DB in practice.  */
 
$type_list   = [];
$type_list[] = ['id' => 1, 'name' => 'Machine'];
$type_list[] = ['id' => 2, 'name' => 'Individual'];
$type_list[] = ['id' => 3, 'name' => 'Group'];
$type_list[] = ['id' => 4, 'name' => 'Site'];
 
/* Load the params array and render the output. */
 
$params                       = [];
$params['type_id']            = 1;           // from a DB...
$params['licensee_type_list'] = $type_list
 
echo $dwoo->get("code_snippet.tpl", $params);
{% endhighlight %}
</div>
The above Dwoo snippet and PHP code extract will give the following HTML output:
<div class="code-box">
<header>select.tpl</header>
{% highlight html %}
<select name="type_id" value="1">
   <option value="1">Machine</option>
   <option value="2">Individual</option>
   <option value="3">Group</option>
   <option value="4">Site</option>
</select>
{% endhighlight %}
</div>
This method can also be used to generate tables of data (by repeating the tr tag). It is up to you.

### Breaking your webpage templates into sections
Webpages are usually broken up into sections for easy maintenance and design. An example could be a webpage which has
a header, body content, and footer sections. In this case instead of everything being in one file, the page is broken
up into components which can be reused for other page templates.

In PHP you can do this by writing functions, that when called output a section of the page. In Dwoo this is
accomplished by using the [include](/plugins/functions/include.html) plugin. An example would be:
<div class="code-box">
<header>sect_header_stuff.tpl</header>
{% highlight html %}
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
  <head>
    <title>{$title} - Awesome Inc.</title>
 
    <script src="script.js" type="text/javascript" language="javascript"></script>
    <link href="site.css" type="text/css" rel="stylesheet"/>
  </head>
  <body> <!-- Page content START. -->
{% endhighlight %}
</div>

<div class="code-box">
<header>sect_footer_stuff.tpl</header>
{% highlight html %}
  </body> <!-- Page content END. -->
</html>
{% endhighlight %}
</div>

<div class="code-box">
<header>webpage_generic.tpl</header>
{% highlight html %}
{include(file='sect_header_stuff.tpl')}
 
<div id="content">
  {$content}
</div>
 
{include(file='sect_footer_stuff.tpl')}
{% endhighlight %}
</div>
Above is a generic page whose title and main body content can be extracted from a database. You may choose to do it
this way or to 'hard code' your content directly into a function specific template.