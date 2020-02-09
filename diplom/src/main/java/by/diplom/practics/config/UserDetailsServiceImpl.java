package by.diplom.practics.config;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import by.diplom.practics.DAO.UserDAOImpl;
import by.diplom.practics.model.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@PersistenceContext
	protected EntityManager entityManager;
	
	@Autowired
	protected UserDAOImpl dao;

	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
		System.out.println(name);
		
		User user = new User();
		user.setLogin(name);
		user.setPassword("password");
		//User user = dao.findByName(entityManager, name);
		System.out.println(user.getName() + "->>>>");
		Set<GrantedAuthority> roles = new HashSet();
		roles.add(new SimpleGrantedAuthority("ADMIN"));
		UserDetails userDetails = new org.springframework.security.core.userdetails.User(user.getLogin(),user.getPassword(),
				roles);
		return userDetails;
	}

}
