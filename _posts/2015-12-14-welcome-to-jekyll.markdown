---
layout: post
title:  "Welcome to Jekyll!"
subtitle: "This is a post about how jekyll can be used on how awesome it is"
date:   2015-12-14 21:31:23 +0000
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %} 

<div id="visual1"></div>

<script type="module">

  // NOTEBOOK CONFIGURATION
  import notebook from "https://api.observablehq.com/@asgersp/force-directed-graph.js"

  const target = document.querySelector("#visual1");
  const renders = {
    "chart": "div",
  };


  // BOILERPLATE
  import {Inspector, Runtime} from "https://unpkg.com/@observablehq/notebook-runtime@1.2.0?module";
  for (let i in renders) {
    let s = renders[i], a = s.match(/^\w+/);
    if (a) {
      renders[i] = document.createElement(a[0]);
      target.appendChild(renders[i]);
      if (a = s.match(/\.(\w+)$/))
        renders[i].className = a[1]; 
    }
    else
      renders[i] = document.querySelector(renders[i]);
  }
  Runtime.load(notebook, (variable) => {
    if (renders[variable.name]) {
      return new Inspector(renders[variable.name]);
    } else {
      // return true; // uncomment to run hidden cells
    }
  });
</script>

Check out the [Jekyll docs][jekyll-docs] for more info <span data-tooltip tabindex="1" title="Fancy word for a beetle.">on</span> how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/


    



