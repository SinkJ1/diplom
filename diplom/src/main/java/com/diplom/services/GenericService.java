package com.diplom.services;

import java.util.List;
import java.util.Map;

public interface GenericService<T> {

	void add(T object);

	void update(T object);

	void delete(T entity);

	T findById(Integer id);

	List<T> getAll();

}
