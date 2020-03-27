import { renderHook, act } from "@testing-library/react-hooks";
import useToggle from "../source/index";

test("Default", () => {
  const { result } = renderHook(() => useToggle());

  expect(result.current[0]).toBe(false);
  expect(typeof result.current[1]).toBe("function");
});

test("Toggle", () => {
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
