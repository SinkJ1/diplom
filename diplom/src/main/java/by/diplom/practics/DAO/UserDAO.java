package by.diplom.practics.DAO;

import org.springframework.stereotype.Repository;
import by.diplom.practics.interfaces.GenericDAO;
import by.diplom.practics.model.User;

@Repository
public class UserDAO extends AbstractGenericDAO<User> implements GenericDAO<User> {

	protected Class<User> getTClass() {
		return User.class;
	}

}
