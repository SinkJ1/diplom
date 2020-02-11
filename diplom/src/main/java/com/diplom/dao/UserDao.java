package com.diplom.dao;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.diplom.entity.User;

public interface UserDao extends Dao<User> {

	User findByName(EntityManager em, String name);
	
}
