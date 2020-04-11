package com.diplom.dao;


import org.springframework.stereotype.Repository;

import com.diplom.entity.Actor;


@Repository
public class ActorDAOImpl extends GenericDao<Actor> implements Dao<Actor>{

	@Override
	protected Class<Actor> getTClass() {
		return Actor.class;
	}

	@Override
	String nameColumn() {
		// TODO Auto-generated method stub
		return null;
	}

}
