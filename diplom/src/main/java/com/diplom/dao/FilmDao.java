package com.diplom.dao;

import javax.persistence.EntityManager;

import com.diplom.entity.Film;

public interface FilmDao extends Dao<Film>{
	
	Film findByName(EntityManager em, String name);
	
}
