import { act, renderHook } from "@testing-library/react-hooks";
import { cleanup } from "@testing-library/react";
import useStore from "..";

describe("useStore", () => {
  afterEach(() => {
    // You can chose to set the store's state to a default value here.
    jest.resetAllMocks();
    cleanup();
  });

  /**
   * @jest-environment jsdom
   */
  it("The increment function correctly increment the counter variable.", () => {
    const { result } = renderHook(() => useStore((state) => state));
    expect(result.current.counter).toEqual(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toEqual(1);
  });
});
