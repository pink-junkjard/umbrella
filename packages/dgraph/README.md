# @thi.ng/dgraph

[![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/dgraph.svg)](https://www.npmjs.com/package/@thi.ng/dgraph)

## About

Type-agnostic directed acyclic graph (DAG), using
[@thi.ng/associative](https://github.com/thi-ng/umbrella/tree/master/packages/associative)
maps & sets as backend.

### Features

- cycle detection
- accessors for direct & transitive dependencies / dependents
- topological sorting
- iterable

## Installation

```
yarn add @thi.ng/dgraph
```

## Usage examples

```typescript
import { DGraph } from "@thi.ng/dgraph";

g = new DGraph();
g.addDependency([1, 2], [10, 20]);
g.addDependency([3, 4], [30, 40]);
g.addDependency([1, 2], [3, 4]);

g.sort()
// [[30, 40], [3, 4], [10, 20], [1, 2]]
```

## Authors

- Karsten Schmidt

## License

&copy; 2018 Karsten Schmidt // Apache Software License 2.0