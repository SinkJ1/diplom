package com.diplom.entity;

import java.io.Serializable;
import java.util.Set;
import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name = "t_film")
public class Film implements Serializable {

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
	private Date filmReleaseDate;

	@Column(name = "film_raiting")
	private double filmRaiting;

	@Column(name = "img_path")
	private String imgPath;

	@Column(name = "film_profit")
	private double filmProfit;

	@Column(name = "film_cost")
	private double filmCost;

	@Column(name = "block_to_watch")
	private boolean blockToWatch;

	@Column(name = "premium_status")
	private boolean premiumStatus;

	@Column(name = "film_player")
	private String filmPlayer;

	@OneToMany(mappedBy = "film", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Actor> actors;

	@OneToMany(mappedBy = "film", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<FilmCountry> countries;

	@OneToMany(mappedBy = "film", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<FilmsGenre> genres;

	@OneToMany(mappedBy = "film", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Subscriber> subs;

	public Film() {

	}

	public Film(int id, String filmName, User userId, String filmInformation, Date filmReleaseDate, double filmRaiting,
			String imgPath, double filmProfit, double filmCost, boolean blockToWatch, boolean premiumStatus,
			String filmPlayer, Set<Actor> actors, Set<FilmCountry> countries, Set<FilmsGenre> genres,
			Set<Subscriber> subs) {
		this.id = id;
		this.filmName = filmName;
		this.userId = userId;
		this.filmInformation = filmInformation;
		this.filmReleaseDate = filmReleaseDate;
		this.filmRaiting = filmRaiting;
		this.imgPath = imgPath;
		this.filmProfit = filmProfit;
		this.filmCost = filmCost;
		this.blockToWatch = blockToWatch;
		this.premiumStatus = premiumStatus;
		this.filmPlayer = filmPlayer;
		this.actors = actors;
		this.countries = countries;
		this.genres = genres;
		this.subs = subs;
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

	public Date getFilmReleaseDate() {
		return filmReleaseDate;
	}

	public void setFilmReleaseDate(Date filmReleaseDate) {
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

	public Set<Actor> getActors() {
		return actors;
	}

	public void setActors(Set<Actor> actors) {
		this.actors = actors;
	}

	public Set<FilmCountry> getCountries() {
		return countries;
	}

	public void setCountries(Set<FilmCountry> countries) {
		this.countries = countries;
	}

	public Set<FilmsGenre> getGenres() {
		return genres;
	}

	public void setGenres(Set<FilmsGenre> genres) {
		this.genres = genres;
	}

	public boolean isBlockToWatch() {
		return blockToWatch;
	}

	public void setBlockToWatch(boolean blockToWatch) {
		this.blockToWatch = blockToWatch;
	}

	public boolean isPremiumStatus() {
		return premiumStatus;
	}

	public void setPremiumStatus(boolean premiumStatus) {
		this.premiumStatus = premiumStatus;
	}

	public String getFilmPlayer() {
		return filmPlayer;
	}

	public void setFilmPlayer(String filmPlayer) {
		this.filmPlayer = filmPlayer;
	}

	public Set<Subscriber> getSubs() {
		return subs;
	}

	public void setSubs(Set<Subscriber> subs) {
		this.subs = subs;
	}

	@Override
	public String toString() {
		return "Film [id=" + id + ", filmName=" + filmName + ", userId=" + userId + ", filmInformation="
				+ filmInformation + ", filmReleaseDate=" + filmReleaseDate + ", filmRaiting=" + filmRaiting
				+ ", imgPath=" + imgPath + ", filmProfit=" + filmProfit + ", filmCost=" + filmCost + ", blockToWatch="
				+ blockToWatch + ", premiumStatus=" + premiumStatus + ", filmPlayer=" + filmPlayer + ", actors="
				+ actors + ", countries=" + countries + ", genres=" + genres + ", subs=" + subs + "]";
	}

}
