package com.diplom.dao;

import java.util.List;

import javax.persistence.EntityManager;


public interface Dao<T> {

	void add(EntityManager em, T entity);
	
	void update(EntityManager em, T entity);
	
	void delete(EntityManager em, T entity);
	
	T findById(EntityManager em, int id);
	
	List<T> getAll(EntityManager em);
}
