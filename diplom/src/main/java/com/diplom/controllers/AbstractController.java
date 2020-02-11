package com.diplom.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.diplom.services.GenericService;


public abstract class AbstractController<T> {

	@Autowired
	private GenericService<T> genericService;


	//@PostMapping(produces = "application/json;charset=UTF-8")
	public ResponseEntity<T> add(@RequestBody T entity) {
		genericService.add(entity);
		return ResponseEntity.ok().build();
	}

	@GetMapping//(produces = "application/json;charset=UTF-8")
	public List<T> getAll() {
		return genericService.getAll();
	}



}
