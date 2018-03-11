# query-parent-element

Get aim parent element

[![npm: query-parent-element](https://img.shields.io/npm/v/query-parent-element.svg)](https://www.npmjs.com/package/query-parent-element)
[![CircleCI](https://circleci.com/gh/nju33/query-parent-selector.svg?style=svg&circle-token=61c6047290b663527d778fd78e6ad3a0de5cd857)](https://circleci.com/gh/nju33/query-parent-selector)
[![Coverage Status](https://coveralls.io/repos/github/nju33/query-parent-selector/badge.svg?branch=master)](https://coveralls.io/github/nju33/query-parent-selector?branch=master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![license: mit](https://img.shields.io/packagist/l/doctrine/orm.svg)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

## Install or Download

```sh
yarn add [-D] query-parent-element
```

## Example

As it is this kind of HTML

```html
<div id="parent">
  <div>
    <div>
      <div id="child">
      </div>
    </div>
  </div>
</div>
```

If on the browser

```html
<script src="//unpkg.com/query-parent-element/dist/query-parent-element.js"></script>
```


```ts
import queryParentElement from 'query-parent-element';

// (child: string | HTMLElement, parent: string | HTMLElement) => HTMLElement | undefined;
const result = queryParentElement(
  document.getElementById('child') /* or '#child' */,
  document.getElementById('parent') /* or '#parent' */
);

if (result !== undefined) {
  console.log(result); // <div id="parent"/>
}
```
