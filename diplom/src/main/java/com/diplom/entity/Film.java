package com.diplom.entity;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="t_film")
public class Film implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3493948154248492047L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "film_id")
	private int id;
	
	@Column(name = "film_name")
	private String filmName;
	
	@OneToOne
	@JoinColumn(name = "producer_id")
	private User userId;
	
	@Column(name = "film_information")
	private String filmInformation;
	
	@Column(name = "film_release_date")
	private String filmReleaseDate;
	
	@Column(name = "film_raiting")
	private double filmRaiting;
	
	@Column(name = "img_path")
	private String imgPath;
	
	@Column(name = "film_country")
	private String filmCountry;
	
	@Column(name = "film_profit")
	private double filmProfit;
	
	@Column(name = "film_cost")
	private double filmCost;
	
	public Film() {
		
	}

	public Film(int id, String filmName, User userId, String filmInformation, String filmReleaseDate,
			double filmRaiting, String imgPath, String filmCountry, double filmProfit, double filmCost) {
		this.id = id;
		this.filmName = filmName;
		this.userId = userId;
		this.filmInformation = filmInformation;
		this.filmReleaseDate = filmReleaseDate;
		this.filmRaiting = filmRaiting;
		this.imgPath = imgPath;
		this.filmCountry = filmCountry;
		this.filmProfit = filmProfit;
		this.filmCost = filmCost;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFilmName() {
		return filmName;
	}

	public void setFilmName(String filmName) {
		this.filmName = filmName;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public String getFilmInformation() {
		return filmInformation;
	}

	public void setFilmInformation(String filmInformation) {
		this.filmInformation = filmInformation;
	}

	public String getFilmReleaseDate() {
		return filmReleaseDate;
	}

	public void setFilmReleaseDate(String filmReleaseDate) {
		this.filmReleaseDate = filmReleaseDate;
	}

	public double getFilmRaiting() {
		return filmRaiting;
	}

	public void setFilmRaiting(double filmRaiting) {
		this.filmRaiting = filmRaiting;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public String getFilmCountry() {
		return filmCountry;
	}

	public void setFilmCountry(String filmCountry) {
		this.filmCountry = filmCountry;
	}

	public double getFilmProfit() {
		return filmProfit;
	}

	public void setFilmProfit(double filmProfit) {
		this.filmProfit = filmProfit;
	}

	public double getFilmCost() {
		return filmCost;
	}

	public void setFilmCost(double filmCost) {
		this.filmCost = filmCost;
	}

	@Override
	public String toString() {
		return "Film [id=" + id + ", filmName=" + filmName + ", userId=" + userId + ", filmInformation="
				+ filmInformation + ", filmReleaseDate=" + filmReleaseDate + ", filmRaiting=" + filmRaiting
				+ ", imgPath=" + imgPath + ", filmCountry=" + filmCountry + ", filmProfit=" + filmProfit + ", filmCost="
				+ filmCost + "]";
	}
	
	
}
