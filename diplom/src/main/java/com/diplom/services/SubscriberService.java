package com.diplom.services;

import java.util.List;

import com.diplom.entity.Subscriber;
import com.diplom.entity.dto.FilmDto;
import com.diplom.entity.dto.SubscriberDto;
import com.diplom.entity.dto.SubscriberDtoFilm;

public interface SubscriberService extends GenericService<Subscriber>{

	List<SubscriberDtoFilm> getFilmsByEmail(String email);
	
	List<SubscriberDto> getSubsByFilm(FilmDto film);
	
}
