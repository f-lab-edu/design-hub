import { describe, it, expect } from "vitest";
import { Menu } from "../index";
import { screen, render, fireEvent } from "@testing-library/react";

describe("MenuList", () => {
  it("Menu.Trigger 요소에 클릭 이벤트가 발생하면 children 을 렌더링한다", () => {
    render(
      <Menu.Root>
        <Menu.Trigger>click here</Menu.Trigger>
        <Menu.List>
          <li>Item 1</li>
          <li>Item 2</li>
        </Menu.List>
      </Menu.Root>
    );

    const menuTrigger = screen.getByText("click here");
    fireEvent.click(menuTrigger);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("Menu.Trigger 요소에 다시 클릭 이벤트가 발생하면 children 을 숨긴다", () => {
    render(
      <Menu.Root>
        <Menu.Trigger>click here</Menu.Trigger>
        <Menu.List>
          <li>Item 1</li>
          <li>Item 2</li>
        </Menu.List>
      </Menu.Root>
    );

    const menuTrigger = screen.getByText("click here");

    fireEvent.click(menuTrigger);
    fireEvent.click(menuTrigger);

    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Item 2")).not.toBeInTheDocument();
  });
});
