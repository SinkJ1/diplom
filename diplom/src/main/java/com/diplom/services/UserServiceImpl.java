package com.diplom.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diplom.dao.UserDao;
import com.diplom.entity.User;
import com.diplom.entity.UserRole;

@Service
public class UserServiceImpl extends AbstractGenericService<User> implements UserService {

	@Autowired
	private UserDao dao;

	@Override
	public void add(User user) {
		user.setRole(UserRole.user);
		dao.add(entityManager, user);
	}

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

	@Override
	public void userExpectedFilmUpdate(User user) {
		user.getExpectedFilms().stream().forEach(value -> value.setUser(user));
		User updateUser = dao.findById(entityManager, user.getId());
		updateUser.setExpectedFilms(user.getExpectedFilms());
		dao.update(entityManager, updateUser);
	}

	@Override
	public void userWatchFilmUpdate(User user) {
		user.getWatch().stream().forEach(value -> value.setUser(user));
		User updateUser = dao.findById(entityManager, user.getId());
		updateUser.setWatch(user.getWatch());
		dao.update(entityManager, updateUser);
	}

}
