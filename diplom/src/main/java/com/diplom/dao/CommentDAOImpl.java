package com.diplom.dao;


import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Comment;
import com.diplom.entity.Film;

@Repository
public class CommentDAOImpl extends GenericDao<Comment> implements IntermediateEntityDao<Comment,Film>{

	@Override
	protected Class<Comment> getTClass() {
		return Comment.class;
	}

	@Override
	String nameColumn() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Comment> getByEntity(EntityManager em, Film entity) {
		return em.createQuery("from " + Comment.class.getName() + " where film.id = " + entity.getId() + "", Comment.class).getResultList();
	}

}
