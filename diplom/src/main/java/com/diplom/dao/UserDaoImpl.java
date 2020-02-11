package com.diplom.dao;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.diplom.entity.User;

@Repository
public class UserDaoImpl extends GenericDao<User> implements UserDao {

	public User findByName(EntityManager em, String name) {
		return em.createQuery("from " + User.class.getName() + " where user_login =" + "'" + name + "'", User.class).getSingleResult();
	}

	@Override
	Class<User> getTClass() {
		return User.class;
	}
}
