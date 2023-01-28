# numble-challenge-hpny
챌린지: [네카라쿠배 개발자와 함께 VanillaJS 활용하기](https://www.numble.it/501cc258-649f-4c73-b64b-bb4fea000640)
<br>VanillaJS 로 신년메시지 주고받는 사이트를 SPA challenge project(Numble 주관)

---
### 기술스택
- Vanilla js
- [webpack](https://webpack.js.org/)
- [CSS Module](https://webpack.js.org/loaders/css-loader/#pure-css-css-modules-and-postcss)


---
### live server
link: [netlify](https://taupe-licorice-34a149.netlify.app/)

---
### netlify http request 이슈 [#3 참고](https://github.com/wjdwjdtn92/numble-challenge-hpny/pull/3)
netlify은 https로 기본적으로 설정 되어있어 http로 요청시 오류가 발생한다.
_redirects 파일 설정 및 meta tag 설정으로 이를 회피할 수 있다.

---

### webpack 환경 실행 방법
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

