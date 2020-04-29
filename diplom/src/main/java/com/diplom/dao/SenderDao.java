package com.diplom.dao;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Sender;

@Repository
public class SenderDao {

	public Sender get(EntityManager em) {
		return em.createQuery("from " + Sender.class.getName(),Sender.class).getSingleResult();
	}
	
	
}
