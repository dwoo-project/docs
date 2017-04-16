---
layout: documentation
title: Changelog
toc: true
---

## 1.3.6 (2017-03-27)
`Changed`

* In `setCacheDir` and `setCompileDir` methods, create directory path if not exist if possible.
* Rename `Compiler::getDwoo()` to `Compiler::getCore()`.

`Fixed`

* Fix bug, using object for custom plugin and using `getobjectPlugin` method.
* Fix error, `getCore` need to return `$this->core`.
* Fix output data bug in `replaceModifiers` method.
* Fix `addPlugin` method, add code when passing object in `$callback`.

## 1.3.5 (2017-03-16)
`Added`

* Add new constant test from file `testShortClassConstants`.

`Changed`

* Update tests, add new test `testClassConstants`.
* Update `Loader::rebuildClassPathCache` method, using `DirectoryIterator` class instead of `glob` function.

`Fixed`

* Fix class `BaseTests`, remove *cached* and *compiled* files when calling **destructor**.
* Constants error when using 2 trailing slashes, issue [#63](https://github.com/dwoo-project/dwoo/issues/63).
* Fix `parseConstKey` method, replacing double `\\` by single `\`.
* Fix `throw new` exception, display on one line.

`Removed`

* Remove useless `else` and non accessing code.

## 1.3.4 (2017-03-07)
`Added`

* Add `docker-compose.yml` file for unit testing only.

`Changed`

* Update PHPUnit commands in *tests/README.md* file.
* Ignore `composer.lock` file.
* Update code `while (list(, $v) = each($args))` to `foreach ($args as $key => $v)`.

`Fixed`

* Fixing issue [#58](https://github.com/dwoo-project/dwoo/issues/58).
* Update method `Dwoo\Template\File::getCompiledFilename`.


## 1.3.3 (2017-01-09)
`Added`

* Add new parameter `allowed_tags` for **strip_tags** plugin.

`Changed`

* All **function's plugins** as *PHP function* has been converted to *PHP class*, following now PSR-0 and PSR-4 standards.
* `array` helper as *PHP function* has been converted to *PHP class*, following now PSR-0 and PSR-4 standards.

## 1.3.2 (2017-01-05)
`Added`

* Add new tests: `CoreTest::testSetters`, `CoreTest::testGlobal`.
* Add new methods: `Core::setTemplateDir` and `Core::getTemplateDir`.
* Add new alias `js` for *javascript* available format in **escape** plugin.
* Add new methods `Core::addGlobal` and `Core::getGlobals`.

`Changed`

* Properties `Core::$data` and `Core::$globals` are now protected.

`Fixed`

* Fix PHPUnit test: `CompilerTest::testConstants`.

## 1.3.1 (2016-12-16)
* Now fully compatible with **PHP7.0** and **PHP7.1**.

`Changed`

* Rename class `Dwoo\Template\String` to `Dwoo\Template\Str`.

`Fixed`

* Fixing all adapters.
* Fixing constant calls from classes with namespaces.

## 1.3.0 (2016-09-25)
`Added`

* Add namespaces.
* Add new PHPDoc block **Copyright** for each files.

`Changed`

* Follows [PHP Coding Standards Fixer](http://cs.sensiolabs.org/).
* Refactoring code, following [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) Standard.
* Follows PSR-1: Basic Coding Standard.
* Follows PSR-2: Cosing Style Guide.
* Follows PSR-4: Autoloader Standard instead of PSR-0.
* Update **README** examples with namespace.
* Move all plugins from `plugins/builtin` to `Dwoo/Plugins`.
* Processor `smarty_compat` become `PluginSmartyCompatible`.
* All plugins **functions** and **classes** names MUST start with `Plugin` keyword.
* All plugins filename MUST have the same name as the **function** or **class**.
* Plugins name changed from **underscore_case** to **CamelCase** (e.g. `Dwoo_Plugin_assign_compile` is now `PluginAssignCompile`).
* Helper `Dwoo_Plugin_array_compile` move to `Dwoo\Plugins\Helpers\PluginArrayCompile`.

`Removed`

* Delete `Dwoo` class, now you need to use: `new Dwoo\Core()`.
* Delete method `Dwoo\Core::output()`, use now `echo Dwoo\Core::get()` method.
* Last parameter `$_output` of `Dwoo\Core::get()` method has been removed, use `echo Dwoo\Core::get()` instead.
