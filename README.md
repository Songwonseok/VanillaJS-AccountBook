# AccountBook 

Vanilla JS를 이용한 가계부 웹서비스 구현

-----

## Installation
```
npm i
npx webpack
npm start
```

## 주간 계획서 1주차

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



## 주간 계획서 2주차

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
- [x] 결제수단 관리

### 목 10/15

- [x] 요구사항 마무리
- [x] 리팩토링

### 금 10/16

- [x] 문서작성

-----

> - feature 개발이 끝나면 바로바로 dev 브랜치로 머지한다. 하루 최소 1회 이상 머지한다.
> - 개발해야 할 기능(feature)을 깃헙 issue항목에 등록한다.
> - milestone을 주간별로 만든다.
> - issue로 등록할때 담당자/milestone/작업의 크기 등 자세한 내용을 함께 적는다.



## ERD

![J20_ERD](https://user-images.githubusercontent.com/7006837/95067248-8115fa00-073e-11eb-89cd-f6219e0e27bc.png)

## 데모

URL : ~~http://115.85.182.190/~~
> - ID : boost
> - PW : camp



## 실행화면

### 1) 내역화면

![list](https://user-images.githubusercontent.com/7006837/96206588-3c8f2780-0fa4-11eb-908f-643d75f28e81.PNG)



### 2) 달력화면

![calender](https://user-images.githubusercontent.com/7006837/96206598-4022ae80-0fa4-11eb-9116-23c1297e99c7.PNG)

### 3) 통계화면

![통계](https://user-images.githubusercontent.com/7006837/96206602-42850880-0fa4-11eb-9397-d10ed362784b.PNG)
