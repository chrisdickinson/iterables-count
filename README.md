# @iterables/count

Return an infinite iterator counting forward from a number at a defined step.

```javascript
const count = require('@iterables/count')

const [one, two] = count(10)

console.log(one, two) // 10 11

const [un, deux, trois] = count(0, 20)

console.log(un, deux, trois) // 0 20 40
```

## Installation

```
$ npm install --save @iterables/count
```

## API

### `count(from = 0, step = 1) -> Iterator<Number>`

* `from`: A number at which to begin the iterator. Defaults to `0`.
* `step`: A number to advance the iterator. Defaults to `1`.

## License

MIT
