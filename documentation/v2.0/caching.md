---
layout: documentation
title: Caching
toc: true
---

Caching is used to speed up a calls by saving output to a file.
If a cached version of the call is available, that is displayed instead of regenerating the output.
Caching can speed things up tremendously, especially templates with longer computation times.

Since templates are dynamic, it is important to be careful what you are caching and for how long.
For instance, if you are displaying the front page of your website that does not change its content very often,
it might work well to cache this page for an hour or more.
On the other hand, if you are displaying a page with a timetable containing new information by the minute, it would
not make sense to cache this page.

## Setting Up Caching
By default caching is **disabled** and use caching class `Cache\Nullable`.

###  Enabling caching
The first thing to do is enable caching by using `Core::setCache()` method.   
This method accept the next values: `CacheInterface` object, `string` or `boolean`.

<div class="code-box">
<header>demo.php</header>
{% highlight php %}
<?php
// Include the main class, the rest will be automatically loaded
require 'vendor/autoload.php';

// Create instance of main class of Dwoo
$core = new Dwoo\Core();

// Set cache folder to store caching files (with unlimited time)
$core->setCache('./tests/temp/cache');

// Output the cached result
echo $core->get('index.tpl');
{% endhighlight %}
</div>

With caching enabled, the method call to display will render the template as usual, but also saves a copy of its
output to a file (*a cached copy*) in the **cache directory**. On the next call to display the template, the cached 
copy will be used instead of rendering the template again.

### Setting cache lifetime
Each cached page has a limited lifetime determined by `protected $time;`.   
The default value is **3600** seconds, or **one hour**. After that time expires, the cache is regenerated.

<div class="code-box">
<header>demo.php</header>
{% highlight php %}
<?php
// Include the main class, the rest will be automatically loaded
require 'vendor/autoload.php';

// Create instance of main class of Dwoo
$core = new Dwoo\Core();

// Create instance of Filesystem to store cache files
$cache = new Dwoo\Cache\Filesystem('./tests/temp/cache');
// Set cache time to 60 seconds
$cache->setTime(60);

// Use Filesystem to store caching files
$core->setCache($cache);

// Output the cached result
echo $core->get('index.tpl');
{% endhighlight %}
</div>

### Clearing the cache
You can clear all the cache files with the `Core::clearCache()` method, or individual cached files with the 
`CacheInterface::clear()` method.

<div class="code-box">
<header>demo.php</header>
{% highlight php %}
<?php
// Include the main class, the rest will be automatically loaded
require 'vendor/autoload.php';

// Create instance of main class of Dwoo
$core = new Dwoo\Core();

// Set cache folder to store caching files (with unlimited time)
$core->setCache('./tests/temp/cache');

// Clear current template cache
$core->getCache()->clearCache('index.tpl');

// Clear all cache files
$core->clearCache();

// Output the cached result
echo $core->get('index.tpl');
{% endhighlight %}
</div>

## Creating a custom Caching system
As an alternative to using the default file-based caching mechanism `Cache\Filesystem`, you can create a custom cache
handling class that will be used to `read`, `write` and `clear` cached files.

<div class="code-box">
<header>CustomCache.php</header>
{% highlight php %}
<?php
use Dwoo\CacheInterface;

/**
 * Class CustomCache
 */
class CustomCache implements CacheInterface
{

    /**
     * Returns the cache duration for this template.
     * defaults to null if it was not provided
     *
     * @return int
     */
    public function getTime(): int
    {
        // TODO: Implement getTime() method.
    }

    /**
     * Returns the cached template output file name, true if it's cache-able but not cached
     * or false if it's not cached.
     *
     * @return bool|string
     */
    public function read()
    {
        // TODO: Implement read() method.
    }

    /**
     * Caches the provided output into the cache file.
     *
     * @param string $content the template output
     *
     * @return string full path of the cached file
     */
    public function write(string $content): string
    {
        // TODO: Implement write() method.
    }

    /**
     * Clears the cached template if it's older than the given time.
     *
     * @param string $content   The template content
     * @param int    $olderThan minimum time (in seconds) required for the cache to be cleared
     *
     * @return bool true if the cache was not present or if it was deleted, false if it remains there
     */
    public function clear(string $content, int $olderThan = - 1): bool
    {
        // TODO: Implement clear() method.
    }
    
    /**
     * Generates a cache key for the given template content.
     *
     * @param string $content The template content
     *
     * @return string
     */
    public function generateKey(string $content): string
    {
        // TODO: Implement generateKey() method.
    }
}
{% endhighlight %}
</div>

After creating an object of `CustomCache` class, dwoo will now use this class to handle cached data.
<div class="code-box">
<header>demo.php</header>
{% highlight php %}
<?php
// Include the main class, the rest will be automatically loaded
require 'vendor/autoload.php';

// Create instance of main class of Dwoo
$core = new Dwoo\Core();

// Create instance of CustomCache class
$cache = new CustomCache('./tests/temp/cache');

// Set CustomCache class
$core->setCache($cache);

// Output the cached result
echo $core->get('index.tpl');
{% endhighlight %}
</div>

## Custom Cache Implementation
