# useToggle

Simple hook that return a boolean value and a function to toggle it.

## Installation

```
yarn add @ofqwx/use-toggle
```

## Example

```jsx
import useToggle from "@ofqwx/use-toggle";
// or from @ofqwx/react-hooks:
// import {useToggle} from "@ofqwx/react-hooks

function YourComponent() {
  const [toggled, toggle] = useToggle();

  return <AnotherComponent display={toggled} onToggle={toggle} />;
}
```

you can also call it with optional initialiser value (default is false):

```js
const [toggled, toggle] = useToggle(true);
```

## Tests

```
yarn install
yarn test
```
