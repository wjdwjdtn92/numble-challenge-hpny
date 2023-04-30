# numble-challenge-hpny
챌린지: [네카라쿠배 개발자와 함께 VanillaJS 활용하기](https://www.numble.it/501cc258-649f-4c73-b64b-bb4fea000640)
<br>VanillaJS 로 신년메시지 주고받는 사이트를 SPA challenge project(Numble 주관)

## 배포링크
link: [netlify](https://taupe-licorice-34a149.netlify.app/)


## 회고록
> [[넘블] 신년메시지 주고받기 챌린지(feat. VanillaJS)](https://velog.io/@jungsu/%EB%84%98%EB%B8%94-%EC%B1%8C%EB%A6%B0%EC%A7%80%EB%A5%BC-%EB%8F%8C%EC%95%84%EB%B3%B4%EB%A9%B0#lighthouse-%EC%82%AC%EC%9A%A9%EA%B3%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-lazy-%EB%A1%9C%EB%94%A9-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0)


## 개발기간
> 01-06(금) ~ 01-26(목) 

챌린지 자체는 01-06(금) ~ 01-19(목) 2주간 이었지만, 개인적인 시간을 많이 사용하지 못하여 아쉬움이남아
해당 기간 이후 일주일간 보완작업을 진행했습니다.

## 기술스택
- Vanilla js
- [webpack](https://webpack.js.org/)
- [CSS Module](https://webpack.js.org/loaders/css-loader/#pure-css-css-modules-and-postcss)

## netlify http request 이슈 
netlify은 https로 기본적으로 설정 되어있어 http로 요청시 오류가 발생한다.
_redirects 파일 설정 및 meta tag 설정으로 이를 회피할 수 있다.
[#3 참고](https://github.com/wjdwjdtn92/numble-challenge-hpny/pull/3)

## webpack 환경 실행 방법
1. git clone 후 패키지 설치 진행
```
npm install
```
일부 소스 변경 필요 (현재는 netlify 배포를 위해 적용된 부분때문에)

2. `lib > postApi.js`에서 API_ENDPOINT 수정 

```js
//3번라인
export const API_ENDPOINT = '/api';

//수정
export const API_ENDPOINT = 'http://43.201.103.199';

```

3. `index.html` meta tag 삭제
```html
<!--하기 7~10번라인 삭제-->
    <meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />
```
4. 웹팩 개발 서버 실행
```
npm run start
```

