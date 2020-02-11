package com.diplom.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;


public abstract class GenericDao<T> implements Dao<T> {
	
	abstract Class<T> getTClass();
	
	public void add(EntityManager em, T entity) {
		em.persist(entity);
	}

	public void update(EntityManager em, T entity) {
		em.merge(entity);
	}

	public void delete(EntityManager em, T entity) {
		em.remove(entity);
	}

	public T findById(EntityManager em, int id) {
		return em.find(getTClass(), id);
	}
	
	public List<T> getAll(EntityManager em) {
		return em.createQuery("from " + getTClass().getName() + "", getTClass()).getResultList();
	}
}
