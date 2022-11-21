# 프로젝트 소개

## 프로젝트명
**라이엇게임즈 API를 이용한 나만의 롤 전적검색사이트 개발**

## 개발인원
2 명

## 프로젝트 진행 상황
- 현재 개발 진행중
- 현재는 riotgames에서 제공하는 DEVELOPMENT KEY를 사용하여 개발하고 있는데 이 KEY는 1일 단위로 만료가 된다. 매일 KEY값을 갱신해주고 개발해야한다는 불편함이 있다.
- riotgames에서 production key를 발급받으면 문제가 해결되지만 승인되는데 시간이 꽤 걸린다고한다.
- 현재 이 웹페이지는 배포하지 않았다.

## 프로젝트 개요 및 동기
개인적으로 'League Of Legends'라는 게임을 매우 즐겨하는 편이고 이 게임은 사실 정말 대중적이고 유저수가 많은 인기 게임이다. 이 게임의 공식사이트에서도 API를 제공하고 있었는데 새로운 웹사이트를 만들고 싶었던 나에게 큰 흥미를 이끌었다. 실제로 'OP.GG'나 'fow.kr' 등의 전적검색사이트가 꽤 많다. 하지만 나만의 전적검색사이트를 만들어보고 싶었고 같이 작업했던 친구도 역시 같은 생각이었다. 그래서 이 사이트를 제작하게 되었다.

## 기술 스택
- HTML
- CSS
- Javascript
- React
- express

## 구현 기능
**아직 개발이 진행중이고 초기버전이다. 새로운 기능이 추가되면 ReadME도 업데이트될 것이다.** <br>

일단 초기버전은 필수적으로 필요한 기능만 추가하여 제작하였다. 기본적으로 전적검색을 통한 랭크기록, 매치기록을 확인하고 League of legends에 등장하는 챔피언들의 스킬이나 아이템과 같은 정보들을 확인할 수 있도록 구현하였다.
### 전적검색 탭
<img src="https://user-images.githubusercontent.com/17917009/202985364-98a87c9e-481c-4204-9825-d63168164a4e.png" style="text-align : center">

**첫번째는 '전적검색'탭이다.** <br>
기본적으로 사이트에 접속하면 기본적으로 활성화 되어있다. 검색창에 검색하고자하는 닉네임을 입력하고 검색버튼을 누르면, 일정 시간 후 해당 유저의 닉네임, 레벨, 솔로랭크, 자유랭크기록 , 최근 진행한 10 게임의 기록을 확인할 수 있다.  

<img src="https://user-images.githubusercontent.com/17917009/202987868-89da66d6-67a1-4673-ae20-618707c14246.png" style="text-align : center">
검색된 전적기록의 상세기록도 다음과 같이 확인할 수 있다.

### 챔피언 정보 탭
<img src="https://user-images.githubusercontent.com/17917009/202985672-d5ed6898-5e82-4c2b-ba32-11f80c981e67.png" style="text-align : center">

**두번째는 '챔피언 정보'탭이다.** <br>
이 탭을 클릭하면 게임에 등장하는 챔피언의 이미지와 이름이 나열되어있다. 그리고 원하는 챔피언을 클릭하면 챔피언의 기본스탯과 패시브, 스킬, 그리고 추천아이템정보를 확인할 수 있다.

<img src="https://user-images.githubusercontent.com/17917009/202986621-d0e7bb4e-8495-4757-a1cf-86fe0af8b60b.png"
style="text-align : center">
챔피언이름, 컨셉, 기본스탯을 확인할 수 있다.

<img src="https://user-images.githubusercontent.com/17917009/202987059-49b5338b-bac7-4aa2-84e3-f2e00776c7f0.png"
style="text-align : center">
<img src="https://user-images.githubusercontent.com/17917009/202987201-4498ed8f-edd0-4eb7-ab49-1bbdc5e7c4b2.png"
style="text-align : center">
스킬정보와 추천아이템도 확인할 수 있다.

## 개선할 점 또는 추가할만한 기능
- 아이템정보를 확인할 수 있는 페이지를 추가할 예정이다.
- 전적기록을 불러올 때 사용되는 이미지의 로딩속도가 느린데 원인을 파악해서 해결할 수 있도록 해야겠다.
- Riot API에서 제공되는 데이터가 있다면, 챔피언별 추천스펠이나 추천룬을 확인할 수 있도록 추가하면 좋을 것같다.
- 현재 진행중인 게임에 대한 정보를 추가하면 좋을 것 같다.
- 페이지 로딩속도를 개선해야할 것 같다.
- 현재 UI의 퀄리티가 부족하다. 개선해야겠다. 

## 프로젝트 실행방법

**1. Terminal에서 'cd server'로 server 디렉토리로 이동**<br>
**2. npm install**<br>
**3. npm start로 서버 시작**<br>
**4. 새 Terminal을 열고 npm install 후 React 실행(npm start)**<br>

## 변경사항
- 
