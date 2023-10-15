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

1. material-ui로 디자인 구현
   npm install --save @mui/material
   npm install --save @emotion/styled
   npm install --save @emotion/react

1. 전체 레이아웃 구현중
   왼쪽 사이드바 구현 (라우팅 대비)
   오른쪽 출력화면 구현 (어떤 화면이든)
   현재 리소스 창은 총 3가지의 컴포넌트로 분리
   AddButton.tsx (URL추가 / 이미지추가)
   ResourceList.tsx (URL 이름수정, URL삭제, URL 목록 출력)
   IframeUrlViewer (URL클릭시 동영상 뷰어)
   ImageViewer (Image 클릭시 이미지 뷰어)
