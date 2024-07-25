package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
@Controller 일반적인 컨트롤러를 정의
ViewResolver : MVC 패턴에서 컨트롤러가 처리를 마친 후에 어떤 뷰로 응답을 생성할지 결정하는 역할
메서드에서의 반환 값은 스프링 MVC의 ViewResolver를 통해 뷰(View)를 나타내는 뷰이름(html파일이름)으로 처리됩니다. 
주로 HTML 페이지를 (반환)렌더링하는 데 사용됩니다.

@RestController : RESTful 웹 서비스 컨트롤러 정의할때 ** 반환 값이 [JSON,XML] 등과 같은 데이터로 처리됩니다.
[@Controller+@ResponsBody]와 같음 

응답 : 서버 -> 유저 / 요청 : 유저 -> 서버 
@ResponseBody : 메서드의 반환값이 응답의 본문이 되고 [JSON, XML] 로 유저에게 전달 ** 뷰를 반환하지 않는 방식으로 바뀜 **
RESTful API를 구현할 때 데이터를 직접 반환

@RequestMapping("url경로") : 클라이언트이 요청(url)에 맞는 클래스나 메서드를 연결시켜주는 어노테이션이다.
만일 지정하지 않은 HTTP 메서드를 통해 요청이 들어오면 상태코드 405(Method Not Allowed)를 반환한다. Allowed : 허용된 / 메서드가 아니다.
 * */
	@RestController
	@RequestMapping("/api")
	public class HelloController {
		
		@GetMapping("/hello")
		public String sayHello() {
			return "Hello, World!!";
		}
	}
