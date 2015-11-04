---
layout: documentation
---

Removes all html tags
```php
stripTags(string $value, [ bool $addspace = true ])
```
* **value** : the string to process
* **addspace** : if true, a space is added in place of every removed tag

##Example
```html
{stripTags "foo<strong>bold</strong>bar"}
{stripTags "foo<strong>bold</strong>bar" false}
```

##Output
```
foo bold bar
fooboldbar
```