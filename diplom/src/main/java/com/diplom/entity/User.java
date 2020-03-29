package com.diplom.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "t_user")
public class User implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer id;

	@Column(name = "user_name")
	private String name;
	
	@Column(name = "user_birdth_date")
	private String birdthDate;

	@Column(name = "user_login")
	private String login;
	
	@Column(name = "user_password")
	private String password;

	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private Set<Actor> actors;
	
	public User() {
	}

	public User(Integer id, String name, String birdthDate, String login, String password) {
		this.id = id;
		this.name = name;
		this.birdthDate = birdthDate;
		this.login = login;
		this.password = password;
	}

	
	
	public User(Integer id, String name, String birdthDate, String login, String password, Set<Actor> actors) {
		this.id = id;
		this.name = name;
		this.birdthDate = birdthDate;
		this.login = login;
		this.password = password;
		this.actors = actors;
	}

	public Set<Actor> getActors() {
		return actors;
	}

	public void setActors(Set<Actor> actors) {
		this.actors = actors;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBirdthDate() {
		return birdthDate;
	}

	public void setBirdthDate(String birdthDate) {
		this.birdthDate = birdthDate;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", birdthDate=" + birdthDate + ", login=" + login + ", password="
				+ password + ", actors=" + actors + "]";
	}

	


}
