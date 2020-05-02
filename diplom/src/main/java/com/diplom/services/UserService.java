package com.diplom.services;

import com.diplom.entity.User;

public interface UserService extends GenericService<User> {
	User findByName(String name);
	User findByLogin(String login);
}
