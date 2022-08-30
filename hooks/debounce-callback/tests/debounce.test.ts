import { act, renderHook } from "@testing-library/react-hooks";
import useDebounceCallback from "../source/index";

jest.useFakeTimers();

describe.only("use debounce callback", () => {
  let func: jest.Mock;

  it("should execute just once", () => {
    func = jest.fn();
    const { result } = renderHook(() => useDebounceCallback(func, 1000));

    for (let i = 0; i < 100; i++) {
      act(() => {
        result.current();
      });
    }

    // Fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
