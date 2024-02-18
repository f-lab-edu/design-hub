# design-hub

<img src="https://img.shields.io/badge/Pnpm-%23F69220?style=flat-square&logo=Pnpm&logoColor=white"/>

pnpm 을 사용하여 hj-design-system과 playground 두 개의 주요 디렉토리로 가진 모노레포로 구성하였습니다.   
<img width="200" alt="architecture" src="https://github.com/f-lab-edu/design-hub/assets/84058944/a5b0ea9c-34ca-4c24-8802-c101e0af27ef">


## 🎨 hj-design-system (hds)
<div>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Vitest-%236E9F18?style=flat-square&logo=Vitest&logoColor=white"/>
<img src="https://img.shields.io/badge/Storybook-%23FF4785?style=flat-square&logo=Storybook&logoColor=white"/>
<img src="https://img.shields.io/badge/testing_library_react-%23E33332?style=flat-square&logo=testinglibrary&logoColor=white" />
</div>


UI 컴포넌트 라이브러리 개발에 중점을 두고 있으며, 여기에는 컴포넌트, 훅, 테마 등의 UI 구성 요소가 포함되어 있습니다. 각 컴포넌트는 재사용 가능하고 일관된 디자인을 목표로 하며, 스토리북을 통해 독립적으로 문서화 및 시각화됩니다.
[Chakra UI](https://chakra-ui.com/)의 Foundations를 기반으로 하여 개발했습니다.  
강력한 다형성을 지원하는 `as` prop을 통해 유연하고 확장 가능한 컴포넌트 설계를 가능하게 합니다.

### 특징

- **pnpm**: 효율적이고 빠른 의존성 관리를 위해 pnpm을 사용합니다.
- **@emotion/react**: 컴포넌트 스타일링을 위해 @emotion/react를 사용합니다. 이를 통해 강력한 CSS-in-JS 기능을 제공합니다.
- **Storybook**: 컴포넌트를 독립적으로 개발하고 문서화하기 위해 Storybook을 사용합니다.
- **Vitest**: 단위 테스트를 위해 Vitest를 사용합니다. 이를 통해 안정성 있는 코드 베이스를 유지합니다.
- **다형성 지원**: `as` prop을 통해 다형성을 지원합니다. 이를 통해 하나의 컴포넌트로 다양한 HTML 요소를 표현할 수 있습니다.

## 🤹🏻‍♀️ playground
<img src="https://img.shields.io/badge/next.js-%23000000?style=flat-square&logo=Next.js&logoColor=white" />
Next.js 프레임워크를 기반으로 하고 있으며, 실제 애플리케이션 환경에서 hj-design-system에 정의된 컴포넌트들의 통합과 상호 작용을 테스트하는 역할을 합니다.   
hj-design-system에서 개발된 컴포넌트들을 실시간으로 임포트하여 애플리케이션 환경에서 어떻게 상호 작용하고 표현되는지를 확인하고, 사용자 경험을 검증하는 데 중점을 둡니다.  

하지만, playground는 프로젝트의 핵심적인 부분은 아니므로, 버전 관리 시스템에서는 추적되지 않습니다. 이는 로컬 개발 환경에서만 유용하며, 실제 제품 배포에는 포함되지 않습니다. 
