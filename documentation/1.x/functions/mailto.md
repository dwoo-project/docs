---
layout: documentation
title: "Functions:mailto"
---

Outputs a mailto link with optional spam-proof (okay probably not) encoding
{% highlight php %}
<?php
mailto(string $address, [ string $text = null, [ string $subject = null, [ string $encode = null, [ string $cc = null, [ string $bcc = null, [ string $newsgroups = null, [ string $followupto = null, [ string $extra = null ]]]]]]]])
{% endhighlight %}

* **address**: target email address
* **text**: display text to show for the link, defaults to the address if not provided
* **subject**: the email subject
* **encode**: one of the available encoding (none, js, jscharcode or hex)
* **cc**: address(es) to carbon copy, comma separated
* **bcc**: address(es) to blind carbon copy, comma separated
* **newsgroups**: newsgroup(s) to post to, comma separated
* **followupto**: address(es) to follow up, comma separated
* **extra**: additional attributes to add to the `<a>` tag