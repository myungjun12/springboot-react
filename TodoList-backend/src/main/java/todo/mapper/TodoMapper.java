package todo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import todo.dto.Todo;
import todo.dto.TodoMember;

@Mapper // Mapper 어노테이션을 통해서 변수명이 xml에서 입력한 id 값과 일치해야 읽어올 수 있다.
public interface TodoMapper {
	
	int idCheck(String id);
	
	int signup(TodoMember member);
	
	TodoMember login(TodoMember member);
	
	List<Todo> selectTodoList(int todoMemberNo);
	
	int insert(Todo todo);
	
	int update(Todo todo);
	
	int delete(int todoNo);
	
}
