### TypedFrontendEngineer

비즈니스 캔버스 과제

### 폴더구조

```폴더 구조
   📦src
   ┣ 📂apis
   ┃ ┣ 📜firebase.tsx Firebase 설정파일
   ┃ ┗ 📜upload.tsx Firebase 이미지 업로드 파일
   ┣ 📂assets
   ┃ ┗ 📂images
   ┣ 📂components
   ┃ ┣ 📂InputResourceImage 이미지입력창
   ┃ ┃ ┗ 📜index.tsx
   ┃ ┣ 📂InputResourceUrl 주소입력창
   ┃ ┃ ┣ 📜index.tsx
   ┃ ┃ ┗ 📜yup.tsx
   ┃ ┣ 📂ResourceItem 왼쪽하단 리소스아이템 Component
   ┃ ┃ ┣ 📜index.tsx
   ┃ ┃ ┗ 📜yup.tsx
   ┃ ┣ 📜IframeViewer.tsx 오른쪽 iFrame영역 [Url창 Component + 뷰어 Component]
   ┃ ┣ 📜ResourceList.tsx 왼쪽 하단 리소스 리스트 Component
   ┃ ┣ 📜ResuorceButtonForm.tsx 왼쪽 상단 url,image 추가 버튼 Component
   ┃ ┗ 📜ToastAlert.tsx 토스트 팝업 Component
   ┣ 📂pages
   ┃ ┗ 📜ResourceView.tsx 전체화면 Component
   ┣ 📂reducers
   ┃ ┣ 📜index.tsx
   ┃ ┗ 📜resource.tsx
   ┣ 📂sagas
   ┃ ┣ 📜index.tsx
   ┃ ┗ 📜resourceSaga.tsx
   ┣ 📂store
   ┃ ┗ 📜configureStore.tsx
   ┣ 📂styles
   ┃ ┗ 📜styles.tsx
   ┣ 📂types
   ┃ ┗ 📜types.tsx
   ┣ 📜App.css
   ┣ 📜App.test.tsx
   ┣ 📜App.tsx
   ┣ 📜index.tsx
   ┣ 📜logo.svg
   ┣ 📜react-app-env.d.ts
   ┣ 📜reportWebVitals.tsx
   ┗ 📜setupTests.tsx
```

#### 진행과정

### 프로젝트에 앞선 고민

# Git

1. git Branch를 원래는 나뉘어서 여러기능들의 Branch를 쓰지만
   개인 과제이므로 main 하나의 Branch 사용하였습니다.

# 디자인 구성 및 디자인 라이브러리 결정

2. material-ui로 디자인으로 반응형 구현하려고 했으나,
   피그마 디자인 설계에 맞춰 반응형이 아닌 일반적인 css로 처리
   material-ui는 MuiFileInput, CircularProgress 2개를 사용중입니다.

   1. MuiFileInput 사용한 이유는 세련된 디자인의 fileInput을 제공하기 때문입니다.
   2. CircularProgress는 로딩바를 표현하기 위해 사용하였습니다.

# 레이아웃 구성

3. 피그마 설계에 맞춘 레이아웃은 총 3구역이며, 총 3가지의 큰 컴포넌트로 분리
   1. [ResuorceButtonForm.tsx (URL추가 / 이미지추가)] (왼쪽 상단)
   2. [ResourceList.tsx (URL 이름수정, URL삭제, URL 목록 출력)] (왼쪽 하단),
   3. [IframeUrlViewer (URL클릭시 동영상 뷰어) , ImageViewer (Image 클릭시 이미지 뷰어)] (오른쪽)

### 과제 개발에 필요한 라이브러리 설치

# react-hook-form

1. 유효성검사를 하기 위한 react-hook-form 설치

- 사용한 이유
- 불필요한 렌더링 방지 (비제어 컴포넌트 이기 때문에)
- 간결한 유효성 검사

# redux-saga

2. 상태관리 라이브러리

   1. redux-saga vs zustand

   - Zustand : 간단한 코드 ,쉽게 상태접근 가능 , 직관적인 API제공
   - Redux-saga: 보일러플레이트 코드 발생, 상태 쉽게 예측 가능, 여러가지 기능 제공

   2. 이번 프로젝트에서는 zustand가 더 맞다고 생각하지만, 상태를 쉽게 추적이 가능하고
      추후 백엔드를 연동할 가능성도 있다고 생각해서 기능이 더많은 redux-saga로 결정했습니다.

   3. 백엔드를 타지않기 때문에 새로고침해도 값을 유지하는게 좋을것같아서 persist를 설치했습니다.
      npm install redux-persist -D // 새로고침 해도 store 데이터 남아있게 처리하는 라이브러리

