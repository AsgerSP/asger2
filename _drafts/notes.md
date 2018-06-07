---
layout: post
---
https://stackoverflow.com/questions/17890493/how-can-i-show-just-the-most-recent-post-on-my-home-page-with-jekyll

This can be accomplished through the use of limit:

{% for post in site.posts limit:1 %}
... Show the post ...
{% endfor %}

You can also use limit and offset together to "feature" your most recent post:

<h1>Latest Post</h1>
{% for post in site.posts limit:1 %}
... Show the first post all big ...
{% endfor %}
<h1>Recent Posts</h1>
{% for post in site.posts offset:1 limit:2 %}
... Show the next two posts ...
{% endfor %}
