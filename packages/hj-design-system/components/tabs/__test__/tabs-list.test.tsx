import { render, screen } from "@testing-library/react";
import { TabsList } from "../tabs-list";
import { TabsProvider } from "../tabs-context";
import { describe, it, expect } from "vitest";

describe("TabsList", () => {
  it("children을 렌더링한다", () => {
    render(
      <TabsProvider>
        <TabsList>
          <div>Tab 1</div>
          <div>Tab 2</div>
          <div>Tab 3</div>
        </TabsList>
      </TabsProvider>
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("TabsProvider로 감싸지 않으면 에러를 뱉는다", () => {
    expect(() => {
      render(<TabsList />);
    }).toThrowError();
  });

  // Add more test cases as needed
});
