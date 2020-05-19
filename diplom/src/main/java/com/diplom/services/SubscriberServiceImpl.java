package com.diplom.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diplom.dao.SubscriberDao;
import com.diplom.entity.Subscriber;

@Service
public class SubscriberServiceImpl extends AbstractGenericService<Subscriber> implements SubscriberService {

	@Autowired
	SubscriberDao subDao;


}
