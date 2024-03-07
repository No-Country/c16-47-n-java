package com.nocountry.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

//@SpringBootApplication
//public class BackendApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(BackendApplication.class, args);
//	}

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(BackendApplication.class);
		app.addListeners(new CustomApplicationListener());
		app.run(args);
	}

	static class CustomApplicationListener implements ApplicationListener<ContextRefreshedEvent> {
		@Override
		public void onApplicationEvent(ContextRefreshedEvent event) {
			System.out.println("---------------------------------------------");
			System.out.println("¡La aplicación se ha iniciado correctamente!");
			System.out.println("---------------------------------------------");
		}
	}
}