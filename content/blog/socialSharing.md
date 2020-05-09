---
title: Implementing social share buttons
date: 2020-05-09
type: posts
---

### Background 
I was creating social share buttons for Facebook, Twitter, and Whatsapp some time ago. However, these social share buttons weren't only for directly sharing a page's link, but they should also render a custom dynamic title, description, and image based on what the user has entered into the website beforehand. I started reading the documentation of [Facebook](https://developers.facebook.com/docs/sharing/web), [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview) and [Whatsapp](https://faq.whatsapp.com/en/android/26000030/).

During the implementation phase, I have experienced some details, bits, and quirks of different sharing methods that I would like to share.

### Facebook
Facebook link sharing is relatively straightforward, and works as documented in their documentation. The basic method is to call their JS API with the URL that you want to be shared. The title, image, and description of the share link are determined by the page's [OpenGraph](https://ogp.me/) meta tags, that should exist on the header (the details on how to implement each is available on the API website).

The fields of interest to me on OpenGraph were:
```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="Page Image URL" />
``` 

To provide custom title and description, you have to build a mechanism that can generate those for you, possibly through URL or query parameters. The one point that stands out is that Facebook crawler doesn't execute Javascript, thus populating the `meta` tags through Javascript code doesn't work. They have provided a debugger for validating to test different URLs [here](https://developers.facebook.com/tools/debug/). Using this tool I was able to see how Facebook would load the share URLs.

There are some limits that Facebook imposes on content, such as title and description length limit and image size limit. However Facebook seems to be very permissive, it allows large images (1280x768), and it basically crops long titles and descriptions.

### Twitter
Twitter provides tweeting via opening a link to a URL. On the URL you can set the tweet text, links, and hashtags that you would like the users to share.

Thus the HTML on the link looks something like this:
```html
<a href="https://twitter.com/intent/tweet?text=URL%20Encoded%20Text&url=https%3A%2F%2Fwww.ozyinc.com&hashtags=hashtag1%2Chashtag2" target="_blank">Tweet</a>
```
You have to be careful to explicitly avoid trying to set URLs or hashtags on the tweet text, since they automatically remove links and hashtags from the raw text you provide through the API. The hashtags need to be comma separated and all URL parameters need to be URL encoded for the link to function correctly.

Twitter has a different customization mechanism than Facebook, cards. There are different types of cards that one can have on a web page and the details are available on the [twitter cards documentation](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started). 

However, for my case I needed to set the title, image and description of the page, thus I chose to use the `summary_large_image` card, which one would implement like:
```html
<meta name="charset" content="UTF-8">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="Page Image URL">
```
in the `head` tag. Don't forget to add the `charset` header or the card might not render correctly since the encoding would not be set.

To verify your card is working properly you may use the [Card Validator](https://cards-dev.twitter.com/validator) by Twitter.

One final problem that I had with Twitter was that when I used the card validator, I got an error that didn't provide any context on what the problem was. When I searched the problem on Google, it has shown that Twitterbot would fail to parse some pages that are larger than a usual size and/or has an invalid or custom HTML markup.

As a workaround, I have replaced the backend code to render a blank page with only necessary `meta` tags for Twitter when the `User-Agent` is `Twitterbot` (which is the UserAgent Twitter uses during crawling of web content). With this fix, the cards were finally displayed and everything worked well.

### Whatsapp

When I looked at the documentation of Whatsapp, the only official source of information I had was a [FAQ link](https://faq.whatsapp.com/en/android/26000030/) describing how to create links that would open Whatsapp Share. Sneak peek, the mechanism is similar to Twitter and looks something like this:

```html
<a href="https://wa.me/?text=urlencodedmsg" target="_blank">Send through Whatsapp</a>
```
One should note that that URL only works if the user has a Whatsapp Client installed (like Desktop or Mobile App) and it doesn't work through Whatsapp Web.

Now, there is no way to directly tell Whatsapp what title and description should be, but if you use Whatsapp you know that the links provided in messages render their title, description and image as a thumbnail on top of the sent message. Apparently, Whatsapp also uses the OpenGraph API to determine the display content to be shown on the message.

When I first implemented the logic for the URL the same as Facebook, the image didn't render, even though the title and description were correct and there were no errors on Facebook Share Debugger. Upon searching for problems, I have found [this Stackoverflow answer](https://stackoverflow.com/a/43154489), from which I learned that the best way to get images rendered is to have them less than 300Kb of size and make them square. 

After that implementation, it still wasn't visible. Checking other answers, I have also learned that having HTML body elements (or something that the Whatsapp Crawler might not be expecting) before the `meta` tags, having relative URLs and cached image URLs can be others reasons for why Whatsapp images don't render.

After making sure that all of the problems given in the answer was verified, the image still wasn't visible and then on a Stackoverflow comment, I suddenly saw my solution. Remember when I mentioned passing query parameters for custom images? Apparently Whatsapp doesn't add query parameters of the URLs so the image was not set when Whatsapp is trying to crawl the website.

With a huge relief I have rewired the mechanism of dynamic image generation to work with URL parameters instead of query parameters and everything was working.

### Conclusion
With some debugging effort on fixing weird bugs that exist on both social media crawlers and the shared page, I was able to implement sharing buttons for Facebook, Twitter and Whatsapp. I tried to document the officially documented steps that I took, the problems that I have encountered, and the solutions to those that I have found in this article.

I hope you enjoyed reading this article and maybe it is helpful to someone that is trying to build sharing buttons.

Have a nice day! 
