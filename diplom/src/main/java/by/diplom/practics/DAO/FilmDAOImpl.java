package by.diplom.practics.DAO;

import org.springframework.stereotype.Repository;

import by.diplom.practics.model.Film;

@Repository
public class FilmDAOImpl extends AbstractGenericDAO<Film> implements GenericDAO<Film> {

	@Override
	protected Class<Film> getTClass() {
		return Film.class;
	}

}
