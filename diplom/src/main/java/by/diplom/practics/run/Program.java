package by.diplom.practics.run;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import by.diplom.practics.config.JPAConfig;

@SpringBootApplication
public class Program {

	public static void main(String[] args) {
		SpringApplication.run(Program.class, args);
		
	}

}
