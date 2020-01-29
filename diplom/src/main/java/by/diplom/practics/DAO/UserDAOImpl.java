package by.diplom.practics.DAO;

import org.springframework.stereotype.Repository;

import by.diplom.practics.model.User;

@Repository
public class UserDAOImpl extends AbstractGenericDAO<User> implements UserDAO {

	protected Class<User> getTClass() {
		return User.class;
	}

}
