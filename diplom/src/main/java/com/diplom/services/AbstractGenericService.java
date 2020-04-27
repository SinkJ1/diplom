package com.diplom.services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.diplom.dao.GenericDao;

public abstract class AbstractGenericService<T> implements GenericService<T> {

	@PersistenceContext
	protected EntityManager entityManager;
	
	@Autowired
	protected GenericDao<T> dao;
	
	@Transactional
	public void add(T object) {
		dao.add(entityManager, object);
	}

	@Transactional
	public void update(T object) {
		dao.update(entityManager, object);
	}

	@Transactional
	public void delete(T entity) {
		dao.delete(entityManager, entity);
	}

	@Transactional
	public T findById(Integer id) {
		return dao.findById(entityManager, id);
	}
	
	@Transactional
	public T findByName2(String name) {
		return dao.findByName(entityManager, name);
	}
	
	@Transactional
	public List<T> getAll() {
		return dao.getAll(entityManager);
	}

}
