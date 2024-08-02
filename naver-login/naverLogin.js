 // /naverLogin 클릭해서 왔음
var express = require('express'); // require 함수는 모듈을 불러오는데 사용함 ('express'모듈을 불러오고) express프레임워크가 담긴 객체 -> var express 
// Express는 Node.js용 웹 애플리케이션 프레임워크로, HTTP 서버를 쉽게 만들고 관리할 수 있게 도와줍니다.
var app = express(); // app 객체를 통해 서버 기능 구현 (경로 또는 서버의 요청 응답 처리 기능)

var client_id = 'qPX3zFj9NJ9gD2sF_Yv_'; /* 네이버 개발자 센터 클라이언트 아이디 설정 */
var client_secret = 'TV85mK7aR2'; /* 네이버 개발자 센터 시크릿 키로 설정 */
var state = "RANDOM_STATE"; // CSRF 공격을 방지하기 위한 랜덤 문자열입니다.
var redirectURI = encodeURI("http://localhost:9000/naverLogin"); // 네이버개발자센터 callback URL
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



 //  네이버에서 발급된 인증 코드를 사용하여 액세스 토큰을 요청하고 응답을 반환합니다. 
 // /callback URL로 GET 요청을 받을 때 실행됩니다.
 app.get('/callback', function (req, res) {
    code = req.query.code;
    state = req.query.state;
    // code, state : 네이버 인증 서버가 리다이렉트할 때 쿼리 매개변수로 전달하는 인증 코드와 상태 값입니다.
    
    // 네이버의 토큰 발급 API를 호출하기 위한 URL을 구성합니다. 
    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
     + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state; // 상태 값이 포함
    
    // require 함수는 모듈을 불러오는데 사용함
    var request = require('request'); // request 모듈을 사용하여 네이버의 토큰 발급 API에 GET 요청
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret} // 헤더에는 클라이언트 ID와 클라이언트 secret이 포함되어 있습니다.
     };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) { // error가 발생하지 않는다면 상태코드 200을 반환한다.
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'}); // Content-Type 설정
        res.end(body); // 서버에서 받은 body를 클라이언트에게 응답
      } else {
        res.status(response.statusCode).end(); // 오류 상태 코드에 맞는 응답 상태를 설정하고 응답을 종료합니다.
        console.log('error = ' + response.statusCode); // : 콘솔에 상태 코드를 로그로 남깁니다.
      }
    });
  });
 app.listen(3000, function () { // 서버를 3000 포트에서 시작하겠다.
    // 127.0.0.1 localhost 가
   console.log('http://localhost:9000/naverlogin app listening on port 3000!');
   // 서버가 성공적으로 시작되면 로그 메세지 출력
 });
