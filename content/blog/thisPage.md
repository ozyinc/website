---
title: Creating my website in Github Pages using Hugo
date: 2020-04-24
ype: posts
---

### Background
I have purchased the domain [ozyinc.com](https://ozyinc.com) a long time ago to host custom servers (work-related, hobby and Minecraft :smile: ), VPN server, etc... however I have never started building my own website and for many years the homepage was an Express server behind an NGINX reverse proxy displaying Hello World on GET `/`. 

### The case with Elm and not-ever-finishing website
Then, one day I wanted to try using Elm to build my customized page, being accustomed to the ecosystem for some time. There was a static site generator for Elm, namely [elm-pages](https://elm-pages.com/) however I thought that it would be fun to create all my custom routes and display different front-end wizardry on my home page, just for fun and experience. I was able to build yet another Hello world page successfully with the Elm compiler this time on GitHub Pages. However, I didn't create more content to it. I was always trying to attend to other projects, freelancing, job applications, university applications etc..., thus the second version for my website has also failed (ahem... put on hold indefinitely).

### The (hopefully) complete case with Hugo and weird semantics for a good structured page
After many failed interviews, a successful university application, while freelancing and a global pandemic happening outside, a friend of mine suggested that I create a personal blog of sorts, after making his case for the importance of such a blog. Meanwhile, for a freelance gig I was looking at various performance and usability metrics of different flat-file CMS and static site generators, in which I was introduced to Jekyll and Hugo (FYI: Even though there are many awesome and simple CMS like [Bludit](http://bludit.com/), [Grav](https://getgrav.org/) and [Pico](picocms.org/), none of them had the flexibility and security of static site generators for me).

Thus came my enthusiasm to build myself a website/blog using a static site generator. But which CMS shall I pick for the job? After learning my lesson on how hard it is for me to design websites after many design failures (that I might talk about in other posts in the future), I decided that I shouldn't be trying to do custom things and go with the provided designs at first (and who says that I cannot customize them afterwards anyways?). Thus I decided on using a static site generator to build my blog eventually. I didn't want to pick [Jekyll](https://jekyllrb.com/), even though it has wide adoption and support from many organizations for two reasons:

1. It involves Ruby. For a side project I didn't want to learn a new language of which I don't have any interest in learning both from the aspects of personal development and/or professional use. The reasons why I don't want to get involved with Ruby were that it:
    * introduces a fairly different for many commonly known operations of other programming languages
    * doesn't introduce a new way of thinking about code (like ML-family languages, Python or Rust), is not performant (like C, Go, Rust, Nim), doesn't provide insights of a way of coding for a domain or ecosystem specific mentality (like C#, Javascript, Java or Swift)
2. The setup time takes more than expected. The website claims that the environment should be ready in seconds. Downloading all the dependencies and libraries (Ruby, Gems, bundles, Jekyll) took 4 minutes.

Luckily, I have also found out about [Hugo](https://gohugo.io/). The features that got me interested in it were:

* No need for a runtime environment or programming language specific environment, download one binary, and install any theme as submodule. I think I need to thank Google and their Go language for this mentality.
* Many features come baked in :hammer:
* I have seen the templating language in Helm Charts before thus the templating was much more intuitive for me :star_struck:

I have selected a theme that I liked, and I started writing content to my first ever blog :smiley:.

### Github Pages
Unfortunately, for Github Pages, if you are trying to build a page for yourself (in form of \<username\>.github.io), you can't use Github Pages to full extend. You only can have Github Page (pun intended :sweat_smile:), with the HTML content present at the root of the repository and all the code served from that root. There is no way to customize the serve path or branch (for project pages or organization pages you can specify a different branch or folder FYI.). I preferred to not to have the generated artifacts and source code for my page exist on the same location for maintainability, clear coding and easy deployment (considering Hugo and Jekyll both dump the generated content into a folder named `public`). Therefore, I have created another repository, moved all the code for my site there and update the page repository whenever I push new things to `master` of the code repo.

### Final Touch: Github Actions!

#### TODO
