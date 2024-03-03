import { render, screen } from "@testing-library/react";
import { Tabs } from "../index";
import { describe, it, expect } from "vitest";

describe("TabsPanels", () => {
  it("children 을 렌더링한다", () => {
    render(
      <Tabs.Root>
        <Tabs.Panels>
          <div>panel 1</div>
          <div>panel 2</div>
          <div>panel 3</div>
        </Tabs.Panels>
      </Tabs.Root>
    );

    expect(screen.getByText("panel 1")).toBeInTheDocument();
    expect(screen.getByText("panel 2")).toBeInTheDocument();
    expect(screen.getByText("panel 3")).toBeInTheDocument();
  });

  it("Tabs.Root 로 감싸지 않으면 오류를 발생시킨다", () => {
    expect(() => render(<Tabs.Panels />)).toThrowError();
  });
});