### 개발

# [ResuorceButtonForm.tsx (URL추가 / 이미지추가)] (왼쪽 상단) 개발

1. 리소스 url 추가 버튼 기능 개발

   - url 수정 기능 개발

   - "Url 추가" 버튼 클릭시 reactDom.createPortal을 이용하여 상단에 입력 Form view
     문제 발생, 부모가 최상단이라 반응형으로 줄어들지 않음
   - <div position="relative"> 태그 안에서 호출,
      url 추가 태그 반응형으로 정상 작동

   - url valid 기능 개발 구현 (url 정합성, 성공/실패 ,랜덤딜레이,유튜브 Url변환)

   - URL 추가 버튼 click 후 focus 이벤트 추가

   - URL 추가 버튼 blur 후 창 닫는 이벤트 추가

   - youtube url은 embed url 정규식검사 로직 개발

   - 삭제 기능 개발 및 mouser over 기능 및 cursor 추가

   - toast 성공 ,실패 메세지 기능 개발

   - url 추가 시 로딩 기능개발

# [IframeUrlViewer (URL클릭시 동영상 뷰어) , ImageViewer (Image 클릭시 이미지 뷰어)] (오른쪽)

1. iFrame 기능 개발

   - ResourceList Item 수정 버튼 클릭시 focus 처리
   - Iframe 개발
   - Url창 view 개발 및 닫기 버튼 구현
   - iFrame viewer 구현
   - iFrame Loading bar 구현
   - iFrame Loading bar 에러 처리
   - Url과 Image에 따른 화면 분기점 개발 Url => <iframe>, Image=><image>
   - url 및 Image 로딩바 개발

# [ResourceList.tsx (URL 이름수정, URL삭제, URL 목록 출력)] (왼쪽 하단)

1. 리소스 Image 추가 기능 개발

   - 이미지 업로드를 위해 Firebase Stroage 설정
   - npm i firebase
   - npm install mui-file-input --save
   - 이미지 파이어베이스 업로드 기능 구현
   - 이미지 업로드 로딩 기능 구현
   - 이미지 valid 기능 개발 구현 (확장자 조건, 업로드 파일 유무 체크, 실패/성공 , 랜덤딜레이)
   - MuiFileInput으로 입력창 구현
   - 다중업로드는 이미지 리스트를 한번에 redux-saga로 전송
     [이미지 업로드 -> 로딩 -> 성공/실패 여부 토스트출력] 루틴으로 마지막에 성공, 처리 건수를 토스트팝업으로 출력

### 트러블 슈팅

1.  import { TypedIcon } from "typed-design-system" 사용시 에러 발생
    Module not found: Error: Can't resolve '@emotion/core' in 'E:\react_practice\react_business_canvas\node_modules\typed-design-system\dist'  
    에러 발생
    npm i -save @emotion/core 실행
    아이콘 사용시 에러 발생
    The `@emotion/core` package has been renamed to `@emotion/react`. Please import it like this `import { jsx } from '@emotion/react'`.
    npm install @emotion/core@10.1.1로 core 다운 그레이드 후 에러 해결
2.  ResizeObserver loop completed with undelivered notifications.
    ResourceItem 의 Controller에서 에러 발생, defaultValues에 값을 넣고 크기를 조정하면 에러발생
    해결방안
    App.css에 항목 추가
    iframe#webpack-dev-server-client-overlay {
    display: none !important;
    }
3.  Uncaught Error: Minified React error #425; visit https://reactjs.org/docs/error-decoder.html?invariant=425 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    https://www.robinwieruch.de/react-libraries/를 iFrame으로 열면 에러가 출력
    위의 주소의 자체 에러 SSR에서 서버와 클라이언트가 서로 다른 것을 렌더링할 때 발생하는 경고다 보통은 클라이언트 시간과 서버 시간이 달라서 생기는 에러
4.  https://blog.typed.biz/content/images/2021/04/pasted-image-0-copy.png net::ERR_NAME_NOT_RESOLVED  
    https://typed.do/blog-kr/how-to-make-good-usability-product/ 를 iFrame으로 열었을떄 사이트 내부 에러
