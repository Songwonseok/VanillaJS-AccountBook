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
  - [x] milestone을 주간별로 만든다.
  - [x] 개발해야 할 기능(feature)을 깃헙 issue항목에 등록한다.
- [x] express 설치
  - [x] [선택] 보일러 플레이트 clone
  - [x] express + mysql2 사용.

### 월 10/05

- [x] 서버 자동배포를 적용한다.
- [x] DB 설계
  - [x] ERD 작성
    - [x] ERD 작성을 선행 후 DB를 설계한다.
  - [x] [선택] Sequelize ORM을 적용한다.
- [x] API 구현
  - [x] 백엔드는 JSON 기반의 Web API로 응답.

### 화 10/06

- [x] JWT 인증로직
  - [x] 로그인
  - [x] 로그아웃

### 수 10/07

- [x] 마무리 작업

### 목 10/08

- [x] 문서작성

---

### 요구사항

- feature 개발이 끝나면 바로바로 dev 브랜치로 머지한다. 하루 최소 1회 이상 머지한다.
- 개발해야 할 기능(feature)을 깃헙 issue항목에 등록한다.
- milestone을 주간별로 만든다.
- issue로 등록할때 담당자/milestone/작업의 크기 등 자세한 내용을 함께 적는다.

## BE 프로그래밍 요구사항

- [x] express + mysql2 사용
- [x] 백엔드는 JSON 기반의 Web API로 응답
- [x] ERD를 먼저 그리고 백엔드 설계를 진행한다.
- [x] JWT 기반의 토큰 방식 인증을 사용한다.
- [x] 세션은 사용하지 않는다. 별도의 세션 저장소도 사용하지 않는다.
- [x] [선택] passport local을 이용해서 로그인을 구현한다.
- [ ] [선택] passport + Oauth 로그인을 구현한다.
- [ ] [선택] passport + Oauth + JWT를 이용해서 인증한다.
- [x] [선택] Sequelize ORM을 적용한다.
- [x] 서버 자동배포를 적용한다.



## ERD

![J20_ERD](https://user-images.githubusercontent.com/7006837/95067248-8115fa00-073e-11eb-89cd-f6219e0e27bc.png)