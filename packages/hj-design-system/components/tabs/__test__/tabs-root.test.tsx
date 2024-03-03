import { render, screen } from "@testing-library/react";
import { TabsRoot } from "../tabs-root";
import { describe, it, expect } from "vitest";

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
});
