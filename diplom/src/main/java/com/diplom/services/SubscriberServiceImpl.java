package com.diplom.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diplom.dao.SubscriberDao;
import com.diplom.entity.Film;
import com.diplom.entity.Subscriber;
import com.diplom.entity.dto.FilmDto;
import com.diplom.entity.dto.SubscriberDto;
import com.diplom.entity.dto.SubscriberDtoFilm;

@Service
public class SubscriberServiceImpl extends AbstractGenericService<Subscriber> implements SubscriberService {

	@Autowired
	SubscriberDao subDao;

	@Override
	public List<SubscriberDtoFilm> getFilmsByEmail(String email) {
		return subDao.getFilmsByEmail(entityManager, email).stream()
				.map(value -> new MapperService<Subscriber, SubscriberDtoFilm>(Subscriber.class, SubscriberDtoFilm.class).toDto(value))
				.collect(Collectors.toList());
	}

	@Override
	public List<SubscriberDto> getSubsByFilm(FilmDto film) {
		return subDao
				.getSubsByFilm(entityManager,
						new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toEntity(film))
				.stream()
				.map(value -> new MapperService<Subscriber, SubscriberDto>(Subscriber.class, SubscriberDto.class)
						.toDto(value))
				.collect(Collectors.toList());
	}

}
