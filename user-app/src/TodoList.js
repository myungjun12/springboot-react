import { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]); // 배열에 여러개의 값이 들어갈 수 있음
  const [task, setTask] = useState(null); // task : 일 한개

  const 추가버튼 = () => {
    setTodos([...todos, task]);
    setTask('');
  }

  const 삭제버튼 = (index) => {  //todo는 여기서만 쓸 변수
    const 삭제후목록1 = todos.filter((todo, i) => i !== index); //filter는 true를 반환함 index와 번호가 같지 않은값이 true
    const 삭제후목록2 = todos.filter((todo, i) => i === index); // true 값이 index와 같은 값만을 저장함
    setTodos(삭제후목록1);
  }

  return (
    <div className="App">
      <h1>할일 리스트</h1>
      <h3>할일 추가하기</h3>
      <input  type='text' 
              value={task}   
              onChange={(e) => setTask(e.target.value)}        
      />
      <button onClick={추가버튼}>추가하기</button>
      <h3>할일 리스트 목록보기</h3>
      {todos.map( (todo, index) =>  (
       
        <li key={index}>
            {index} - {todo}
          <button  onClick={() => 삭제버튼(index)}>삭제하기</button>
        </li>
      ) )}
    </div>
  );
  
}

export default TodoList;