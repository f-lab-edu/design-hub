import { renderHook, act } from "@testing-library/react-hooks";
import {describe, it, expect} from 'vitest'
import { useToggle } from "../use-toggle";

describe("useMenu", () => {
    it("isOpen 의 초기값은 false 이다", () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current.isOpen).toBe(false);
    });

    it("toggle 함수를 호출하면 isOpen 의 값이 이전과 다른 boolean 값으로 변경되어야 한다", () => {
        const { result } = renderHook(() => useToggle());

        act(() => {
            result.current.toggle();
        });

        expect(result.current.isOpen).toBe(true);

        act(() => {
            result.current.toggle();
        });

        expect(result.current.isOpen).toBe(false);
    });
});
