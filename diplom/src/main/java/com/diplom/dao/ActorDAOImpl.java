package com.diplom.dao;


import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Actor;
import com.diplom.entity.Film;


@Repository
public class ActorDAOImpl extends GenericDao<Actor> implements IntermediateEntityDao<Actor,Film>{

	@Override
	protected Class<Actor> getTClass() {
		return Actor.class;
	}

	@Override
	String nameColumn() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Actor> getByEntity(EntityManager em, Film entity) {
		return em.createQuery("from " + Actor.class.getName() + " where film.id = " + entity.getId() + "", Actor.class).getResultList();
	}

}
