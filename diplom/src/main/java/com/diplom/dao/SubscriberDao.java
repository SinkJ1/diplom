package com.diplom.dao;

import java.util.List;

import javax.persistence.EntityManager;

import com.diplom.entity.Film;
import com.diplom.entity.Subscriber;

public interface SubscriberDao extends Dao<Subscriber>{

	List<Subscriber> getFilmsByEmail(EntityManager em, String email);
	
	List<Subscriber> getSubsByFilm(EntityManager em, Film film);
	
}
