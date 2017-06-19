import createMatchFn from './createMatchFn';

const testObj = {
  foo: 'bar',
  baz: {
    qux: 1,
  },
};

test('matches strings', () => {
  expect(createMatchFn({ foo: 'bar' })(testObj)).toBe(true);
  expect(createMatchFn({ foo: 'bars' })(testObj)).toBe(false);
});

test('missing properties are not ok', () => {
  expect(createMatchFn({ foo: 'bar', bar: 1 })(testObj)).toBe(false);
});

test('regular expressions work', () => {
  expect(createMatchFn({ foo: /r$/ })(testObj)).toBe(true);
  expect(createMatchFn({ foo: /a$/ })(testObj)).toBe(false);
});

test('nested objects should work', () => {
  expect(createMatchFn({ baz: { qux: 1 } })(testObj)).toBe(true);
  expect(() => createMatchFn({ foo: { bar: 'baz' } })(testObj)).toThrow(
    'cannot use an object to test against a non object',
  );
});

test('should be strict equality', () => {
  expect(createMatchFn({ baz: { qux: '1' } })(testObj)).toBe(false);
});

test('regexp should fail when testing against non-strings', () => {
  expect(() => createMatchFn({ baz: { qux: /a/ } })(testObj)).toThrow(
    "RegExp's can only be used to match against strings",
  );
});
