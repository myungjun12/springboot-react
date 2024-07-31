 // /naverLogin 클릭해서 왔음
var express = require('express'); // require 함수는 모듈을 불러오는데 사용함 ('express'모듈을 불러오고) express프레임워크가 담긴 객체 -> var express 
// Express는 Node.js용 웹 애플리케이션 프레임워크로, HTTP 서버를 쉽게 만들고 관리할 수 있게 도와줍니다.
var app = express(); // app 객체를 통해 서버 기능 구현 (경로 또는 서버의 요청 응답 처리 기능)

var client_id = 'qPX3zFj9NJ9gD2sF_Yv_'; /* 네이버 개발자 센터 클라이언트 아이디 설정 */
var client_secret = 'TV85mK7aR2'; /* 네이버 개발자 센터 시크릿 키로 설정 */
var state = "RANDOM_STATE"; // CSRF 공격을 방지하기 위한 랜덤 문자열입니다.
var redirectURI = encodeURI("http://localhost:9010/naverLogin"); // 네이버개발자센터 callback URL
 /* redirectURI는 인증 후 네이버가 사용자에게 리다이렉트할 URL입니다. 이 URL은 인코딩되어야 합니다. */
var api_url = ""; // OAuth2.0 인증 URL을 저장할 변수입니다.
// OAuth2.0 : 사용자의 인증 정보를 안전하게 사용할 수 있도록 하는 인증 및 권한 부여 프레임워크입니다.

app.get('/naverLogin', function (req, res) { // 클라이언트가 /naverLogin을 url로 get요청을 보내면 
  // api_url = 을 구성한다. 이 URL은 OAuth2.0 인증을 위한 로그인 페이지로 이동한다. 
  api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
  
  // writeHead : http응답 메시지 헤더를 작성한다는 뜻 
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  // HTTP 응답 상태 코드 200과 Content-Type을 설정합니다. 응답상태 코드 200(성공 뜻): 서버가 요청을 제대로 처리했다는 뜻
  res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
  // res.end : HTML 링크를 포함하여 응답을 전송합니다.   사용자가 이 링크를 클릭하면 네이버 로그인 페이지로 리다이렉트됩니다.
 });



 
 app.get('/callback', function (req, res) {
    code = req.query.code;
    state = req.query.state;
    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
     + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
    
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
     };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
      } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });
  });
 app.listen(3000, function () {
    // 127.0.0.1 localhost 가
   console.log('http://localhost:3000/naverlogin app listening on port 3000!');
 });
