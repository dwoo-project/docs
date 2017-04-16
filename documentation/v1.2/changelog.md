---
layout: documentation
title: Changelog
toc: true
---

## 1.2.3 (2016-09-15)
`Added`

* Continuously integrated **Travis** config file.
* Add new method `Dwoo_Core::ClearCompiled()` to clear compiled templates.
* Add new PHPDoc `@author` and `@copyright` tags.

`Removed`

* Unreachable statements.

`Fixed`

* PHPUnit config file.
* PHPUnit tests classes.
* Fix `Dwoo_Core::clearCache()`, remove all files even `.html`.
* Fix all PHPDoc.
* Fix return statements in correlation with PHPDoc.

`Deprecated`

* Method `Dwoo_Core::output()` is now deprecated, will be removed in **1.3.0**.

## 1.2.2 (2016-09-10)
`Added`

* Add support for `XOR` and `^` operators.
* Add support for closure when adding a new plugin with: `$dwoo->addPlugin()`.

`Removed`

* File `lib/Dwoo.compiled.php` has been removed.
* File `lib/dwooAutoload.php` has been removed, use **Composer** to autoload classes.

## 1.2.1 (2014-04-20)
`Added`

* Support for Composer, adding `composer.json` file.

`Changed`

* Minimum PHP version required is now **PHP 5.3**

`Deprecated`

* Dwoo class is deprecated.

`Fixed`

* Fix for reading `unassigned _filter` from `Zend_View_Abstract` for **ZendFramework** adapter.
* Fixed `{capture}` contents lacking the output of block plugins when multiple block plugins are used.
* Fixed Dwoo compiler to not unnecessarily fail at statements involving method calls and multiple arguments.
* Fixed use of multiple modifiers in combination with method calls.
* Fixed compiler to work with modifiers on method calls in named parameters.
* Fixed stripping of newlines at the very beginning of block tags.
* Fixed compiler to support method calls in delimited strings.
* Fix opcache and apc compatibility.

`Removed`

* Remove include so autoloader can handle it.

## 1.2.0 (2013-02-15)
`Deprecated`

* BC Break: Dwoo_Core::isArray had to be fixed and it has been split up
  in 3 methods, isArray (for array access), isTraversable (for foreach)
  and count (just a helper that counts anything). It won't affect you
  unless you built some plugin depending on isArray, in which case you
  should check all works fine still
* BC Break: The fix for objects implemented __get but not __isset that was
  applied in 1.1.1 was causing problems for people implementing it
  correctly, therefore it had to be reverted. If you are affected you must
  implement __isset() properly
* BC Break: Dwoo_Core::get now returns a new Dwoo_Core instance if it's
  evaluating a template already, this only affects you if you built your
  own include-like plugin, see the changes to include plugin in revision
  346 [http://bugs.dwoo.org/dwoo/browse_code/revision/345] for more infos
  
`Added`

* Added support for nested blocks for template inheritance, block names
  must be unique, overriding of any block is done at the top level, thanks
  to Ian Carpenter for the patch
* Added {return} plugin that allows any included template to return
  variables into the one that included it, or to the main controller
  code via $dwoo->getReturnValues()
* Added support for static vars and methods access on namespaced classes
* Moved Dwoo code to Dwoo_Core that is extended by Dwoo, so you can use
  the Dwoo directory as an svn:externals without problems now and just
  use Dwoo_Core in place of Dwoo in your code
* Improved parsing of array() to support real php array syntax as well
  as variables as array keys, thanks to acecream for the help
* Improved parsing of named parameters that can now be quoted
* Added support for instance and static method calls white-listing in
  Dwoo_Security_Policy (see allowMethod()), this is hardly efficient
  though for instance calls since it has to do runtime checks so use
  it with caution

`Fixed`

* Fixed PHP parse errors being generated in compiled templates when
  {dynamic} was nested
* Fixed extends bug when calling {extends} with parenthesis
* Fixed a double escaping bug when a variable was assigned to another one
* Added $this->viewParam support to ZendFramework adapter through a
  Dwoo_Adapters_ZendFramework_Dwoo class that extends Dwoo, you should use
  this if you called setEngine() on the ZF view
* Fixed parsing of blocks with a huge (25K+) content
* Fixed parsing of quoted keywords in if statements, like 'not' was
  parsed as ! because using {if not $foo} is valid, but it was impossible
  to use them even as string.
* Fixed parsing bug with method calls used as arguments with a comma
  following.
* Fixed parsing of function/constants that start with an underscore,
  thanks to Dominik del Bondio for the patch
* Adapters: Agavi: Added support for multiple plugin directories in the
  config, thanks to Mike Seth for the patch
* Fixed endless loop when parsing an invalid else block
* Fixed custom compilable plugins not being recognized as such
