package by.diplom.practics.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import by.diplom.practics.model.User;

@CrossOrigin(origins = { "http://localhost:8080", "http://localhost:3000" })
@RestController
@RequestMapping(value = "/users")
public class UserController extends AbstractController<User>{



}
