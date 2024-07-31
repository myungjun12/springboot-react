import React from "react";

const Login = () => { // Route 에서 path="/" 제일 기본 화면을 받은 페이지 localhost:3000 페이지가 Login으로 설정되어 있음
  return ( // a 태그로 감싸진 img 클릭하면 href 주소로 이동하겠다.
    <div>  
      <a href="http://localhost:9010/naverLogin">
        <img
          height="50"
          src="http://static.nid.naver.com/oauth/small_g_in.PNG"
          alt="Naver Login"
        />
      </a>
    </div>
  );
};

export default Login;