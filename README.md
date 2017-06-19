# filter-function

[![Build Status](https://travis-ci.org/leahciMic/filter-function.svg?branch=master)](https://travis-ci.org/leahciMic/filter-function)

> Create a filter function that can recursively match against objects, and use regex

## Install

```
yarn add filter-function
```

## Usage

```
import filterFunction from 'filter-function';

const filterFooBar = filterFunction({ foo: 'bar' });
const items = [
  { foo: 'bar' },
  { foo: 'baz' },
  { foo: 'qux' },
];

console.log(items.filter(filterFooBar)); // [{ foo: 'bar' }]
```

## Contribute

PRs accepted.

## License

ISC © Michael Leaney
