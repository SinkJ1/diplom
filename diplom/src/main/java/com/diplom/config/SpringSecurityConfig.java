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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

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
		auth.userDetailsService(userDetailsService());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().authorizeRequests()
				.antMatchers(HttpMethod.GET, "/users/watching", "/users/expexted/", "/films", "/films/**", "/countries/**", "/countries", "/genres",
						"/genres/**", "/subscribe", "/subscribe/**", "/comments", "/comments/**")
				.permitAll()// .hasRole("ADMIN")
				.antMatchers(HttpMethod.GET, "/users/login", "/users/account/").authenticated()
				.antMatchers(HttpMethod.POST, "/users", "/users/**", "/films", "/films/**", "/countries/**",
						"/countries", "/genres", "/genres/**", "/subscribe", "/subscribe/**", "/comments",
						"/comments/**")
				.permitAll()
				.antMatchers(HttpMethod.DELETE, "/users", "/users/**", "/films", "/films/**", "/countries/**",
						"/countries", "/genres", "/genres/**", "/comments", "/comments/**")
				.permitAll()
				.antMatchers(HttpMethod.PUT, "/users", "/users/**", "/films", "/films/**", "/countries/**",
						"/countries", "/genres", "/genres/**", "/comments", "/comments/**")
				.permitAll()
				.and().formLogin().and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).permitAll().and()
				.httpBasic();
		http.csrf().disable();
	}

	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}

}