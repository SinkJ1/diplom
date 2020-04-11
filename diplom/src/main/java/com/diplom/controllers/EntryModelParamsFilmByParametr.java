package com.diplom.controllers;

import org.springframework.web.bind.annotation.RequestParam;

public class EntryModelParamsFilmByParametr {

	String country;
	String year;
	String producer;
	String actor;
	public EntryModelParamsFilmByParametr(@RequestParam(value = "country", required = false, defaultValue = "") String country,
			@RequestParam(value = "year", required = false, defaultValue = "") String year,
			@RequestParam(value = "producer", required = false, defaultValue = "") String producer,
			@RequestParam(value = "actor", required = false, defaultValue = "") String actor) {
		this.country = country;
		this.year = year;
		this.producer = producer;
		this.actor = actor;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getProducer() {
		return producer;
	}
	public void setProducer(String producer) {
		this.producer = producer;
	}
	public String getActor() {
		return actor;
	}
	public void setActor(String actor) {
		this.actor = actor;
	}
	@Override
	public String toString() {
		return "EntryModelParamsFilmByParametr [country=" + country + ", year=" + year + ", producer=" + producer
				+ ", actor=" + actor + "]";
	}
	
	
	

}
