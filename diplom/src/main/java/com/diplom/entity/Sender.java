package com.diplom.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "t_sender")
public class Sender implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "email")
	private String eMail;

	@Column(name = "password")
	private String password;

	public Sender(Integer id, String eMail, String password) {
		this.id = id;
		this.eMail = eMail;
		this.password = password;
	}

	public Sender() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String geteMail() {
		return eMail;
	}

	public void seteMail(String eMail) {
		this.eMail = eMail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Sender [id=" + id + ", eMail=" + eMail + ", password=" + password + "]";
	}

}
