import { useState } from "react";
import { Modal } from "../";
import Button from "components/button/Button";
import { ModalSizeSet } from "../types";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

const Template = ({ size }: { size: ModalSizeSet }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content size={size}>
          <Modal.Header>Modal Header</Modal.Header>
          <Modal.Body>
            <p>Modal Body</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              size="sm"
              colorScheme="green"
              onClick={() => alert("you clicked ok")}
            >
              ok
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              size="sm"
              colorScheme="gray"
            >
              close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export const Size = Template.bind({});
