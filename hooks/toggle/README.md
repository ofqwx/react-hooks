# useToggle

Simple boolean toggle.

## Installation

```
yarn add @ofqwx/useToggle
```

## Example

```jsx
import useToggle from '@ofqwx/useToggle'

function YourComponent() {
  const [toggled, toggle] = useToggle();

  return <AnotherComponent display={toggled} onToggle={toggle} />
}
```

you can also call it with optional initialiser value (default is false):

```
const [toggled, toggle] = useToggle(true);
```

## Tests

```
yarn install
yarn test
```