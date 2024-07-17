import React, {useState} from "react";
import LoginContext from "./component/LoginContext";
import Signup from "./component/SignUp";
import Login from "./component/Login";
import "./App.css";
import TodoList from "./component/TodoList";
{/* 
      value={} => 하나의 값만 작성
      value={{}} => 두가지 이상의 값을 작성
      loginMember => 처음에 로그인 안된 초기값을 가지고 있는 것
      setLoginMember => 로그인 한 다음에 로그인한 정보를 가지고 있음
*/}
/* 현재 App.js는 제일 위에 있는 컴포넌트 = 객체 */
function App() {
  //회원 가입창 보이기 / 숨기기
  const [signUpView, setSignUpView] = useState(false);

  //로그인한 회원 정보 저장
  const [loginMember, setLoginMember] = useState(null);

  return (
    
   <LoginContext.Provider value={ {loginMember, setLoginMember} }>
      <button onClick={ () => {setSignUpView(!signUpView)} }>
        {signUpView ? ("회원 가입 닫기") : ("회원 가입 열기")}
      </button>
      {/* 회원 가입 화면 */}
      <div className="signup-wrapper">
        {/* signUpView가 true일 경우에만 실행되는 공간 = true여야 눈에 보여짐 */}

        {/* 조건식 && (true일 경우 실행) */}
        {signUpView === true && (<Signup/>)}
      </div>

      <h1>Todo List</h1>
      {/* 로그인을 해야지 TodoList 확인 가능 */}
     
      <Login />
  
      <hr/>
      {/* 로그인이 되었을 때 로그인한 회원의 TodoList 출력 */}
      {loginMember && (<TodoList/>)}
   </LoginContext.Provider>
  );
}

export default App;
