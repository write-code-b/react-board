# react-board

Bigs Front-End 개발자 테스트를 위한 게시판 홈페이지입니다. 반응형으로 구현했습니다.<br/>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

## 실행 방법

1. 리포지토리를 클론합니다.
2. package.json이 존재하는 경로로 이동을 한 후에 .env 파일을 추가하고 정보를 입력합니다.<br/>.env 파일의 정보는 메일로 전송할 예정입니다.
3. 터미널에서 `npm install` 명령어를 실행합니다.
4. 다음의 명령어를 실행합니다. `npm run dev`

## 기능/화면 설명

- 회원가입<br/>
  회원가입시 입력하는 이메일과 비밀번호의 유효성 검사를 진행합니다.

- 로그인<br/>
  AuthProvider로 인증상태를 관리합니다. 인증상태로 로그인 인증시 공개 페이지와 미인증시 공개 페이지를 구분합니다.
  로그인 성공시 access 토큰과 refresh 토큰을 localstorage에 저장합니다.
  access 토큰이 만료될 경우 refresh를 진행합니다.<br/>

  Test ID/Password<br/>
  username : `developer@bigs.or.kr`<br/>
  password : `123qwe!@#`

- 메인 페이지 `/`<br/>
  메인 페이지에는 로그인한 사용자 정보(username, name)를 표시합니다.

- 글 목록보기 페이지 `/list`<br/>
  페이지네이션을 구현했습니다.

- 글 상세보기 페이지 `/list/:id`

- 글 등록, 수정 페이지 `/write`, `/edit`
