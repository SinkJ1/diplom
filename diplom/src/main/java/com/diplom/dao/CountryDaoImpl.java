package com.diplom.dao;

import org.springframework.stereotype.Repository;

import com.diplom.entity.Country;

@Repository
public class CountryDaoImpl extends GenericDao<Country> implements CountryDao{

	@Override
	Class<Country> getTClass() {
		return Country.class;
	}

	@Override
	String nameColumn() {
		return " where name =";
	}

}
