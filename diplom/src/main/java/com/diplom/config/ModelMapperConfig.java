package com.diplom.config;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com")
public class ModelMapperConfig {
	
	@Bean
	public ModelMapper modelMapper() {
		 ModelMapper modelMapper = new ModelMapper();
		    modelMapper.getConfiguration()
		        .setMatchingStrategy(MatchingStrategies.STRICT);
		    return modelMapper;
	}
	
}
