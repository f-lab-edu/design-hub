import { useState } from "react";
import { Modal } from "../";
import Button from "components/button/Button";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const DefaultModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content>
          <Modal.Header>Modal Header</Modal.Header>
          <Modal.Body>
            <p>Modal Body</p>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              minima nihil corrupti minus! Eveniet reiciendis mollitia ab,
              deserunt quasi tempore hic consectetur temporibus rem explicabo
              aperiam odio? Provident, consequuntur nemo iusto quas, quasi
              pariatur tenetur natus aspernatur non id quo iure dicta dolorem
              labore quaerat voluptatibus ratione repellat ab veniam voluptatum
              a earum illo. Reprehenderit, esse autem debitis quidem aperiam nam
              earum libero vero. Dignissimos similique sequi rem eius nisi ab
              repellat ipsa voluptatum id itaque ipsam, neque voluptate quo
              officia? Quasi placeat, et cum ipsam iusto ullam obcaecati quia
              accusamus natus dignissimos autem corrupti necessitatibus odit
              fugiat voluptatibus dolorum. Nulla temporibus dolore minus, omnis
              earum sapiente ullam quae accusantium expedita vero odio aliquid
              soluta? Illo officia magni expedita itaque consequuntur dolorem!
              Labore, beatae? Minus, ab numquam dolorum exercitationem expedita
              laboriosam nisi nostrum tempora quas tenetur perferendis aliquam
              molestiae unde eaque ullam suscipit. Perferendis, voluptas
              temporibus vel repudiandae quo distinctio omnis unde repellendus
              hic aspernatur autem illum recusandae! Reiciendis, laudantium?
              Laudantium blanditiis necessitatibus quod. At enim eligendi soluta
              ut in aperiam quo alias illum quos porro, cumque ducimus nisi
              animi! Eveniet at ducimus, exercitationem facilis voluptas rerum
              dolor dolorem nulla mollitia cum, adipisci totam nam voluptate
              nesciunt illum nobis eligendi.
            </span>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" colorScheme="green">
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
