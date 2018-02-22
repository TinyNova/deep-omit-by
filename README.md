# deep-omit-by

Deletes keys from the object that match a condition without side effects.

## Installation

```
npm instal --save-dev deep-omit-by
```

## Usage

```js
import deepOmitBy from 'deep-omit-by';

recursiveOmitBy(
  {
    text: 'hello',
    foo: {
      node1: true,
      node2: false,
      list: [
        { more: 'hello', foo: 1 }
      ],
      string: 'hello',
      value: 1,
    },
  },
  ({ parent, value, key, path, deep }) => key === 'value' || value === 'hello'
);
// returns new object without modifying original
// {
//   foo: {
//     node1: true,
//     node2: false,
//     list: [
//       { foo: 1 }
//     ],
//   },
// }
```

## License

ISC

Credit to alexgorbatchev