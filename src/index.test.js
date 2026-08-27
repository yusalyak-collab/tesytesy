'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./index.js');

test('greet returns a greeting string', () => {
  assert.equal(greet('World'), 'Hello, World!');
});

test('greet uses the provided name', () => {
  assert.equal(greet('Alice'), 'Hello, Alice!');
});
