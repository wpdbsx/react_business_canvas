0-1. 폴더 구조
├─ node_modules/ // 의존성 모듈 폴더
├─ src/ // 소스 코드 폴더
│ ├─ index.js // 애플리케이션 진입점 JavaScript 파일
│ ├─ App.js // 메인 컴포넌트
│ ├─ components/ // 컴포넌트 폴더
│ │ ├─ Component1.js // 재사용 가능한 컴포넌트
│ │ ├─ Component2.js
│ ├─ assets/ // 이미지, 스타일 및 기타 자산
│ │ ├─ images/ // 이미지 파일
│ │ ├─ styles/ // 스타일 파일
├─ package.json // 프로젝트 의존성 및 설정 파일
├─ README.md // 프로젝트 문서
|─ SOLUTION.md // 구현 문서

1-1. material-ui로 디자인 구현
npm install --save typed-design-system
npm install --save @mui/material
npm install --save @emotion/styled
npm install --save @emotion/react
npm install -- save @emotion/core@10.1.1
npm install --save @mui/icons-material

1-2. 전체 레이아웃 구현중
왼쪽 사이드바 구현 (라우팅 대비)
오른쪽 출력화면 구현 (어떤 화면이든)
현재 리소스 창은 총 3가지의 컴포넌트로 분리
AddButton.tsx (URL추가 / 이미지추가)
ResourceList.tsx (URL 이름수정, URL삭제, URL 목록 출력)
IframeUrlViewer (URL클릭시 동영상 뷰어)
ImageViewer (Image 클릭시 이미지 뷰어)

1-3 리소스 유효성 검사
react-hook-form 설치
npm install react-hook-form --save

yup 설치
npm install yup --save
npm install @hookform/resolvers --save

트러블 슈팅

1. import { TypedIcon } from "typed-design-system" 사용시 에러 발생
   Module not found: Error: Can't resolve '@emotion/core' in 'E:\react_practice\react_business_canvas\node_modules\typed-design-system\dist'  
   에러 발생
   npm i -save @emotion/core 실행
   아이콘 사용시 에러 발생
   The `@emotion/core` package has been renamed to `@emotion/react`. Please import it like this `import { jsx } from '@emotion/react'`.
   npm install @emotion/core@10.1.1로 core 다운 그레이드 후 에러 해결
