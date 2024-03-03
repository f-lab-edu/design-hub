import { render, screen } from "@testing-library/react";
import { Tabs } from "../index";
import { describe, it, expect } from "vitest";

describe("TabsPanel", () => {
  it("current prop 에 전달된 index 와 일치하는 panel 요소를 렌더링한다", () => {
    render(
      <Tabs.Root current={2}>
        <Tabs.Panels>
          <Tabs.Panel>panel 1</Tabs.Panel>
          <Tabs.Panel>panel 2</Tabs.Panel>
          <Tabs.Panel>panel 3</Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Root>
    );

    expect(screen.queryByText("panel 1")).not.toBeInTheDocument();
    expect(screen.queryByText("panel 2")).not.toBeInTheDocument();
    expect(screen.getByText("panel 3")).toBeInTheDocument();
  });

  it("throws an error when rendered outside of Tabs.Root", () => {
    expect(() => render(<Tabs.Panel />)).toThrow(
      "Tabs.Panel must be rendered within a Tabs.Root."
    );
  });
});
