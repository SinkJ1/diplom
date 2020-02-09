package by.diplom.practics.services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import by.diplom.practics.DAO.GenericDAO;


public abstract class AbstractGenericService<T> implements GenericService<T> {

	@PersistenceContext
	protected EntityManager entityManager;
	
	@Autowired
	protected GenericDAO<T> dao;
	
	@Transactional
	public void add(T object) {
		dao.add(entityManager, object);
	}

	@Transactional
	public void update(T object) {
		dao.update(entityManager, object);
	}

	@Transactional
	public void delete(Integer id) {
		dao.delete(entityManager, id);
	}

	@Transactional
	public T findById(Integer id) {
		return dao.findById(entityManager, id);
	}

	@Transactional
	public List<T> getAll() {
		return dao.getAll(entityManager);
	}

}
