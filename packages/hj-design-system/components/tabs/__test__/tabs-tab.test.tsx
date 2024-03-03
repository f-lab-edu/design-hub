import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Tabs } from "..";
import userEvent from "@testing-library/user-event";

describe("TabsTab", () => {
  it("children을 렌더링한다.", () => {
    render(
      <Tabs.Root>
        <Tabs.Tab index={0}>Home</Tabs.Tab>
      </Tabs.Root>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("as prop 에 전달받은 element type 으로 렌더링한다", () => {
    render(
      <Tabs.Root>
        <Tabs.Tab as="a" index={0} href="/">
          Home
        </Tabs.Tab>
      </Tabs.Root>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("클릭 이벤트가 발생했을때 전달받은 onChangeCurrent 함수와 onClick 함수가 있으면 호출한다", () => {
    const handleChange = vi.fn();
    const onClick = vi.fn();

    render(
      <Tabs.Root>
        <Tabs.Tab index={0} handleChange={handleChange} onClick={onClick}>
          Home
        </Tabs.Tab>
      </Tabs.Root>
    );

    const tab = screen.getByText("Home");
    userEvent.click(tab);

    expect(handleChange).toHaveBeenCalledWith(0);
    expect(onClick).toHaveBeenCalled();
  });

  it("Tabs.Root 컴포넌트로 감싸지 않으면 에러를 뱉는다", () => {
    expect(() => {
      render(<Tabs.Tab index={0}>Home</Tabs.Tab>);
    }).toThrowError();
  });
});
