package com.devskiller.tasks.blog.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.devskiller.tasks.blog.model.Comment;
import com.devskiller.tasks.blog.model.Post;
import com.devskiller.tasks.blog.model.dto.CommentDto;
import com.devskiller.tasks.blog.model.dto.NewCommentDto;
import com.devskiller.tasks.blog.repository.PostRepository;

@Service
public class CommentService {

	private final PostRepository postRepository;

	public CommentService(PostRepository postRepository) {
		this.postRepository = postRepository;
	}

	/**
	 * Returns a list of all comments for a blog post with passed id.
	 *
	 * @param postId id of the post
	 * @return list of comments sorted by creation date descending - most recent
	 *         first
	 *
	 * @throws IllegalArgumentException if there is no blog post for passed postId
	 */
	public List<CommentDto> getCommentsForPost(String postId) {
		throw new UnsupportedOperationException();
	}

	/**
	 * Creates a new comment
	 *
	 * @param newCommentDto data of new comment
	 * @return id of the created comment public CommentDto(String id, String
	 *         comment, String author, LocalDateTime creationDate)
	 * @throws IllegalArgumentException if there is no blog post for passed
	 *                                  newCommentDto.postId
	 */

	public String addComment(NewCommentDto newCommentDto) {
		Post postRet = this.postRepository.findById(newCommentDto.getPostId()).get();
		postRet.setListComment(new ArrayList<Comment>());
		
		Comment Comment = new Comment(newCommentDto.getContent(), newCommentDto.getAuthor());
		
		postRet.getListComment().add(Comment);

		postRet=   this.postRepository.save(postRet);
		
	 postRet = this.postRepository.findById(newCommentDto.getPostId()).get();
		
		return postRet.getId();
		
	}
}
