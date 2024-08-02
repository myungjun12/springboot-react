package com.kh.dto;

import lombok.*;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
	private int id;
	private String name;
	private String email;
	private String password;
	private String profileImage;
	
}
