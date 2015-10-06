# postcss-line-height-px-to-unitless

[![npm version](http://img.shields.io/npm/v/postcss-line-height-px-to-unitless.svg?style=flat-square)](https://github.com/makotot/postcss-line-height-px-to-unitless)
[![travis](http://img.shields.io/travis/makotot/postcss-line-height-px-to-unitless.svg?style=flat-square)](https://github.com/makotot/postcss-line-height-px-to-unitless)
[![dependencies](http://img.shields.io/david/makotot/postcss-line-height-px-to-unitless.svg?style=flat-square)](https://github.com/makotot/postcss-line-height-px-to-unitless)
[![devDependencies](http://img.shields.io/david/dev/makotot/postcss-line-height-px-to-unitless.svg?style=flat-square)](https://github.com/makotot/postcss-line-height-px-to-unitless)
[![License](http://img.shields.io/npm/l/postcss-line-height-px-to-unitless.svg?style=flat-square)](https://github.com/makotot/postcss-line-height-px-to-unitless)

> [Postcss](https://github.com/postcss/postcss/) plugin to convert a line-height value with px to a unitless value.


```css
// before

a {
  font-size: 32px;
  line-height: 17px;
}



// after

a {
  font-size: 32px;
  line-height: 1.88;
}

```

## Install

```sh
$ npm i postcss-line-height-px-to-unitless
```

## Usage

```js
postcss([
    require('postcss-line-height-px-to-unitless')(),
    ...
])
```

## License

MIT

