import './App.css';
import React, {useState} from "react";
import TodoList from './TodoList';


function UserList() {
// 유저 초기 목록과 유저가 추가될 목록을 담을 변수명을 설정
  const [users, setUsers] = useState([]); 
  const [name, setName] = useState([]);
  /* useState(''); useState(""); useState(null); 
  
   모두 초기값이 아무것도 없는 상태
   초기 변수 sers 가 아무런 목록을 담고 있지 않기 때문에 users = [] 빈 배열로 설정
  
   빈 배열인 상태 useState([]); : 배열이 비어있음
  
   const 기능 = () => { // return 구문이 필수가 아니고, 작성할 수 있다는 의미
   return "";
   }
  
    const 추가버튼 = () => (
    리턴 없음 / ?일반괄호 자체가 리턴을 의미하지 않나..?
    )

   =========================================
    1번
    const 인사기능 = () => {
    const 인사메세지 = "안녕하세요.";
    return 인사메세지 
    }

    2번
    <p>{인사기능}</p>

    const 인사기능 = () => {
      alert("좋은 아침입니다~!");
      }

  */

  /*
   3번
   <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
   <button                         onClick ={( ) => 삭제버튼}>삭제하기</button>
   
   e = 특정 변화는 값이나 변화가 있는 것을 감지
   button의 경우 버튼을 클릭하기만 하고, 특정 값이 랜덤으로 설정되는 부분이 없기 때문에
   버튼에서는 e와 같은 변수명을 생략

   input의 경우 사용자가 어떤 값을 작성할지 컴퓨터가 모르기 때문에 
    사용자가 어떤 값을 입력하다는 것을 이벤트로 받아드리고, 이벤트가 감지되면 value 값을 가져옴

  */
  const 추가버튼 = () => { 
     setUsers([...users, name]); // ...기존유저목록 , + setName(e.target.value)
     setName("");
  }

  //삭제할때 filter를 기억하자
  // ****** filter = 배열에서 결과가 true 인 값만 반환합니다.!!!!!!!*******
  const 삭제버튼 = (index) => {           // users에 있는 유저 목록 user = 유저명, i = users에 있는 유저가 저장된 번호
    const 삭제후유저목록 = users.filter( (user , i) => i !== index );
    //index와 고유번호가 같지 않은 모든 정보 유저목록에 저장후 setUsers에 저장
    setUsers(삭제후유저목록); 

    /*
    4번
    users  .  filter  (   (  user   ,   i    )   =>   i  !==  index );
  유저목록    필터사용       유저명  , 고유번호     고유번호 !== 삭제하려고누른번호 / 같지않아야 true
  filter는 true 값을 반환함으로 삭제할 고유번호를 제외한 true값을 반환한다.

   const 삭제후유저목록 = users.filter( (user , i) => i !== index );
   위 삭제 후 유저목록 기능은 삭제하기를 선택한 번호 1개만 삭제

   const 삭제후유저목록 = users.filter( (user , i) => i === index );
   삭제 후 유저목록 기능은 삭제하기를 선택한 번호 이외 모든 번호 지우기
    */
  }

  return (
    <div className="App">
     <h1>유저 리스트</h1>
     <h3>유저 추가하기</h3>
     <input type='text' 
            value={name}
            //이벤트가 발생하면 => 이벤트 발생지역 값 setName에 넣겠다.
            onChange={(e) => setName(e.target.value)} 
            /> 
      <button onClick={추가버튼}>추가하기</button>
     <h3>유저 리스트 목록보기</h3>
             {/* 유저1명, 고유번호 */}
     <pre><li> 인덱스 - 유저명 </li></pre>
     {users.map( (user, index) => ( // 일반 괄호 써야되는게 중요함 공식임 중괄호사용하면 막혀서 맵값을 이용못함 
      //      고유번호 유저1명
      <li key={index}>
        {index} - {user}
                    {/* (e)가 들어가지 않는 이유는 value 값이 없어서  */}
        <button onClick={() => 삭제버튼(index)}>삭제하기</button>
        </li> // 고유번호를 통해서 / user정보 / li태그로 보여줘
     ))}
     
    </div>
  );
}

export default UserList;

// 유저 리스트 목록보기 
//  {users.map( ( user, index ) => ( 
//  <li key={index}> {user} <li/> 
//  ) )}

/*
public String 추가버튼 {
  return String "자료값";
}
const 추가버튼 = () => {} //return 존재

public void 추가버튼 {
System.out.println("안녕하세요");
}
const 추가버튼 = () => () // return 없음
*/