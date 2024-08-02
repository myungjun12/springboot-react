
const User = ({user, userList, setUserList, setEditUser}) => {
   

//1번과 2번은 동일 
//1번: const User = ({user, userList, setUserList, setEditUser}) => {
//2번: const User = (props) => {
    // const user = props.user;
    // const userList = props.userList;
    // const setUserList = props.setUserList;
    // const setEditUser = props.setEditUser; //수정버튼
  
      const deleteUser = () => {
       const newUserList = userList.filter((item) =>  item !== user 
    // const newUserList = userList.filter((item) => {return item !== user; });
      // 위의 두 방식은 같지만 리턴의 존재 유무에 따른 차이일 뿐
      );
  
      setUserList(newUserList);
    };
  
    return (
      <tr>
        <td>{user.name}</td>
  
        <td>{user.age}</td>
  
        <td>{user.gender}</td>
  
        <td>{user.phone}</td>
  
        <td>
          <button onClick={deleteUser}>삭제하기</button>
        </td>

        <td>
          <button onClick={() => setEditUser(user)}>수정하기</button>
        </td>
      </tr>
    );
  };
  export default User;