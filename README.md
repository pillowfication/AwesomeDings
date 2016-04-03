# AwesomeDings
### Wingdings replacement for Font Awesome

AwesomeDings is a recreation of the [Font Awesome](http://fontawesome.io/) package, but modified to focus on the Wingdings and Webdings icons you all know and love.

## Why?

 1. **Font Awesome relies on serving external font files.** This a _major_ security concern that web browsers take very seriously. In fact, IE has been known to [consistently trouble developers](https://github.com/FortAwesome/Font-Awesome/wiki/Troubleshooting#im-hosting-fonts-on-my-server-and-icons-dont-show-up) whenever external fonts are mentioned, just to make sure they really know what they are doing. Additionally, the external files lengthens loading time and just offers another point of failure in your project. Don't make life harder on yourself.
 2. **Wingdings is natively supported on Windows and in IE.** No one has Font Awesome installed natively on their computer. However, [Windows is the most widely used operating system](https://en.wikipedia.org/wiki/Usage_share_of_operating_systems#Desktop_and_laptop_computers), and thus practically everyone has Wingdings/Webdings already installed! In fact, developers can browse the Wingdings/Webdings icons with the handy dandy [Character Map](https://en.wikipedia.org/wiki/Character_Map) application offline, without needing to constantly Google where the Font Awesome cheatsheet is.
 3. **Wingdings has been around for nearly 20 years.** This is proof of its stability and popularity, and the icons are all ones users and developers are very familiar with. Wingdings has been around since [1990](https://en.wikipedia.org/wiki/Wingdings), and Webdings since [1997](https://en.wikipedia.org/wiki/Webdings). Font Awesome on the other hand, was only conceived in 2012 and its still _constantly_ changing. It's terrible to rely on packages which are shaky and become outdated in weeks (I mean Font Awesome has over [3000 issues open](https://github.com/FortAwesome/Font-Awesome/issues)).
 4. **Wingdings lives in the ASCII block of Unicode.** Font Awesome likes to give their icons "elite" Unicode points that no one else uses. This requires developers to use hard-to-read values like `\f152` or their human-readable but tiring-to-type and just-as-cryptic counterparts like `$fa-var-caret-square-o-right`. With Wingdings you can achieve the same effect by typing a single symbol `}`. (With minimal practice, you'll learn that `}` is a little filled triangle pointing rightward in the Wingdings 3 font family). Wingdings will also fallback to these informative symbols, instead of the ☐☐☐☐☐☐☐☐☐☐ with Font Awesome. By not having to include these extra variable names, the AwesomeDings package ends up being almost 90% smaller than Font Awesome (and that's not considering the font files!).
 5. **Wingdings is Wingdings.** Font Awesome is a terribly dull and uncreative name for a font. Plus it's a mouthful to say. The Wingdings are just sounds so much more smarter.

## Usage

Install the module

```
npm install awesome-dings
```

Using [Webpack](https://webpack.github.io/), you can require the SCSS files or CSS files.

```javascript
require('awesome-dings'); // SCSS
require('awesome-dings/css/awesome-dings.css'); // CSS
```

Or import the file directly on your webpage.

```html
<link rel="stylesheet" type="text/css" href="awesome-dings.css">
```

The features available in Font Awesome have been reproduced and improved for Wingdings.

 - Four font families: `wd-wingdings-1`, `wd-wingdings-2`, `wd-wingdings-3`, `wd-webdings`
 - Utility classes for sizing: `wd-lg`, `wd-2x`, `wd-3x`, `wd-4x`, `wd-5x`
 - Utility classes for animation: `wd-spin`, `wd-pulse`
 - [And many more!](https://fortawesome.github.io/Font-Awesome/examples/)

Example:

```html
<!-- This renders a man in a suit and shades levitating over a black disc -->
<i class="wd-webdings wd-5x">m</i>

<!-- This renders spinning black scissors -->
<i class="wd-wingdings-2 wd-spin">&amp;</i>
```

To support more font families for even more icons, try the following (for SCSS):

```javascript
// webpack.js
// Note: Require the custom styles before AwesomeDings
require('./my-styles.scss');
require('awesome-dings');
```

```scss
// my-styles.scss
@import "~awesome-dings/scss/variables";
@import "~awesome-dings/scss/mixins";

$wd-additional-fonts: (
  marlett: "Marlett",
  symbol:  "Symbol"
);

@each $suffix, $font-family in $wd-additional-fonts {
  .#{$wd-css-prefix}-#{$suffix} {
    @extend %wd-base-icon;
    font-family: $font-family;
  }
}
```

```html
<!-- webpage.html -->
<i class="wd-symbol">W</i>
```
