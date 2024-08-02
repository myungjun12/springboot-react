package com.kh.dto.service;

import java.util.List;

import com.kh.dto.User;

// 서비스 목록 리스트 여기는 목록만 작성해주고 implements로 오버라이드 해서 각 환경에 맞게 재사용할 것임
// 기능을 작성하기 전에 상세하게 작성할 기능 목록을 구성
public interface UserService { // 인터페이스에 있는 메서드는 재정의 해줘야한다.
	List<User> findAll();
	
	void insertUser(User user);
	
	void insertNaverUser(User user);
	
	void deleteUser(int id);
	
	void updateUser(User user);
}
