package com.diplom.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.diplom.services.GenericService;

public abstract class AbstractController<T> {

	@Autowired
	private GenericService<T> genericService;
	

	@PostMapping
	public String add(@RequestBody T entity) {
		return new String();
	}

	@GetMapping
	public List<T> getAll() {
		return genericService.getAll();
	}



}
