package com.kh.dto.service;

import java.util.List;

import com.kh.dto.User;

// 서비스 목록 리스트 여기는 목록만 작성해주고 implements로 오버라이드 해서 각 환경에 맞게 재사용할 것임
public interface UserService {
	List<User> findAll();
	void insertUser(User user);
}
