package com.diplom.controllers;

import com.diplom.entity.Comment;
import com.diplom.entity.dto.commet.CommentDto;
import com.diplom.services.CommentService;
import com.diplom.services.MapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin( methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
        RequestMethod.PUT })
@RestController
@RequestMapping(value = "/comments")
public class CommentController {

	@Autowired
	CommentService commentService;
	
	@PostMapping(value = "/add")
	public void add(@RequestBody CommentDto comment) {
		commentService.add(new MapperService<Comment, CommentDto>(Comment.class, CommentDto.class).toEntity(comment));
	}
	
	@PutMapping(value = "/update")
	public void update(@RequestBody CommentDto comment) {
		commentService.update(new MapperService<Comment, CommentDto>(Comment.class, CommentDto.class).toEntity(comment));
	}
	
	@DeleteMapping(value = "/delete")
	public void delete(@RequestBody CommentDto comment) {
		commentService.delete(new MapperService<Comment, CommentDto>(Comment.class, CommentDto.class).toEntity(comment));
	}

}
