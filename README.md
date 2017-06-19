# filter-function

[![Build Status](https://travis-ci.org/leahciMic/filter-function.svg?branch=master)](https://travis-ci.org/leahciMic/filter-function) [![codecov](https://codecov.io/gh/leahciMic/filter-function/branch/master/graph/badge.svg)](https://codecov.io/gh/leahciMic/filter-function)

> Create a filter function that can recursively match against objects, and use regex

## Install

```sh
yarn add filter-function
```

## Usage

```js
import filterFunction from 'filter-function';

const filterFooBar = filterFunction({ foo: 'bar' });
const items = [
  { foo: 'bar' },
  { foo: 'baz' },
  { foo: 'qux' },
];

console.log(items.filter(filterFooBar)); // [{ foo: 'bar' }]
```

## API details

filter-function only checks for the properties listed in the checking object,
extraneous properties on the target object are ignored.

### Regular expressions

filter-function also supports regular expressions, use as such:

```js
const filterFooBar = filterFunction({ foo: /bar/ });
```

### Nested objects

filter-function also supports nested objects, use as such:

```js
const filterFunction = filterFunction({ foo: { bar: 'baz' } });
```

## Contribute

PRs accepted.

## License

ISC © Michael Leaney
