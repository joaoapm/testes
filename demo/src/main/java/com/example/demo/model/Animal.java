package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "animal")
public class Animal {

	@Id
	private String id;
	private String nome;
	private String cor;

	public Animal(String id, String nome, String cor) {
		super();
		this.id = id;
		this.nome = nome;
		this.cor = cor;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

}
