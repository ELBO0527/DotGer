const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'http://localhost:8888',
          changeOrigin: true
      })
  )
};

/*

pathRewrite 설정
pathRewrite는 서버 API [https://jsonplaceholder.typicode.com/posts/1 이라고 가정했을 때
프론트엔드에서 호출 시에는 API에 특정 URL 규칙을 만들어 가독성을 높이고 싶거나 다수의 proxy를
추가해야 할 업무상 프로세스가 존재할 경우 화면에서 API URL path를 말 그대로 대체해주는 역할을 한다.
아래와 같이 설정할 경우 axios나 fetch 설정 시 /api/posts/1로 호출하게 되면 api는 '' 공백으로 대체되어 호출하게 된다.

src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://jsonplaceholder.typicode.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // URL ^/api -> 공백 변경
            }
        })
    );
};

*/
