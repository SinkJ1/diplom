package com.diplom.entity.dto;

public class SeriesDto {

	private int id;

	private String path;

	private int seriesNumber;

	private int quality;

	public SeriesDto() {

	}

	public SeriesDto(int id, String path, int quality, int seriesNumber) {
		this.id = id;
		this.path = path;
		this.quality = quality;
		this.seriesNumber = seriesNumber;
	}

	public int getSeriesNumber() {
		return seriesNumber;
	}

	public void setSeriesNumber(int seriesNumber) {
		this.seriesNumber = seriesNumber;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
		return "SeriesDto [id=" + id + ", path=" + path + ", seriesNumber=" + seriesNumber + ", quality=" + quality
				+ "]";
	}

}
