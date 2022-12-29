# 프로젝트 소개

## 프로젝트명
**라이엇게임즈 API를 이용한 나만의 롤 전적검색사이트 개발**

## 개발인원
2 명

## 프로젝트 진행 상황
- 현재 개발 진행중에 있습니다.
- 현재는 riotgames에서 제공하는 DEVELOPMENT KEY를 사용하여 개발하고 있는데 이 KEY는 1일 단위로 만료가 된다. 매일 KEY값을 갱신해주고 개발해야한다는 불편함이 있다.
- riotgames에서 production key를 발급받으면 문제가 해결되지만 승인되는데 시간이 꽤 걸린다고한다.
- 현재 이 웹페이지는 배포되지 않음.

## 프로젝트 개요 및 동기
개인적으로 'League Of Legends'라는 게임을 매우 즐겨하는 편이고 이 게임은 사실 정말 대중적이고 유저수가 많은 인기 게임이다. 이 게임의 공식사이트에서도 API를 제공하고 있었는데 새로운 웹사이트를 만들고 싶었던 나에게 큰 흥미를 이끌었다. 실제로 'OP.GG'나 'fow.kr' 등의 전적검색사이트가 꽤 많다. 하지만 나만의 전적검색사이트를 만들어보고 싶었고 같이 작업했던 친구도 역시 같은 생각이었다. 그래서 이 사이트를 제작하게 되었다.

## 기술 스택
- HTML
- CSS
- Javascript
- React
- Express

## 구현 기능
**아직 개발이 진행중이고 초기버전이다. 새로운 기능이 추가되면 ReadME도 업데이트될 것이다.** <br>

일단 초기버전은 필수적으로 필요한 기능만 추가하여 제작하였다. 기본적으로 전적검색을 통한 랭크기록, 매치기록을 확인하고 League of legends에 등장하는 챔피언들의 스킬이나 아이템과 같은 정보들을 확인할 수 있도록 구현하였다.
### 전적검색 탭
<img src="https://user-images.githubusercontent.com/17917009/208411605-1597c00a-c002-4d33-9d00-0f3e6c30cb5d.png" style="text-align : center">

**첫번째는 '전적검색'탭이다.** <br>
기본적으로 사이트에 접속하면 기본적으로 활성화 되어있다. 검색창에 검색하고자하는 닉네임을 입력하고 검색버튼을 누르면, 일정 시간 후 해당 유저의 닉네임, 레벨, 솔로랭크, 자유랭크기록 , 최근 진행한 10 게임의 기록을 확인할 수 있다.  

<img src="https://user-images.githubusercontent.com/17917009/208411810-4f4b8c53-152e-4083-aa37-b3961c0a62f3.png" style="text-align : center">
검색된 전적기록의 상세기록도 다음과 같이 확인할 수 있다.

### 챔피언 정보 탭
<img src="https://user-images.githubusercontent.com/17917009/208411933-c22c85a7-c4c8-49be-acaa-960bd9d23429.png" style="text-align : center">

**두번째는 '챔피언 정보'탭이다.** <br>
이 탭을 클릭하면 게임에 등장하는 챔피언의 이미지와 이름이 나열되어있다. 그리고 원하는 챔피언을 클릭하면 챔피언의 기본스탯과 패시브, 스킬, 그리고 추천아이템정보를 확인할 수 있다.

<img src="https://user-images.githubusercontent.com/17917009/208412052-95acb1c4-0dea-45b0-9a34-353140a957d0.png" style="text-align : center">
챔피언이름, 컨셉, 기본스탯을 확인할 수 있다.

<img src="https://user-images.githubusercontent.com/17917009/208412254-a95db589-936e-471d-ae0c-67ef612e19b0.png"
style="text-align : center">
<img src="https://user-images.githubusercontent.com/17917009/208412283-ae393bf7-0391-4e63-9485-4907e4078a82.png"
style="text-align : center">
스킬정보와 추천아이템도 확인할 수 있다.

### 아이템 정보 탭
<img src="https://user-images.githubusercontent.com/17917009/208412444-72d51999-12d7-4ba5-8927-e3e8a99885eb.png" style="text-align : center">

**세번째는 '아이템 정보'탭이다.** <br>
이 탭을 클릭하면 게임아이템의 목록이 나열되어 보여진다. 각 아이템을 클릭하면 해당아이템에 대한 정보도 확인할 수 있다.

## 개선할 점 또는 추가할만한 기능
- 전적기록을 불러올 때 사용되는 이미지의 로딩속도가 느린데 원인을 파악해서 해결할 수 있도록 해야겠다.
- Riot API에서 제공되는 데이터가 있다면, 챔피언별 추천스펠이나 추천룬을 확인할 수 있도록 추가하면 좋을 것같다.
- 현재 진행중인 게임에 대한 정보를 추가하면 좋을 것 같다.
- 페이지 로딩속도를 개선해야할 것 같다.

## 프로젝트 실행방법

**1. https://developer.riotgames.com/ 에서 DEVELOPMENT API KEY 발급**

**2. 최상위 경로의 .env에 TEST_KEY=발급받은KEY값 넣기**

**3. Terminal에서 'cd server'로 server 디렉토리로 이동**<br>

**4. npm install**<br>

**5. npm start로 서버 시작**<br>

**6. 새 Terminal을 열고 npm install 후 React 실행(npm start)**<br>


## 변경사항
- 2022.12.09 아이템정보 탭 및 아이템정보 컴포넌트 생성 
- 2022.12.19 전체페이지 테마 변경
- 2022.12.29 챔피언 숙련도 컴포넌트 
