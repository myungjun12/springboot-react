import { useState } from "react";
import User from "./User";
import "./default.css";
import EditForm from "./EditForm";

function App() {
    // DB에서 가져올 목록이 없거나, 초기에 예제 목록을 작성할 때 사용하는 방법
  const [userList, setUserList] = useState([
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },

    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },

    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
  ]);
  const [editUser, setEditUser] = useState(null);
  // useState(null); "", '' 셋다 빈값 처리

  /*
  1번 삼항연산자를 이용하지 않고 수정하기
   const updateUser = (유저수정하기) => {
    setUserList(userList.map(
        user => userList.map( user => updateUser )
     )); //유저수정하기 버튼을 누르면 유저 수정을 진행
  }
     2번 삼항연산자를 이용한 수정하기
   const updateUser = (유저수정하기) => {
    setUserList(userList.map(
        user => ( user === editUser ? updateUser : user )
     )); //유저수정하기 버튼을 누르면 유저 수정을 진행
  }

  */

  const updateUser = (유저수정하기) => {
    setUserList(userList.map(
        user => ( user === editUser ? updateUser : user )
     )); //유저수정하기 버튼을 누르면 유저 수정을 진행
  }

  return (
    <div className="App">
      <h1>회원 정보 출력</h1>

      <hr></hr>

      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>

            <th>나이</th>

            <th>성별</th>

            <th>전화번호</th>

            <th>삭제</th>

            <th>수정</th>
          </tr>
        </thead>

        <tbody>
          {userList.map((item, index) => (
              <User
              key={"user" + index}
              user={item} 
              // item 이라는 값을 통해서 userList에 있는 값을 포문 통해서 키인 user에 값에 넣어줌
              userList={userList}
              setUserList={setUserList}
              setEditUser = {setEditUser}
            />
          ))}
        </tbody>
      </table>
      {/* 만약에 수정하겠다 라는 버튼의 동작이 들어오면 수정하는 JS 파일을 보여주자 */}
      {editUser && (
        <EditForm user = {editUser} updateUser = {updateUser} />
      )}
    </div>
  );
}


export default App;
