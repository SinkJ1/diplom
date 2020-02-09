package by.diplom.practics.DAO;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import by.diplom.practics.model.User;

@Repository
public class UserDAOImpl extends AbstractGenericDAO<User> implements UserDAO {

	protected Class<User> getTClass() {
		return User.class;
	}

	@Override
	public User findByName(EntityManager em, String name) {
		return em.createQuery("from " + getTClass() + " where user_login =?1",getTClass()).getSingleResult();
	}

}

 