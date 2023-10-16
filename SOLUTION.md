0. 폴더 구조
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

1. git Branch를 원래는 나뉘어서 main-dev-여러기능들로 쓰지만
   개인 과제이므로 main 하나의 Branch 사용

2. material-ui로 디자인 구현
   npm install --save typed-design-system
   npm install --save @mui/material
   npm install --save @emotion/styled
   npm install --save @emotion/react
   npm install -- save @emotion/core@10.1.1
   npm install --save @mui/icons-material

3. 전체 레이아웃 구현중
   왼쪽 사이드바 구현 (라우팅 대비)
   오른쪽 출력화면 구현 (어떤 화면이든)
   현재 리소스 창은 총 3가지의 컴포넌트로 분리
   [ResuorceButtonForm.tsx (URL추가 / 이미지추가)] ,
   [ResourceList.tsx (URL 이름수정, URL삭제, URL 목록 출력)] ,
   [IframeUrlViewer (URL클릭시 동영상 뷰어) , ImageViewer (Image 클릭시 이미지 뷰어)]

4. react-hook-form 설치
   react-hook-form 설치
   npm install react-hook-form --save

5. 상태관리 라이브러리
   redux-saga vs zustand
   Zustand : 간단한 코드 ,쉽게 상태접근 가능 , 직관적인 API제공
   Redux-saga: 보일러플레이트 코드 발생, 상태 쉽게 예측 가능, 여러가지 기능 제공

   이번 프로젝트에서는 zustand가 더 맞다고 생각하지만
   복잡한 비동기(백엔드와 통신 등) 처리를 할 때 redux-saga가 더 적합하다고 생각해서 redux-saga로 진행하겠습니다.

   redux-saga 설치
   npm i redux react-redux @types/react-redux redux-saga --save
   npm i redux-devtools-extension --save
   yup 설치
   npm install yup --save
   npm install @hookform/resolvers --save

   npm install redux-persist -D // 새로고침 해도 store 데이터 남아있게 처리하는 라이브러리

6. 리소스 url 추가 버튼 기능 개발
   ├─ 1.url 수정 기능 개발
   ├─ 2-1. "Url 추가" 버튼 클릭시 reactDom.createPortal을 이용하여 상단에 입력 Form view
   ├─ 문제 발생, 부모가 최상단이라 반응형으로 줄어들지 않음
   ├─ 2-2. <div position="relative"> 태그 안에서 호출,
   ├─ url 추가 태그 반응형으로 정상 작동
   ├─ 2-3 url https:// , http:// 포함되어야하는 validation 체크, yup을 통해서 개발
   ├─ 2-4 URL 추가 버튼 click 후 focus 이벤트 추가
   ├─ 2-5 URL 추가 버튼 blur 후 창 닫는 이벤트 추가
   ├─ 2-6 youtube url은 embed url 정규식검사 로직 개발
   ├─ 2-7 삭제 기능 개발 및 mouser over 기능 추가
   ├─ 2.8 toast 성공 ,실패 메세지 기능 개발

7. iFrame 기능 개발
   ├─ 1.ResourceList Item 수정 버튼 클릭시 focus 처리
   ├─ 2. Iframe 개발
   ├─ 2-1 Url창 view 개발 및 닫기 버튼 구현
   ├─ 2-2 iFrame viewer 구현
   ├─ 2-3 iFrame Loading bar 구현
   ├─ 2-4 iFrame Loading bar 에러 처리

8. 리소스 Image 추가 기능 개발
   ├─1. 이미지 업로드를 위해 Firebase Stroage 설정
   ├─2. npm i firebase
   ├─3. npm i --save @types/uuid (파일명을 고유하게 작성하기 위해서 설치)
9. 트러블 슈팅
   1. import { TypedIcon } from "typed-design-system" 사용시 에러 발생
      Module not found: Error: Can't resolve '@emotion/core' in 'E:\react_practice\react_business_canvas\node_modules\typed-design-system\dist'  
      에러 발생
      npm i -save @emotion/core 실행
      아이콘 사용시 에러 발생
      The `@emotion/core` package has been renamed to `@emotion/react`. Please import it like this `import { jsx } from '@emotion/react'`.
      npm install @emotion/core@10.1.1로 core 다운 그레이드 후 에러 해결
   2. ResizeObserver loop completed with undelivered notifications.
      ResourceItem 의 Controller에서 에러 발생, defaultValues에 값을 넣고 크기를 조정하면 에러발생
      해결방안
      App.css에 항목 추가
      iframe#webpack-dev-server-client-overlay {
      display: none !important;
      }
   3. Uncaught Error: Minified React error #425; visit https://reactjs.org/docs/error-decoder.html?invariant=425 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
      https://www.robinwieruch.de/react-libraries/를 iFrame으로 열면 에러가 출력
      위의 주소의 자체 에러 SSR에서 서버와 클라이언트가 서로 다른 것을 렌더링할 때 발생하는 경고다 보통은 클라이언트 시간과 서버 시간이 달라서 생기는 에러
   4. https://blog.typed.biz/content/images/2021/04/pasted-image-0-copy.png net::ERR_NAME_NOT_RESOLVED  
      https://typed.do/blog-kr/how-to-make-good-usability-product/ 를 iFrame으로 열었을떄 사이트 내부 에러
