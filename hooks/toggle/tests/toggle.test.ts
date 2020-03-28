import { renderHook, act } from "@testing-library/react-hooks";
import useToggle from "../source/index";

test("Default value should be false", () => {
  const { result } = renderHook(() => useToggle());

  expect(result.current[0]).toBe(false);
  expect(typeof result.current[1]).toBe("function");
});

test("Default value can be initialized in true", () => {
  const { result } = renderHook(() => useToggle(true));

  expect(result.current[0]).toBe(true);
  expect(typeof result.current[1]).toBe("function");
});

test("Default value can be initialized in false", () => {
  const { result } = renderHook(() => useToggle(false));

  expect(result.current[0]).toBe(false);
  expect(typeof result.current[1]).toBe("function");
});

test("Toggle a default value", () => {
  const { result } = renderHook(() => useToggle());
  // [toggled, toggle] = result.current

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toBe(true);

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toBe(false);
});
