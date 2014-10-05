basic.css
=========
Basic styling for any webpage

[![Version][version-img]][version-url] [![License][license-img]][license-url] [![Dependency Status][gemnasium-img]][gemnasium-url]

## installation

**Via Bower - Recommended**

1.  Run `bower install basic.css`
2.  Include into your site either with sass (via `@import "bower_components/basic.css/build/export.scss";`) or directly linked in in your html document (`<link rel="stylesheet" type="text/css" href="bower_components/basic.css/dist/basic.css" />` or with normalize.css `<link rel="stylesheet" type="text/css" href="bower_components/basic.css/dist/basic.norm.css" />`)

**Manually**

1.  Put `basic.css` (or with normalize.css `basic.norm.css`) from /dist/ anywhere in your project directory (i.e. `css/basic.css`)
2.  Add the link tag to your html document's head (`<link rel="stylesheet" type="text/css" href="css/basic.css" />`)

## Usage
Once installed, everything works without any configuration needed.

Each module of basic.css has options (listed below). To use an option just add `data-basic=""` to the target element and add your options inside the quotes.

**Core**

* *font* - sets the font - used on any tag
  * *font serif* - uses the serif font stack
  * *font sans-serif* - uses the sans-serif font stack
  * *font mono* - uses the fixed-width/mono-space font stack
* *attribution* - shows a message at the bottom of the page to give attribution to basic.css

[version-url]: https://github.com/myhonor16/basic.css/releases
[version-img]: http://img.shields.io/badge/Version-1.0.0-yellow.svg
[license-url]: https://github.com/myhonor16/basic.css/blob/master/LICENSE
[license-img]: http://img.shields.io/badge/License-MIT-red.svg
[gemnasium-url]: https://gemnasium.com/myhonor16/basic.css
[gemnasium-img]: https://gemnasium.com/myhonor16/basic.css.svg