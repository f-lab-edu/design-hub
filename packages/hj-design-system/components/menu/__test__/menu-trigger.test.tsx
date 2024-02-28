import { render, screen } from "@testing-library/react";
import { Menu } from "../index";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { MenuContext } from "../menu-context";

describe("Menu.Trigger", () => {
  it("children 을 렌더링한다", () => {
    render(
      <Menu.Root>
        <Menu.Trigger>Menu Trigger</Menu.Trigger>
        <Menu.List>
          <Menu.Item>Item 1</Menu.Item>
        </Menu.List>
      </Menu.Root>
    );

    const menuTrigger = screen.getByText("Menu Trigger");
    expect(menuTrigger).toBeInTheDocument();
  });

  it("onClick 이벤트가 발생하면 사용자가 넘겨준 onClick 이벤트 핸들러와 toggle 함수가 실행된다.", () => {
    const toggle = vi.fn();

    const userCustomOnclick = vi.fn();

    render(
      <MenuContext.Provider value={{ toggle, isOpen: false }}>
        <Menu.Trigger onClick={userCustomOnclick}>Click Me</Menu.Trigger>
      </MenuContext.Provider>
    );
    userEvent.click(screen.getByText("Click Me"));
    expect(toggle).toHaveBeenCalledTimes(1);
    expect(userCustomOnclick).toHaveBeenCalledTimes(1);
  });

  it("ModalRoot 로 랩핑하지 않으면 오류가 발생한다", () => {
    expect(() => render(<Menu.Trigger>Click Me</Menu.Trigger>)).toThrowError();
  });
});
