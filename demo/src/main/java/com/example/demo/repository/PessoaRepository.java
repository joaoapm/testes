package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Pessoa;
 
public interface PessoaRepository extends MongoRepository<Pessoa, String> { 
	 
}