# javascript-w5-accountbook(J098)

스프린트 5-6주차 웹 프로젝트 - 가계부



---

## 주간 계획서

### 월 09/28

- [x] 환경설정
  - [x] ncloud 서버 개설
  - [x] DB 설치
- [x] 주간 계획서 작성
- [x] github 기획 설정
  - [ ] milestone을 주간별로 만든다.
  - [x] 개발해야 할 기능(feature)을 깃헙 issue항목에 등록한다.
- [x] express 설치
  - [x] [선택] 보일러 플레이트 clone
  - [x] express + mysql2 사용.

### 월 10/05

- [ ] 서버 자동배포를 적용한다.
- [ ] DB 설계
  - [ ] ERD 작성
    - [ ] ERD 작성을 선행 후 DB를 설계한다.
  - [ ] [선택] Sequelize ORM을 적용한다.
- [ ] API 구현
  - [ ] 백엔드는 JSON 기반의 Web API로 응답.

### 화 10/06

- [ ] JWT 인증로직
  - [ ] 로그인
  - [ ] 로그아웃

### 수 10/07

- [ ] 코드 리팩토링

### 목 10/08

- [ ] 피어세션
  - [ ] 문서작성
- [ ] 회고록
  - [ ] 문서작성

---

### 요구사항

- feature 개발이 끝나면 바로바로 dev 브랜치로 머지한다. 하루 최소 1회 이상 머지한다.
- 개발해야 할 기능(feature)을 깃헙 issue항목에 등록한다.
- milestone을 주간별로 만든다.
- issue로 등록할때 담당자/milestone/작업의 크기 등 자세한 내용을 함께 적는다.

## BE 프로그래밍 요구사항

- express + mysql2 사용
- 백엔드는 JSON 기반의 Web API로 응답
- ERD를 먼저 그리고 백엔드 설계를 진행한다.
- JWT 기반의 토큰 방식 인증을 사용한다.
- 세션은 사용하지 않는다. 별도의 세션 저장소도 사용하지 않는다.
- [선택] passport local을 이용해서 로그인을 구현한다.
- [선택] passport + Oauth 로그인을 구현한다.
- [선택] passport + Oauth + JWT를 이용해서 인증한다.
- [선택] Sequelize ORM을 적용한다.
- 서버 자동배포를 적용한다.