package com.diplom.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diplom.dao.FilmDao;
import com.diplom.entity.Film;
import com.diplom.entity.dto.FilmDto;

@Service
public class FilmServiceImpl extends AbstractGenericService<Film> implements FilmService {

	@Autowired
	private FilmDao dao;

	@Override
	public Film findByName(String name) {
		return dao.findByName(entityManager, name);
	}

	@Transactional
	@Override
	public List<FilmDto> getAllDto() {
		
		List<FilmDto> dtoList = new ArrayList<FilmDto>();
		
		for (Film filmList : dao.getAll(entityManager)) {
			dtoList.add(new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(filmList));
		}
		
		return dtoList;
	}

}
