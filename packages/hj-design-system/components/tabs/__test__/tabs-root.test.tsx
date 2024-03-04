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

  it("current, onChangeCurrent, direction, size 등의 props를 컨텍스트 value 로 전달할 수 있다", () => {
    const TestComponent: FC = () => {
      const context = useContext(TabsContext);
      expect(context).toMatchObject({ onChangeCurrent, current: 1 });

      return null;
    };

    const onChangeCurrent = vi.fn();

    render(
      <TabsRoot
        current={1}
        onChangeCurrent={onChangeCurrent}
        direction="vertical"
        size="sm"
      >
        <TestComponent />
      </TabsRoot>
    );

    expect(onChangeCurrent).not.toHaveBeenCalled();
  });
});
