package by.diplom.practics.DAO;

import javax.persistence.EntityManager;

import by.diplom.practics.model.User;

public interface UserDAO extends GenericDAO<User>{
	
	User findByName(EntityManager em, String name);
}
