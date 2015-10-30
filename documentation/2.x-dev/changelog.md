---
layout: documentation
title: Changelog
---

### 2.0.0beta1 (2014-01-01)
* Functions are now only classes. Can be autoloaded!
* Introduce anonymous functions inside generated files
* Functions and Blocks will be now called with CamelCase name (e.g. `auto_escape` became `autoEscape`)
* Lots of bug fixed

### 2.0.0alpha (2013-09-01)
* Add new magic method: Core::__get()
* Change FunctionDump class to a function
* Update FunctionDump, implement PHP-REF
* Remove plugin FunctionDumpObj
* Fix functionDateFormat
* Update Autoloader, to loading functions plugins
* Now debugMode() property, if set true forece recompilation of tpl file (easier to debug)
* Fix setCacheDir() method, path was wrong
* Check all plugins under Windows & Linux (a lot of bugs under linux)
* Set compiled & cache directory directly inside the constructor is empty
* Fix Loader::loadPlugin() method
* Add new function's plugin function: functionHtmlImage
* Add new function's plugin class: FunctionDumpObj
* Add new function's plugin function: functionFormatSize
* Add new block's plugin class: BlockScriptCapture
* Add new function's plugin function: functionOutputScript
* Add new function's plugin class: FunctionHtmlStateSelect
* Add new function's plugin class: FunctionHtmlSelectTime
* Add new function's plugin class: FunctionDocType
* Add new function's plugin function: functionGravatar
* Add new function's plugin function: functionExectime
* Add new property to class Core: debugMode()
* Rename function's plugin {template}{/template} to {function}{/function}
* Add prefix from plugins functions classes: Function
* Add prefix from plugins functions functions: function
* Add prefix from plugins blocks classes: Block
* Add prefix from plugins blocks functions: block
* Change functions and classes name from underscore style to CamelCase
* Move all plugins inside Dwoo folder, now you need to specify an
external folder of Dwoo's lib to add your cusomized plugins
* Add **Dwoo namespace**, now **Dwoo is compatible with PHP 5.3+**
* Remove Dwoo_ from each files