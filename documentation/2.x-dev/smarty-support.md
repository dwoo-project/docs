---
layout: documentation
title: List of unsupported Smarty features
---

## Smarty Support
Dwoo supports the Smarty template syntax and extends it to provide some other possibilities. Read the [Syntax](/documentation/1.x/designers/syntax.html) and [Shortcuts](/documentation/2.x-dev/reference/shortcuts.html) pages for more info on that.

### Partially Supported
These are supported by Dwoo but in a different way than the original Smarty features, so they might or might not work using the Adapter class depending on what you do with them.

* ***{section},{sectionelse}***
  * They are automatically converted by the smartyCompat preprocessor but you MUST convert them to {for} and {forelse} tags in your templates if you want to use Dwoo in native mode.
* ***{php}***
  * It's deprecated (you should just use <?php ?> tags) but is supported by the smartyCompat preprocessor.
* $smarty->register_object()
  * Some features like whitelisting methods are not available since this is pointless with PHP5, you can just make your methods protected if they are not to be accessed from outside the object
* ***{strip}***
  * The strip block is supported, but the strip modifier had to be renamed to whitespace instead, the smartyCompat preprocessor converts it but as for section tags, you should convert them if you want to use Dwoo in native mode.

### Unsupported Plugins
However, Smarty functions and modifiers are not entirely supported. Some will be in future versions, some won't, here is the list and some details about why they are not supported.

Those won't happen:

* ***{include_php}***
  * This was already deprecated in Smarty and I won't implement it, it is easy enough to write plugins so that you don't have to include php files within the template, or you can use <?php include 'file.php'; ?> if you really need to.
* ***{debug}***
  * Use {dump}, it will improve over time to provide similar features.
* ***{config_load}***
  * I don't see the point and so do most people it seems, so rework your structure, define variables in php and let's get rid of this.

Those might/will be implemented:

* ***{insert}***

And finally, those will probably be implemented one day, but until then you can take those plugins from the Smarty plugins directory and drop them into the Dwoo plugin directory, they should keep working as before. If you have problems please let me know though.

* {html_checkboxes}
* {html_image}
* {html_options}
* {html_radios}
* {html_select_date}
* {html_select_time}
* {html_table}
* {popup}
* {popup_init}

### Unsupported Smarty Class Features
Here is the current compatibility list of the Smarty class properties and methods and what I'm going to do about it in the future.

#### Methods
Will not be supported:

* clear_config()
* get_config_vars()
* config_load()
  * I don't see the point and so do most people it seems, so rework your structure, define variables in php and let's get rid of this.

Supported by Dwoo but hard to mimic within the SmartyAdapter class so they will probably not be implemented:

* register_resource()
* unregister_resource()
* load_filter()

Should be implemented in one of the next versions:

* clear_compiled_tpl()
  * a bit useless really, clear your compile dir yourself if you really need to, but the lack of this function shouldn't prevent anything from working

#### Properties
Those will probably never be implemented, they are either useless or should be done through other means in Dwoo:

* debugging
* error_reporting
* debugging_ctrl
* request_vars_order
* request_use_auto_globals
* cache_handler_func
* autoload_filters
* default_template_handler_func
* config_overwrite
* config_booleanize
* config_read_hidden
* config_fix_newlines
* config_class
* use_sub_dirs
  * dwoo uses subdirs if you use forward slashes (/) in your cache or compile IDs automatically
* default_modifiers

Those are probably going to be implemented, but I can't say when yet:

* debug_tpl
* cache_modified_check
* default_resource_type