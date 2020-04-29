package com.diplom.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.diplom.entity.Subscriber;
import com.diplom.entity.dto.FilmDto;
import com.diplom.entity.dto.SubscriberDto;
import com.diplom.entity.dto.SubscriberDtoFilm;
import com.diplom.services.SubscriberServiceImpl;

@CrossOrigin(methods = { RequestMethod.POST, RequestMethod.GET })
@RestController
@RequestMapping(value = "/subscribe")
public class SubscriberController {

	@Autowired
	private SubscriberServiceImpl service;
	
	@PostMapping(value = "/add")
	public void add(@RequestBody Subscriber sub) {
		service.add(sub);
	}
	
	@GetMapping(value = "/{email}")
	public List<SubscriberDtoFilm> getByEmail(@PathVariable("email") String email){
		return service.getFilmsByEmail(email);
	}
	
	@PostMapping(value = "/test")
	public List<SubscriberDto> get(@RequestBody FilmDto film){
		return service.getSubsByFilm(film);
	}
	
	
}
 