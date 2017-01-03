---
layout: documentation
title: Shortcuts
---

This page will be completed in further details soon, for now here is a quick list of available shortcuts.

| Short syntax | Full syntax | Description | Example(s) |
| ------------ | ----------- | ----------- | ---------- |
| `{$}` | `{$dwoo}` | the current scope, at first it means the entire template data, but if you use with or loop to move the scope then this will change |
| `{{ "{%FOO" }}}` | `{$dwoo.const.FOO}` | include PHP constant in your template file. | simple constant will be: `{{ "{%TEST" }}}`, you can also include a class constant, such as: `{$dwoo.const.Dwoo\\Core::FUNC_PLUGIN}` |
| `{$.FOO}` | `{$dwoo.FOO}` | | `{$.get.user_id}` = `{$dwoo.get.user_id}` |
| `{$_}` | `{$_parent}` | this is the parent scope, one level higher than the current scope in the template data. | `{$_._._}` will work as `{$_parent._parent._parent}` |
| `{$__}` | `{$_root}` | this is the top level scope, which is always equal to the entire template data |
| `{/}` | | closes the last opened block |
{: class="table table-bordered"}
