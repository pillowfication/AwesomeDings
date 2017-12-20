# AwesomeDings

### Wingdings replacement for Font Awesome.

AwesomeDings is a recreation of the [Font Awesome](http://fontawesome.io/) package, but modified to focus on the Wingdings and Webdings icons you all know and love.

http://pf-n.co/github/awesome-dings

## Why?

  1. **Font Awesome relies on serving external font files.** This a _major_ security concern that web browsers take very seriously. In fact, IE has been known to [consistently trouble developers](https://github.com/FortAwesome/Font-Awesome/wiki/Troubleshooting#im-hosting-fonts-on-my-server-and-icons-dont-show-up) whenever external fonts are mentioned, just to make sure they really know what they are doing. Additionally, the external files lengthens loading time and just offers another point of failure in your project. Don’t make life harder on yourself.
  2. **Wingdings is natively supported on Windows and in IE.** No one has Font Awesome installed natively on their computer. However, [Windows is the most widely used operating system](https://en.wikipedia.org/wiki/Usage_share_of_operating_systems#Desktop_and_laptop_computers), and thus practically everyone has Wingdings/Webdings already installed! (Imagine developing something that magically works on IE). In fact, developers can browse the Wingdings/Webdings icons with the handy dandy [Character Map](https://en.wikipedia.org/wiki/Character_Map) application offline, without needing to constantly Google where the Font Awesome cheatsheet is.
  3. **Wingdings has been around for over 25 years.** This is proof of its stability and popularity, and the icons are all ones users and developers are very familiar with. Wingdings has been around since [1990](https://en.wikipedia.org/wiki/Wingdings), and Webdings since [1997](https://en.wikipedia.org/wiki/Webdings). Font Awesome on the other hand, was only conceived in 2012 and its still _constantly_ changing. It’s terrible to rely on packages which are shaky and become outdated in weeks (I mean Font Awesome has over [4000 issues open](https://github.com/FortAwesome/Font-Awesome/issues)).
  4. **Wingdings lives in the ASCII block of Unicode.** Font Awesome likes to give their icons "elite" Unicode points that no one else uses. This requires developers to use hard-to-read values like `\f152` or their human-readable but tiring-to-type and just-as-cryptic counterparts like `$fa-var-caret-square-o-right`. With Wingdings you can achieve the same effect by typing a single symbol `}`. (With minimal practice, you’ll learn that `}` is a little filled triangle pointing rightward in the Wingdings 3 font family). Wingdings will also fallback to these informative symbols, instead of the ☐☐☐☐☐☐☐☐☐☐ with Font Awesome. By not having to include these extra variable names, the AwesomeDings package ends up being almost 90% smaller than Font Awesome (and that’s not considering the font files!).

## Usage

Install the module:

```
npm install awesome-dings
```

Using [Webpack](https://webpack.github.io/), you can require the SCC, SCSS, or Less files:

```javascript
require('awesome-dings') // CSS
require('awesome-dings/scss/awesome-dings.scss') // SCSS
require('awesome-dings/less/awesome-dings.less') // Less
```

Or from another SCSS or Less file:

```scss
// SCSS
@import "~awesome-dings/scss/awesome-dings";
```

```less
// Less
@import "~awesome-dings/less/awesome-dings.less";
```

Or import the CSS file directly on your webpage:

```html
<link rel="stylesheet" type="text/css" href="/path/to/awesome-dings.css">
```

The features available in Font Awesome have been reproduced and improved for Wingdings.

 - Four font families: `wd-wingdings-1`, `wd-wingdings-2`, `wd-wingdings-3`, `wd-webdings`
 - Classes for sizing: `wd-lg`, `wd-2x`, `wd-3x`, `wd-4x`, `wd-5x`
 - Classes for animation: `wd-spin`, `wd-pulse`
 - [And many more!](https://fortawesome.github.io/Font-Awesome/examples/)

The only difference is that I did away with those [hundreds of icon classes](http://fontawesome.io/cheatsheet/) that only served to bloat your CSS. (You’ve probably only ever used like 10 of then anyway). Instead, just enter the ASCII character, or code, or whatever.

```html
<!-- These are all the same -->
<i class="wd-webdings">m</i>
<i class="wd-webdings">&#x6d;</i>
<i class="wd-webdings">&#109;</i>
```

Since these code points aren’t exactly safe to use for icons, you may run into some unexpected behavior like getting your Mona Lisa stolen. (Webding’s ART icon which looks like the Mona Lisa is mapped to the same character as `&shy;`, so web browsers won’t render the icon). To use the icons properly, add `0xf000` to the character code ([see this issue](https://bugzilla.mozilla.org/show_bug.cgi?id=399636#c24)).

```html
<!-- Use #xf0ad and not #xad -->
<i class="wd-webdings">&#xf0ad;</i>
```

## Examples

[You can play with the package here.](http://pillowfication.com/github/awesome-dings#playground)

```html
<!-- This renders a man in a suit and shades levitating over a black disc -->
<i class="wd-webdings wd-5x">m</i>

<!-- This renders spinning black scissors -->
<i class="wd-wingdings-2 wd-spin">&amp;</i>
```

To support more font families for even more icons, try the following (for SCSS):

```scss
@import "~awesome-dings/scss/awesome-dings";

$wd-extra-font-families: (
  segoe:  "Segoe MDL2 Assets",
  symbol: "Symbol"
);

@each $suffix, $font-family in $wd-extra-font-families {
  .#{$wd-css-prefix}-#{$suffix} {
    @include wd-icon($font-family);
  }
}
```

```html
<!-- webpage.html -->
<i class="wd-symbol">W</i>
```
