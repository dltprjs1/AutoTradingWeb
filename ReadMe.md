## Auto Trading Web

서버로부터 받아온 데이터 실시간 집계 페이지 및 선물 프로그램 환결설정 구축 페이지 입니다.

## 구성

* 서버(Demon) -> `Auto Trading Web`

## Skills

* MSSQL
* Socket
* WebSocket
* SpringBoot
* Mybatis

## Preview

| Homepage  | Charts  | Table  | Setting  |
|---|---|---|---|
| ![Homepage](src/main/resources/static/assets/ReadMe/AutoTrading_Main.png) | ![Charts](src/main/resources/static/assets/ReadMe/AutoTrading_Charts.png) | ![Table](src/main/resources/static/assets/ReadMe/AutoTrading_Table.png) | ![Setting](src/main/resources/static/assets/ReadMe/AutoTrading_Main.png) |

### 메인 페이지 구성

* 실시간 금일 이벤트 발생 정보 처리
* 실시간 차트 데이터 처리
* 거래 내역에 대한 정보 처리

### 차트 페이지 구성

* 30분마다 초기화 및 업데이트 진행 되는 차트
* 거래에 따른 보유금액 변동
* 금일 에러 분류에 따른 차트

### 테이블 페이지 구성

* 거래 이력 상세 확인
* 주문 조건 상세 확인 
* 에러 상세 내역

### 세팅 페이지 구성

* 사용자의 커스터마이징이 가능한 환경설정 변경
