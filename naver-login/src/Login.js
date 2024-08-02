import React from "react";
import "./Login.css";

const Login = () => { // Route 에서 path="/" 제일 기본 화면을 받은 페이지 localhost:3000 페이지가 Login으로 설정되어 있음
  return ( // a 태그로 감싸진 img 클릭하면 href 주소로 이동하겠다.
    <div className="container">
  <div className="global-cont">
    <div className="inner-cont">
      <div className="sign">
        <span className="active sign-in">Sign In</span>
        <span className="sign-up">Sign Up</span>
      </div>
      <div className="sign-in-up">
        <form className="sign-in-form active">
          <input type="text" placeholder="Username or email"/>
          <input type="password" placeholder="Password"/>
          <span>
            <input type="checkbox"/> <label>Remember Me</label>
          </span>
          <a href="#">Forgot Password</a>
          <input type="submit" value="Sign In"/>
        </form>
        <form className="sign-up-form">
          <input type="text" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="text" placeholder="Institution/Organization"/>
          <input type="submit" value="Sign Up"/>
        </form>
        <div className="divider">
          <span>or</span>
        </div>
        <div className="social-login">
        <a href="http://localhost:9000/naverLogin">
        <button className="naver">Naver</button>
        </a>
          <button className="google">Google</button>
          <button className="github">GitHub</button>
          <button className="linkedin">LinkedIn</button>
          <div className="clearfix"></div>
          <div className="why"><a href="#">Why Create an Account ?</a></div>
          <div className="policy">By creating this account, you agree to <a href="#">our Privacy Policy</a> &amp; <a href="#">Cookie Policy .</a></div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;

   {/* 
        <img
          height="50"
          src="http://static.nid.naver.com/oauth/small_g_in.PNG"
          alt="Naver Login"
        />
      */}