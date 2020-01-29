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
	
	public void add(T object) {
		// TODO Auto-generated method stub
		
	}

	public void update(T object) {
		// TODO Auto-generated method stub
		
	}

	public void delete(Integer id) {
		// TODO Auto-generated method stub
		
	}

	public T findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional
	public List<T> getAll() {
		return dao.getAll(entityManager);
	}

}
