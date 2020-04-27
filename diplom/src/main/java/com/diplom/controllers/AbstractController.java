package com.diplom.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.diplom.services.GenericService;

public abstract class AbstractController<T> {

	@Autowired
	private GenericService<T> genericService;

	@PostMapping(value="/add")
	public void add(@RequestBody T entity) {
		genericService.add(entity);
	}

	@GetMapping(value = "{/id}")
	public T getById(@PathVariable("id") int id) {
		return (genericService.findById(id));
	}

}
