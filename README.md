# javascript-w5-accountbook(J098)

스프린트 5-6주차 웹 프로젝트 - 가계부

-----

## 주간 계획서(W5)

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



## 주간 계획서(W6)

### 월 10/12

- [x] 환경설정
  - [x] 웹팩 설정
- [x] 주간 계획서 작성
- [x] github 기획 설정
  - [x] milestone을 주간별로 만든다.
  - [x] 개발해야 할 기능(feature)을 깃헙 issue항목에 등록한다.

### 화 10/13

- [x] observer 패턴 적용
- [x] 내역화면 구현
- [x] 통계화면 구현

### 수 10/14

- [x] 통계화면 구현(마무리)
- [ ] 결제수단 관리

### 목 10/15

- [x] 요구사항 마무리
- [x] 리팩토링

### 금 10/16

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

## FE 프로그래밍 요구사항

- [x] Model과 View의 역할을 또렷하고 나누고, 관계를 느슨하게 한다.
  - [x] Observer 패턴을 활용할 수 있다.
- [x] Single Page Application을 만든다.
  - [x] 여러개의 페이지 개발이 아니고 하나의 페이지에서 모든 렌더링을 한다.
  - [x] Routing을 부분적으로 적용해서 주요 콘텐츠가 URL라우팅이 되도록 한다. (*?)
- [x] 캐시를 적용해서 최적화를 할 수 있는 지점을 찾아본다. (아래 예시 참고)
  - [x] **반복적인** 결과의 데이터를 서버에서 받아오는 경우
  - [x] 반복적인 데이터처리 결과를 하는 경우(메모이제이션)
- [x] 상태(state)관리
  - [x] 데이터 변경을 위한 함수는 순수함수여야 한다.
  - [x] immutable 방식으로 데이터 변경을 시도한다.
- [x] 데이터 시각화는 SVG나 Canvas기술을 활용해서 제작한다. 라이브러리를 사용하지 않는다.(*)
- [x] 코드 구현에 도움이 되는 외부 라이브러를 사용할 수 없다.
- [ ] 테스트 코드 구현한다. (*)
  - [ ] 모델을 다루는 부분 위주로 테스트 코드를 구현한다.

## ERD

![J20_ERD](https://user-images.githubusercontent.com/7006837/95067248-8115fa00-073e-11eb-89cd-f6219e0e27bc.png)

## 데모

URL : http://115.85.182.190/

> ID : boost
> PW : camp



## 실행화면

### 1) 내역화면

![list](https://user-images.githubusercontent.com/7006837/96206588-3c8f2780-0fa4-11eb-908f-643d75f28e81.PNG)



### 2) 달력화면

![calender](https://user-images.githubusercontent.com/7006837/96206598-4022ae80-0fa4-11eb-9116-23c1297e99c7.PNG)

### 3) 통계화면

![통계](https://user-images.githubusercontent.com/7006837/96206602-42850880-0fa4-11eb-9397-d10ed362784b.PNG)