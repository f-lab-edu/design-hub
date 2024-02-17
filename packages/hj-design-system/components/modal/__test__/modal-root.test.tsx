import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ModalRoot } from "../modal-root";

describe("ModalRoot", () => {
  it("isOpen 이 true 이면 children 을 렌더링한다", () => {
    render(<ModalRoot isOpen={true}>Modal Content</ModalRoot>);
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
  });

  it("isOpen 이 false 이면 children 을 렌더링하지 않는다", () => {
    render(<ModalRoot isOpen={false}>Modal Content</ModalRoot>);
    const modalElement = screen.queryByRole("dialog");
    expect(modalElement).not.toBeInTheDocument();
  });
});
