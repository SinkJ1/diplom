package by.diplom.practics.DAO;

import org.springframework.stereotype.Repository;

import by.diplom.practics.model.Comment;

@Repository
public class CommentDAOImpl extends AbstractGenericDAO<Comment> implements GenericDAO<Comment>{

	@Override
	protected Class<Comment> getTClass() {
		return Comment.class;
	}

}
