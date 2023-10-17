### TypedFrontendEngineer

비즈니스 캔버스 과제

### 폴더구조

0. 폴더 구조
   react_business_canvas
   ├─ .env Firebase 인증키 저장
   ├─ .eslintrc  
   ├─ package-lock.json
   ├─ package.json
   ├─ README.md
   ├─ SOLUTION.md
   ├─ src
   │ ├─ apis
   │ │ ├─ firebase.tsx Firebase 셋팅
   │ │ └─ upload.tsx Firebase upload 기능
   │ ├─ App.css
   │ ├─ App.test.tsx
   │ ├─ App.tsx  
   │ ├─ assets
   │ │ └─ images
   │ ├─ components
   │ │ ├─ IframeViewer.tsx //오른쪽 그리드 영역
   │ │ ├─ InputResourceImage //Image Add할때 이미지입력창
   │ │ │ ├─ index.tsx
   │ │ │ └─ Test.tsx
   │ │ ├─ InputResourceUrl //Url Add할대 Url입력창
   │ │ │ ├─ index.tsx
   │ │ │ └─ yup.tsx yup Url //유효성 검사 파일
   │ │ ├─ ResourceItem
   │ │ │ ├─ index.tsx //왼쪽 하단 그리드 리스트 아이템
   │ │ │ └─ yup.tsx yup Item //수정시 유효성 검사 파일
   │ │ ├─ ResourceList.tsx //왼쪽 하단 그리드 리스트 출력
   │ │ ├─ ResuorceButtonForm.tsx // 왼쪽 상단 버튼 폼
   │ │ └─ ToastAlert.tsx // 토스트팝업
   │ ├─ index.tsx
   │ ├─ logo.svg
   │ ├─ pages
   │ │ └─ ResourceView.tsx // 화면의 최상단 view
   │ ├─ react-app-env.d.ts
   │ ├─ reducers
   │ │ ├─ index.tsx  
   │ │ └─ resource.tsx  
   │ ├─ reportWebVitals.tsx
   │ ├─ sagas
   │ │ ├─ index.tsx
   │ │ └─ resourceSaga.tsx
   │ ├─ setupTests.tsx
   │ ├─ store
   │ │ └─ configureStore.tsx
   │ ├─ styles
   │ │ └─ styles.tsx
   │ └─ types
   │ └─ types.tsx
   └─ tsconfig.json

### 진행과정

1. git Branch를 원래는 나뉘어서 여러기능들의 Branch를 쓰지만
   개인 과제이므로 main 하나의 Branch 사용

2. material-ui로 디자인으로 반응형 구현
   npm install --save typed-design-system
   npm install --save @mui/material
   npm install --save @emotion/styled
   npm install --save @emotion/react
   npm install -- save @emotion/core@10.1.1
   npm install --save @mui/icons-material

   하려고 했으나, 피그마 스펙에 맞춰 반응형이 아닌 일반적인 css로 처리
   material-ui는 MuiFileInput,CircularProgress 2개를 사용중입니다.

   MuiFileInput 사용한 이유는 세련된 디자인의 fileInput을 제공하기 때문입니다.
   CircularProgress는 로딩바를 표현하기 위해 사용하였습니다.

3. 피그마 설계에 맞춘 레이아웃은 총 3구역이며, 총 3가지의 큰 컴포넌트로 분리
   [ResuorceButtonForm.tsx (URL추가 / 이미지추가)] (왼쪽 상단)
   [ResourceList.tsx (URL 이름수정, URL삭제, URL 목록 출력)] (왼쪽 하단),
   [IframeUrlViewer (URL클릭시 동영상 뷰어) , ImageViewer (Image 클릭시 이미지 뷰어)] (오른쪽)

4. 유효성검사를 하기 위한 react-hook-form 설치

   - 사용한 이유
   - 불필요한 렌더링 방지 (비제어 컴포넌트 이기 때문에)
   - 간결한 유효성 검사
   - npm install react-hook-form --save

5. 상태관리 라이브러리
   redux-saga vs zustand
   Zustand : 간단한 코드 ,쉽게 상태접근 가능 , 직관적인 API제공
   Redux-saga: 보일러플레이트 코드 발생, 상태 쉽게 예측 가능, 여러가지 기능 제공

   이번 프로젝트에서는 zustand가 더 맞다고 생각하지만 상태를 쉽게 추적이 가능하고
   많이 써본 redux-saga로 결정했습니다.

   redux-saga 설치
   npm i redux react-redux @types/react-redux redux-saga --save
   npm i redux-devtools-extension --save
   yup 설치
   npm install yup --save
   npm install @hookform/resolvers --save

   백엔드를 타지않기 때문에 새로고침해도 값을 유지하는게 좋을것같아서 persist를 설치했습니다.
   npm install redux-persist -D // 새로고침 해도 store 데이터 남아있게 처리하는 라이브러리

6. 리소스 url 추가 버튼 기능 개발

   1. url 수정 기능 개발
   2. "Url 추가" 버튼 클릭시 reactDom.createPortal을 이용하여 상단에 입력 Form view
      문제 발생, 부모가 최상단이라 반응형으로 줄어들지 않음
      3번으로 진행
   3. <div position="relative"> 태그 안에서 호출,
      url 추가 태그 반응형으로 정상 작동
   4. url valid 기능 개발 구현 (url 정합성, 성공/실패 ,랜덤딜레이,유튜브 Url변환)
   5. URL 추가 버튼 click 후 focus 이벤트 추가
   6. URL 추가 버튼 blur 후 창 닫는 이벤트 추가
   7. youtube url은 embed url 정규식검사 로직 개발
   8. 삭제 기능 개발 및 mouser over 기능 및 cursor 추가
   9. toast 성공 ,실패 메세지 기능 개발
   10. url 추가 시 로딩 기능개발

7. iFrame 기능 개발

   1. ResourceList Item 수정 버튼 클릭시 focus 처리
   2. Iframe 개발
   3. Url창 view 개발 및 닫기 버튼 구현
   4. iFrame viewer 구현
   5. iFrame Loading bar 구현
   6. iFrame Loading bar 에러 처리
   7. Url과 Image에 따른 화면 분기점 개발 Url => <iframe>, Image=><image>
   8. url 및 Image 로딩바 개발

8. 리소스 Image 추가 기능 개발

   1. 이미지 업로드를 위해 Firebase Stroage 설정
   2. npm i firebase
   3. npm install mui-file-input --save
   4. 이미지 파이어베이스 업로드 기능 구현
   5. 이미지 업로드 로딩 기능 구현
   6. 이미지 valid 기능 개발 구현 (확장자 조건, 업로드 파일 유무 체크, 실패/성공 , 랜덤딜레이)
   7. MuiFileInput으로 입력창 구현
   8. 다중업로드는 이미지 리스트를 한번에 redux-saga로 전송
      [이미지 업로드 -> 로딩 -> 성공/실패 여부 토스트출력] 루틴으로 비동기처리 방식 사용

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
