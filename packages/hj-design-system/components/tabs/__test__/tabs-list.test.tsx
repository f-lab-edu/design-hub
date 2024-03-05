import { fireEvent, render, screen } from "@testing-library/react";
import { TabsList } from "../tabs-list";
import { TabsProvider } from "../tabs-context";
import { describe, it, expect } from "vitest";

describe("TabsList", () => {
  it("children을 렌더링한다", () => {
    render(
      <TabsProvider>
        <TabsList>
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </TabsList>
      </TabsProvider>
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it('키보드 이벤트를 받아서 "ArrowRight" 이면 다음 탭으로 이동한다', () => {
    render(
      <TabsProvider>
        <TabsList>
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </TabsList>
      </TabsProvider>
    );

    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");
    const tab3 = screen.getByText("Tab 3");

    tab1.focus();
    fireEvent.keyDown(tab1, { key: "ArrowRight" });
    expect(tab2).toHaveFocus();

    fireEvent.keyDown(tab2, { key: "ArrowRight" });
    expect(tab3).toHaveFocus();
  });

  it('키보드 이벤트를 받아서 "ArrowLeft" 이면 이전 탭으로 이동한다', () => {
    render(
      <TabsProvider>
        <TabsList>
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </TabsList>
      </TabsProvider>
    );

    const tab1 = screen.getByText("Tab 1");
    const tab3 = screen.getByText("Tab 3");

    tab1.focus();
    fireEvent.keyDown(tab1, { key: "ArrowLeft" });
    expect(tab3).toHaveFocus();
  });

  it("비활성화된 탭은 키보드 이벤트를 받지 않는다", () => {
    render(
      <TabsProvider>
        <TabsList>
          <button>Tab 1</button>
          <button disabled>Tab 2</button>
          <button>Tab 3</button>
        </TabsList>
      </TabsProvider>
    );

    const tab1 = screen.getByText("Tab 1");
    const tab3 = screen.getByText("Tab 3");

    tab1.focus();
    fireEvent.keyDown(tab1, { key: "ArrowRight" });
    expect(tab3).toHaveFocus();
  });

  it('키보드 이벤트를 받아서 "ArrowDown" 이면 다음 탭으로 이동한다', () => {
    render(
      <TabsProvider>
        <TabsList>
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </TabsList>
      </TabsProvider>
    );

    const tab1 = screen.getByText("Tab 1");
    const tab2 = screen.getByText("Tab 2");
    const tab3 = screen.getByText("Tab 3");

    tab1.focus();
    fireEvent.keyDown(tab1, { key: "ArrowDown" });
    expect(tab2).toHaveFocus();

    fireEvent.keyDown(tab2, { key: "ArrowDown" });
    expect(tab3).toHaveFocus();
  });

  it('키보드 이벤트를 받아서 "ArrowUp" 이면 이전 탭으로 이동한다', () => {
    render(
      <TabsProvider>
        <TabsList>
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </TabsList>
      </TabsProvider>
    );

    const tab1 = screen.getByText("Tab 1");
    const tab3 = screen.getByText("Tab 3");

    tab1.focus();
    fireEvent.keyDown(tab1, { key: "ArrowUp" });
    expect(tab3).toHaveFocus();
  });

  it("TabsProvider로 감싸지 않으면 에러를 뱉는다", () => {
    expect(() => {
      render(<TabsList />);
    }).toThrowError();
  });
});
