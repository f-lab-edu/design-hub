import { render, screen } from "@testing-library/react";
import { TabsTitle } from "../tabs-title";
import { describe, it, expect } from "vitest";

describe("TabsTitle", () => {
  it("children 을 렌더링한다", () => {
    render(<TabsTitle>Tab Title</TabsTitle>);
    expect(screen.getByText("Tab Title")).toBeInTheDocument();
  });

  it("as prop 으로 전달된 element type 을 렌더링한다", () => {
    render(
      <TabsTitle as="a" href="/">
        Tab Title
      </TabsTitle>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
