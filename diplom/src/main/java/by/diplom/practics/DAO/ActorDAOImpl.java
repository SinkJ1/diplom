package by.diplom.practics.DAO;

import org.springframework.stereotype.Repository;

import by.diplom.practics.model.Actor;

@Repository
public class ActorDAOImpl extends AbstractGenericDAO<Actor> implements GenericDAO<Actor>{

	@Override
	protected Class<Actor> getTClass() {
		return Actor.class;
	}

}
