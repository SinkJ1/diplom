package com.diplom.services;

import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

public class MapperService<E,D> {


	ModelMapper mapper = new ModelMapper();

	private Class<E> entityClass;
	
	private Class<D> dtoClass;
	
	public MapperService() {
		
	}
	
	public MapperService(Class<E> entityClass, Class<D> dtoClass) {
		this.entityClass = entityClass;
		this.dtoClass = dtoClass;
	}
	
	public E toEntity(D dto) {
		mapper.getConfiguration()
        .setMatchingStrategy(MatchingStrategies.STRICT);
		return Objects.isNull(dto) ? null : mapper.map(dto, entityClass);
	}
	
	public D toDto(E entity) {
		mapper.getConfiguration()
        .setMatchingStrategy(MatchingStrategies.STRICT);
		return Objects.isNull(entity) ? null : mapper.map(entity, dtoClass);
	}
	
}
