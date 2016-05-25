---
layout: documentation
title: Blocks:textformat
---

Formats a string to the given format, you can wrap lines at a certain length and indent them.
{% highlight php %}
textformat([ int $wrap = 80, [ string $wrap_char = "\r\n", [ string $wrap_cut = false, [ int $indent = 0, [ string $indent_char = " ", [ int $indent_first = 0, [ string $style = "", [ string $assign = "" ]]]]]]]])
{% endhighlight %}

* **wrap** : maximum line length
* **wrap_char** : the character(s) to use to break the line
* **wrap_cut** : if true, the words that are longer than $wrap are cut instead of overflowing
* **indent** : amount of $indent_char to insert before every line
* **indent_char** : character(s) to insert before every line
* **indent_first** : amount of additional $indent_char to insert before the first line of each paragraphs
* **style** : some predefined formatting styles that set up every required variables, can be "email" or "html"
* **assign** : if set, the formatted text is assigned to that variable instead of being output

## Example
{% highlight smarty %}
{textformat 10}here is some text that should wrap{/textformat}

{textformat 10 wrap_cut=true}and this one should cut words that go beyoooooooond 10 chars{/textformat}
{% endhighlight %}

## Output
{% highlight text %}
here is
some text
that
should
wrap

and this
one should
cut words
that go
beyooooooo
ond 10
chars
{% endhighlight %}