package com.diplom.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

public abstract class GenericDao<T> implements Dao<T> {

	abstract Class<T> getTClass();

	abstract String nameColumn();

	public void add(EntityManager em, T entity) {
		em.persist(entity);
	}

	public void update(EntityManager em, T entity) {
		em.merge(entity);
	}

	public void delete(EntityManager em, T entity) {
		em.remove(em.contains(entity) ? entity : em.merge(entity));
	}

	public T findByName(EntityManager em, String name) {
		return em.createQuery("from " + getTClass().getName() + " where " + nameColumn() + " = " + "'" + name + "'", getTClass())
				.getSingleResult();
	}

	public T findById(EntityManager em, int id) {
		return em.find(getTClass(), id);
	}

	public List<T> getAll(EntityManager em) {
		return em.createQuery("from " + getTClass().getName() + "", getTClass()).getResultList();
	}
}
