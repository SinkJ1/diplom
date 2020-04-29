package com.diplom.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

import com.diplom.services.UserDetailsServiceImpl;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	@Bean
	public UserDetailsService userDetailsService() {
		return new UserDetailsServiceImpl();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService()).passwordEncoder(NoOpPasswordEncoder.getInstance());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().authorizeRequests()
				.antMatchers(HttpMethod.GET, "/users", "/users/**", "/films", "/films/**", "/countries/**",
						"/countries", "/genres", "/genres/**", "/subscribe", "/subscribe/**")
				.permitAll()
				.antMatchers(HttpMethod.POST, "/users", "/users/**", "/films", "/films/**", "/countries/**",
						"/countries", "/genres", "/genres/**","/subscribe", "/subscribe/**")
				.permitAll()
				.antMatchers(HttpMethod.DELETE, "/users", "/users/**", "/films", "/films/**", "/countries/**",
						"/countries", "/genres", "/genres/**")
				.permitAll()
				.antMatchers(HttpMethod.PUT, "/users", "/users/**", "/films", "/films/**", "/countries/**",
						"/countries", "/genres", "/genres/**")
				.permitAll().anyRequest().authenticated().and().formLogin().and().logout().permitAll().and()
				.httpBasic();
		http.csrf().disable();
		http.headers().frameOptions().disable();
	}

}