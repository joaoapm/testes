package com.devskiller.tasks.blog.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class Comment {

	@Id
	private String id;

	private String comment;

	private String author;

	private LocalDateTime creationDate;

	public Comment(String comment, String author, LocalDateTime creationDate) {
		this.comment = comment;
		this.author = author;
		this.creationDate = creationDate;
	}
	
	
	public Comment(String comment, String author ) {
		this.comment = comment;
		this.author = author;
	}
	

	public void setComment(String comment) {
		this.comment = comment;
	}



	public void setAuthor(String author) {
		this.author = author;
	}



	public String getId() {
		return id;
	}

	public String getComment() {
		return comment;
	}

	public String getAuthor() {
		return author;
	}

	public LocalDateTime getCreationDate() {
		return creationDate;
	}
}
