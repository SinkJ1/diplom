package by.diplom.practics.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "t_user")
public class User implements Serializable {

	private static final long serialVersionUID = -6482454008708191446L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer id;

	@Column(name = "user_name")
	private String name;
	
	@Column(name = "user_birdth_date")
	private String birdthDate;

	public User() {
	}

	public User(Integer id, String name, String birdthDate) {
		this.id = id;
		this.name = name;
		this.birdthDate = birdthDate;
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

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", birdthDate=" + birdthDate + "]";
	}

	
	
}
