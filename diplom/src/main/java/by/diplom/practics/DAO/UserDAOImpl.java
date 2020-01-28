package by.diplom.practics.DAO;

import org.springframework.stereotype.Repository;
import by.diplom.practics.interfaces.UserDAO;
import by.diplom.practics.model.User;

@Repository
public class UserDAOImpl extends AbstractGenericDAO<User> implements UserDAO {

	private static UserDAOImpl instance;

	private UserDAOImpl() {
	}

	protected Class<User> getTClass() {
		return User.class;

	}

	public static UserDAOImpl getInstance() {
		if (instance == null) {
			instance = new UserDAOImpl();
			return instance;
		}
		return instance;
	}

}
