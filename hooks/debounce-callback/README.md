# useDebounceCallback

Simple hook to debounce a callback function for a specific amount of time.

## Installation

```
yarn add @ofqwx/use-debounce-callback
```

## Example

```jsx
import useDebounceCallback from "@ofqwx/use-debounce-callback";
// or from @ofqwx/react-hooks:
// import { useDebounceCallback } from "@ofqwx/react-hooks

function InputField() {
  const [value, setValue] = useState('');
  
  function onChange(e) {
    setValue(e.target.value);
  }

  // function onChange will be executed only after debouncedOnChange is not called for 400ms
  const debouncedOnChange = useDebounceCallback(onChange, 400);

  return <input onChange={debouncedOnChange} />;
}
```

## Tests

```
yarn install
yarn test
```
