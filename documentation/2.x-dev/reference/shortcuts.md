---
layout: documentation
title: Shortcuts
---

This page will be completed in further details soon, for now here is a quick list of available shortcuts.

`FOO` is the variable term you want to display in all those examples

* `{{ "{%FOO" }}}` = `{$dwoo.const.FOO}`
* `{$.FOO}` = `{$dwoo.FOO}`, i.e. for a `{$.get.user_id}` = `{$dwoo.get.user_id}`
* `{$}` = the current scope, at first it means the entire template data, but if you use with or loop to move the scope then this will change
* `{$_}` = `{$_parent}`, this is the parent scope, one level higher than the current scope in the template data.
* `{$_._._}` will work as `{$_parent._parent._parent}`
* `{$__}` = {$_root}, this is the top level scope, which is always equal to the entire template data.
* `{/}` = closes the last opened block