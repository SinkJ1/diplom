package com.diplom.dao;

import java.util.List;

import javax.persistence.EntityManager;

public interface IntermediateEntityDao <T,E> extends Dao<T>{
	
	List<T> getByEntity(EntityManager em, E entity);
	
}
