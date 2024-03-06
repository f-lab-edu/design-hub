import { render, screen } from "@testing-library/react";
import { TabsRoot } from "../tabs-root";
import { describe, it, expect, vi } from "vitest";
import { FC, useContext } from "react";
import { TabsContext } from "../tabs-context";

describe("TabsRoot", () => {
  it("children 을 렌더링한다", () => {
    render(
      <TabsRoot>
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
      </TabsRoot>
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("current, onCurrentChange, direction, size 등의 props를 컨텍스트 value 로 전달할 수 있다", () => {
    const TestComponent: FC = () => {
      const current = useContext(TabsContext)?.current;
      expect(current).toBe(1);

      const direction = useContext(TabsContext)?.direction;
      expect(direction).toBe("vertical");

      const size = useContext(TabsContext)?.size;
      expect(size).toBe("sm");

      return null;
    };

    const onCurrentChange = vi.fn();

    render(
      <TabsRoot current={1} direction="vertical" size="sm">
        <TestComponent />
      </TabsRoot>
    );

    expect(onCurrentChange).not.toHaveBeenCalled();
  });
});
