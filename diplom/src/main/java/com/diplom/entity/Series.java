package com.diplom.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Table
@Entity(name = "t_series")
public class Series {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "series_id")
	private int id;

	@Column(name = "series_number")
	private int seriesNumber;

	@Column(name = "series_path")
	private String path;

	@Column(name = "series_quality")
	private int quality;

	@OneToOne
	@JoinColumn(name = "season")
	private Season season;

	public Series() {

	}

	public Series(int id, int seriesNumber, String path, int quality, Season season) {
		this.id = id;
		this.seriesNumber = seriesNumber;
		this.path = path;
		this.quality = quality;
		this.season = season;
	}

	public Season getSeason() {
		return season;
	}

	public void setSeason(Season season) {
		this.season = season;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSeriesNumber() {
		return seriesNumber;
	}

	public void setSeriesNumber(int seriesNumber) {
		this.seriesNumber = seriesNumber;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public int getQuality() {
		return quality;
	}

	public void setQuality(int quality) {
		this.quality = quality;
	}

	@Override
	public String toString() {
		return "Series [id=" + id + ", seriesNumber=" + seriesNumber + ", path=" + path + ", quality=" + quality
				+ ", season=" + season + "]";
	}

}
