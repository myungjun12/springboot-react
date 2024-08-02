package com.kh.dto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.dto.User;
import com.kh.mapper.UserMapper;
/*
 * implements 로 상속받는 interface service는
 * 기능에 대한 목록이 작성이 되어있을 뿐이지
 * 상세한 기능에 대해서 작성이 된 것이 아님
 * 상속을 받은 클래스는 적어놓은 각각의 목록들의
 * 기능을 설정해줘야하기 때문에
 * 설정이 안된 목록이 있으면 빨간줄이 뜸
 * */
@Service //서비스 기능을 상세하게 작성해주는 공간
public class UserServiceImpl implements UserService {
	
	@Autowired // 자동연결 도우미
	private UserMapper userMapper;
	
	@Override
	public List<User> findAll(){
		return userMapper.findAll();
	}
	
	@Override
	public void insertUser(User user) {
		userMapper.insertUser(user);
	}
	
	@Override
	public void insertNaverUser(User user) {
		userMapper.insertNaverUser(user);
	}
	
	@Override
	public void deleteUser(int id) {
		userMapper.deleteUser(id);
	}
	
	@Override
	public void updateUser(User user) {
		userMapper.updateUser(user);
	}
}
