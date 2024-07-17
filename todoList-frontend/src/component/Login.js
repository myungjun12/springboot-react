import React, {useContext, useState} from "react";
import LoginContext from "./LoginContext";

const Login = () => {
    
    const {loginMember, setLoginMember} = useContext(LoginContext);

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    
    const 로그인버튼 = () => {
        fetch('/login', {
            method:"POST",
           
            headers : {
            // 사용자 -> 서버에 로그인한 정보가 일치하는게 있는지 확인
            "Content-Type" : "application/json", // 백으로 보내는형식 제이슨형태로 보낸다.
            // 서버 -> 사용자 한테 사용자가 작성한 정보가 존재하는지에 대한 존재여부 전달
            "Accept" : "application/json"}, // 받는 형식 맵 형식으로 받기위해서 Accept를 사용한다.
            body : JSON.stringify({id : id, pw : pw}) //본문으로 id pw 작성된 내용 전달
            })    // 객체를 스트링타입으로 
            .then(response => response.json())
            .then(map => { 
                console.log(map.loginMember.name);
    
                // 로그인 실패 시
                if(map.loginMember === null) {
                    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
                    return;
                }
    
                // 로그인 성공 시
               // console.log("map 값 정보"+ map.loginMember);
                setLoginMember(map.loginMember);
                
                //App.js 에 로그인 성공한 정보가 올라감 App.js 로그인정보를 다른 js에 전달
    
                //id,pw값 모두 지우기
                setId('');
                setPw('');
                alert('로그인 성공~!');
                setLoginMember(true);
                setName(map.loginMember.name);
            })
        }
    
        
        const 로그아웃버튼 = () => {
            setLoginMember(null);
        }
    
      return (
        <div className="login-container">
          {!loginMember && (
          <table>
            <tbody>
              <tr>

                <th>ID</th>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                  />
                </td>
              </tr>

              <tr>
                <th>PW</th>
                <td>
                    <input type="password" onChange={e => setPw(e.target.value)} value={pw} />
                </td>
              
              </tr>
            </tbody>
            <button onClick={로그인버튼}>로그인</button>
          </table>
           )} 
    
          {loginMember && (
            <>
            <p>{name}님 환영합니다. 로그인에 성공하셨습니다.</p>
            <button onClick={로그아웃버튼}>로그아웃</button>
            </>
            )}
         
        </div>
      );
    };
export default Login;