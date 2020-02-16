package com.diplom.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class ModelMapperService<E,D> {
	
	private E e;
	
	private Class<E> entity = e;
	
	private D dto;
	
	Class<D> d;
	
	@Autowired
	private ModelMapper mapper;
	
	public E mapToEntity(D dto) {
		return mapper.map(dto,entity);
	}
	
}
