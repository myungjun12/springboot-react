import React, {useState, useEffect} from "react";

const Login = () => {
    
    const [userInfo, setUserInfo] = useState(null);
    // useEffect를 활용해서 데이터 가져오기
    // get 이용해서 특정 유저 정보를 가져오는 주소 설정
    useEffect(() => {
        const 유저정보 = () => {
            fetch("http://localhost:9000/userInfo") //HTTP METHOD (Get Post Put Delete)
            .then(가져온응답결과 => { // then fetch가 java controller에서 값을 가져왔을 때 실행할 구문
                return 가져온응답결과.json();
            })
            .then(data => { // 위 then 실행한 구문을 바탕으로 데이터 userInfo에 넣어주기
                setUserInfo(data); 
            })
            .catch(err => { // 위 두 then 모두 문제가 생겼을 때 문제를 catch할 구문
                console.error("Error user INFO : ", err);
            })
        };
        
        // 유저정보 기능을 실행하는 구문과 
        유저정보()
    },[]) // 최초 실행인지 주기적으로 계속 실행하는 효과인지 설정
  
    return (
        <>
        {/* 만약에 userInfo 정보가 있으면 로그인 완료이고 userInfo 정보가 없으면 로그인 하기 화면 보여줌 */}
        
        {/* 삼항 연산자 이용하기 */}
        {userInfo ? ("존재한다면 보여줄 코드") : ("존재하지 않다면 보여줄 코드")}
        {userInfo ? (
             <div>
             <h1>로그인 완료!</h1>
             <div>{JSON.stringify(userInfo, null, 2)}</div>
         </div> 
        ) : (
        <a href="http://localhost:9000/naverLogin">
           네이버로 로그인하기 
        </a>
        )}

        </>
    )
}

export default Login;

/*
{JSON.stringify(userInfo, null, 2)}
JSON.stringify = 자바 백엔드에서 가져온 값을 문자열로 반환
userInfo : 네이버에서 가져온 값
null : 특정값을 반환 
2 : 두 칸 들여쓰기
/ 자바에서 가져오는 데이터가 숫자인지, 문자인지 알 수 없는 상태이기 때문에
/ 안전하게 한번 더 문자열로 가져오겠다 설정

userInfo = 가져온 값에서 특정 값을 변경하거나 필터링할 것인가 ? = 변경 X null
=========================================================================
{     JSON    .     stringify(     userInfo     ,      null     ,     2     )}

const 유저정보 = {
   key : value
    id : "123456",
    name : "홍길동",
    phone : "010-9876-5432"
}
DB에 유저가 작성한 핸드폰 번호 중 -를 제거하고 01098765432로 저장하길 원함

const 번호변경하기 = (key, value) => {
    // 만약에 key 이름이 phone 이라면
    if (key === 'phone'){
        return value.replace("-",""); // 하이픈 제거하기
    }    
}

{JSON.stringify(유저정보, 번호변경하기, 2)}

번호변경하기 기능을 거친 유저정보는 아래와 같이 보임 
const 유저정보 = {
   key : value
    id : "123456",
    name : "홍길동",
    phone : "01098765432"
}

*/