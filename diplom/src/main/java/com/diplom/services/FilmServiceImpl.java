package com.diplom.services;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diplom.controllers.EntryModelParamsFilmByParametr;
import com.diplom.dao.ActorDAOImpl;
import com.diplom.dao.CommentDAOImpl;
import com.diplom.dao.FilmCountryDaoImpl;
import com.diplom.dao.FilmDao;
import com.diplom.dao.FilmGenreDaoImpl;
import com.diplom.dao.SenderDao;
import com.diplom.dao.SubscriberDao;
import com.diplom.entity.Film;
import com.diplom.entity.User;
import com.diplom.entity.dto.FilmDto;
import com.diplom.entity.dto.common.FilmImgDto;

@Service
public class FilmServiceImpl extends AbstractGenericService<Film> implements FilmService {

	@Autowired
	private FilmDao dao;

	@Autowired
	private ActorDAOImpl actorDao;

	@Autowired
	private FilmCountryDaoImpl countryDao;

	@Autowired
	private FilmGenreDaoImpl genreDao;

	@Autowired
	private CommentDAOImpl commentDao;

	@Autowired
	private SenderDao sender;

	@Autowired
	SubscriberDao subDao;

	@Override
	public void add(Film object) {
		object.getActors().stream().forEach(value -> value.setFilm(object));
		object.getGenres().stream().forEach(value -> value.setFilm(object));
		object.getCountries().stream().forEach(value -> value.setFilm(object));
		dao.add(entityManager, object);
	}

	@Transactional
	@Override
	public void update(Film object) {
		object.getActors().stream().forEach(value -> value.setFilm(object));
		object.getGenres().stream().forEach(value -> value.setFilm(object));
		object.getCountries().stream().forEach(value -> value.setFilm(object));

		if (object.getFilmPlayer() != dao.findById(entityManager, object.getId()).getFilmPlayer()) {
			subDao.getSubsByFilm(entityManager, object).stream()
					.forEach(value -> Send("фильм - " + object.getFilmName() + " вышел", value.getUser().getLogin()));
		}

		deleteReference(object);
		dao.update(entityManager, object);
	}

	@Transactional
	@Override
	public void delete(Film object) {
		deleteReference(object);
		commentDao.getByEntity(entityManager, object).stream()
				.forEach(value -> commentDao.delete(entityManager, value));
		dao.delete(entityManager, object);
	}

	private void deleteReference(Film film) {
		actorDao.getByEntity(entityManager, film).stream().forEach(value -> actorDao.delete(entityManager, value));
		countryDao.getByEntity(entityManager, film).stream().forEach(value -> countryDao.delete(entityManager, value));
		genreDao.getByEntity(entityManager, film).stream().forEach(value -> genreDao.delete(entityManager, value));
	}

	@Override
	public FilmDto findByName(String name) {
		return new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(dao.findByName(entityManager, name));
	}

	@Transactional
	@Override
	public List<FilmDto> getAllDto(List<Film> flimList) {
		return flimList.stream().map(value -> new MapperService<Film, FilmDto>(Film.class, FilmDto.class).toDto(value))
				.collect(Collectors.toList());
	}

	@Override
	public List<FilmDto> getTopFilms(int topValue) {
		return getAllDto(dao.getTopFilms(entityManager, topValue));
	}

	@Override
	public List<FilmDto> getFilmsByParametr(EntryModelParamsFilmByParametr parametrs) {
		return getAllDto(dao.getFilmsByParam(entityManager, createParams(parametrs).toString()));
	}

	@Override
	public List<FilmDto> findFilmByYear(int year) {
		return getAllDto(dao.getFilmByYear(entityManager, year));
	}

	private StringBuilder createParams(EntryModelParamsFilmByParametr parametrs) {
		StringBuilder where = new StringBuilder();
		if (parametrs.getActor() != null) {
			where.append(" a.user.name=" + "'" + parametrs.getActor() + "'");
		}
		if (parametrs.getCountry() != null) {
			if (where.length() > 0) {
				where.append(" and fc.country.name=" + "'" + parametrs.getCountry() + "'");
			} else {
				where.append(" fc.country.name=" + "'" + parametrs.getCountry() + "'");
			}
		}
		if (parametrs.getProducer() != null) {
			if (where.length() > 0) {
				where.append(" and f.userId.name=" + "'" + parametrs.getProducer() + "'");
			} else {
				where.append(" f.userId.name=" + "'" + parametrs.getProducer() + "'");
			}
		}
		if (parametrs.getYear() != null) {
			if (where.length() > 0) {
				where.append(" and TO_CHAR(f.filmReleaseDate,'YYYY')=" + "'" + parametrs.getYear() + "'");
			} else {
				where.append(" TO_CHAR(f.filmReleaseDate,'YYYY')=" + "'" + parametrs.getYear() + "'");
			}
		}

		return where;
	}

	@Override
	public List<FilmImgDto> getLastXFilms(int xValue) {
		return dao.getLastXFilms(entityManager, xValue).stream()
				.map(value -> new MapperService<Film, FilmImgDto>(Film.class, FilmImgDto.class).toDto(value))
				.collect(Collectors.toList());
	}

	@Override
	public List<FilmDto> getCommingSonFilms(Date date) {
		return getAllDto(dao.getCommingsFilms(entityManager, date));
	}

	@Override
	public List<FilmDto> findByShortName(String name) {
		return getAllDto(dao.findByShortName(entityManager, name));
	}

	private void Send(String text, String recevier) {
		try {
			new MailService(sender.get(entityManager)).sendMail(recevier, text);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public void commentUpdate(Film filmList) {
		filmList.getComments().stream().forEach(value -> value.setFilm(filmList));
		Film updateFilm = dao.findById(entityManager, filmList.getId());
		updateFilm.setComments(filmList.getComments());
		dao.update(entityManager, updateFilm);
	}

	@Transactional
	@Override
	public void rateUpdate(Film film) {
		Film updateFilm = dao.findById(entityManager, film.getId());
		updateFilm.setFilmRaiting((film.getFilmRaiting() + updateFilm.getFilmRaiting()) / 2);
		dao.update(entityManager, updateFilm);
	}

	@Transactional
	@Override
	public void deleteComment(Film film, int id) {
		commentDao.getByEntity(entityManager, film).stream().filter(comment -> comment.getId() == id)
				.forEach(value -> commentDao.delete(entityManager, value));
	}

	@Override
	public Film getCommentsByFilmId(int id) {
		return dao.findById(entityManager, id);
	}

}
