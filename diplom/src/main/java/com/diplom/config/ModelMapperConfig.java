package com.diplom.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com")
public class ModelMapperConfig {
	
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
	
}
