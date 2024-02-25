import { render, screen } from "@testing-library/react";
import { MenuRoot } from "../menu-root";
import { describe, it, expect } from "vitest";

describe("MenuRoot", () => {
  it("children 을 렌더링한다", () => {
    render(
      <MenuRoot>
        <div>Child 1</div>
        <div>Child 2</div>
      </MenuRoot>
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });
});
