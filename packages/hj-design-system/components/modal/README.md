# Anatomy
![image](https://github.com/f-lab-edu/design-hub/assets/84058944/5a667517-5131-4fb9-98c9-7b357cabc450)

# Usage
```tsx
import { Modal } from "@hub/hds/components";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            Modal Body
          </Modal.Body>
          <Modal.Footer>
            <button>ok</button>
            <button onClick={() => setIsOpen(false)}>close</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}
```

# Dialog 과 Modal 은 어떻게 다를까요?

## Dialog
Dialog 는 현재 창이나 다른 대화 상자에 겹쳐지는 대화 상자 요소이다.  
사용자에게 정보를 보여주거나, 사용자의 응답을 받는 목적으로 사용된다.  
Dialog 는 Modal 과 Non-Modal Dialog 를 포함한 대화 구성 요소를 나타낸다. 
`<dialog>` 태그는 Modal 과 Non-Modal Dialog 를 모두 구현할때 사용할 수 있는 요소이다.  

## Modal
그렇다면 Modal 과  Non-Modal Dialog 는 어떻게 다를까?
`Modal Dialog` 아래의 창은 비활성화되어 사용자는 외부의 콘텐츠와 상호 작용할 수 없게 된다. 또한, 외부의 콘텐츠는 대개 시각적으로 가려지거나 흐리게 표시된다. 일반적인 구현에서는 외부 콘텐츠를 클릭하는 등 상호 작용하려고 시도하면 Modal Dialog 가 닫힌다.  
`Non-Modal Dialog` 는 사용자가 여전히 외부 콘텐츠와 상호 작용할 수 있다.

참고:
- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog)
- [https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/)https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/

