# Ad Analysis for Facebook (U.S. English)

---

**Ad Analysis for Facebook is temporarily disabled. Facebook has blocked this extension, so it will no longer show you how you're targeted by advertisers. [Learn more](https://blog.mozilla.org/blog/2019/01/31/mozilla-raises-concerns-over-facebooks-lack-of-transparency/)**

---

Get the extension from [Add-ons for Firefox (en-US)](https://addons.mozilla.org/en-US/firefox/addon/ad-analysis-for-facebook/).

## How Facebook Helps Advertisers Target You

If you use Facebook, it probably comes as no surprise that Facebook collects a lot of information about you. This includes information you’ve shared about yourself as well as information about your activity on Facebook and other websites — things like check-ins, searches, and status updates.

What you may not know is that even when you haven’t shared interests, Facebook makes guesses about your views and preferences based on your activity. This is also used to target you, but it’s not as easy for you to see this. When you use Ad Analysis for Facebook, you can see what Facebook knows about you and how that affects the advertising you see. You can also compare a wide range of targets shared as a public data set by thousands of other Facebook users.

## Peek Outside Your Filter Bubble

Seeing how and why you’re targeted for advertising is one way to examine how Facebook shapes the content you’re likely to see and how that might influence your opinions and beliefs. But what about the advertising you don’t see?

Facebook maintains its own Ad Archive, which offers Facebook users a simple keyword search tool to view ads related to politics or issues of national importance.

The Ad Archive is useful if you know what you are looking for, but may not help you if you are trying to answer questions like “Who is spending the most money on political ads in my state?” or “If I am a Millennial, do I see different ads than Baby Boomers?” With Ad Analysis for Facebook, you can view top advertisers; filter advertisers by state, gender, and age; and link to advertisers’ ads in the Facebook Ad Archive.

## Credits

This extension is one of several tools developed by Firefox Research to help you understand how websites use your personal information and how that affects what you see — and what you don't — online.

This extension uses the public data sets collected by ProPublica and New York University.

The [Political Ad Collector](http://projects.propublica.org/facebook-ads/), created by independent news organization ProPublica, gathers targeted political advertising on Facebook into a database of micro-targeted political ads.

The [Online Political Ads Transparency Project](https://engineering.nyu.edu/online-political-ads-transparency-project/) is a collaboration by NYU Tandon doctoral student Laura Edelson, NYU Shanghai visiting undergraduate student Shikhar Sakhuja, and Damon McCoy, Assistant Professor of Computer Science and Engineering.

# Development Instructions 

## Load the Add-on in Firefox

If you have `npm` and the development environment set up on your machine (see below), you can load the extension by running

```
npm start
```

Otherwise, you also load the extension in Firefox via the Developer Tools. Start Firefox. Enter `about:debugging` in the address bar. Load the Add-on as a temporary extension by selecting `ad_analysis_for_facebook_u.s._english_-_disabled-1.1.0.zip` (or the desired version of the build) from folder `web-ext-artifacts`.

## Set up a development environment

To install all required libraries, run:
```
npm install
```

To build the extension, run:
```
npm run build
```

To start the continuous build environment, run:
```
npm run watch
```

## Release on AMO

To prepare all files needed for publishing the extension on [AMO](https://addons.mozilla.org), run:
```
npm run amo
```
