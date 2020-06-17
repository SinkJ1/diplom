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
		User updateUser = dao.findById(entityManager, user.getId());
		user.getExpectedFilms().stream().forEach(value -> value.setUser(updateUser));
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

	@Override
	public void userLikeFilmUpdate(User user) {
		user.getLicked().stream().forEach(value -> value.setUser(user));
		User updateUser = dao.findById(entityManager, user.getId());
		updateUser.setLicked(user.getLicked());
		dao.update(entityManager, updateUser);
	}

	@Override
	public void addComment(User user) {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void update(User user) {
		User dbUser = dao.findById(entityManager, user.getId());
		
		user.setBlockedStatus(dbUser.isBlockedStatus());
		user.setSubscribeDate(dbUser.getSubscribeDate());
		user.setUserImage(dbUser.getUserImage());
		user.setRole(dbUser.getRole());
		dao.update(entityManager, user);
	}

	@Override
	public void imgChange(User user) {
		User dbUser = dao.findById(entityManager, user.getId());
		dbUser.setUserImage(user.getUserImage());
		dao.update(entityManager, dbUser);
	}

}
