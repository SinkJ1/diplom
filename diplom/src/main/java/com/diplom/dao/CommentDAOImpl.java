package com.diplom.dao;


import org.springframework.stereotype.Repository;

import com.diplom.entity.Comment;



@Repository
public class CommentDAOImpl extends GenericDao<Comment> implements Dao<Comment>{

	@Override
	protected Class<Comment> getTClass() {
		return Comment.class;
	}

}
