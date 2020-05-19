package com.diplom.services;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.diplom.dao.UserDao;
import com.diplom.entity.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private EntityManager em;
	
	@Autowired
	private UserDao dao;

	@Override
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		User user = dao.findByLogin(em, login);
		Set<GrantedAuthority> roles = new HashSet();
		roles.add(new SimpleGrantedAuthority("ROLE_" + user.getRole().toString().toUpperCase()));
		UserDetails userDetails = new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(),
				roles);
		return userDetails;
	}

}
