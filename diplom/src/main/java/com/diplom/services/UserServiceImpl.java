package com.diplom.services;


import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diplom.dao.UserDao;
import com.diplom.entity.User;

@Service
public class UserServiceImpl extends AbstractGenericService<User> implements UserService {

	@Autowired
	private UserDao dao;
	
	@Override
	public User findByName(String name) {
		return dao.findByName(entityManager, name);
	}

	@Override
	@Transactional
	public List<User> getAll() {
		return dao.getAll(entityManager);
	}

	@Override
	public User findByLogin(String login) {
		return dao.findByLogin(entityManager, login);
	}

}
