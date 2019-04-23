package com.example.demo.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Animal;
import com.example.demo.model.Pessoa;
import com.example.demo.service.PessoaService;

@RestController
@RequestMapping("api/v1/")
public class PessoaController {

	@Autowired
	private PessoaService pessoaService;

	@RequestMapping(value = "pessoas", method = RequestMethod.POST)
	public Pessoa create(@RequestBody Pessoa pessoa) {
		return pessoaService.save(pessoa);
	}

	@RequestMapping(value = "pessoas", method = RequestMethod.GET)
	public List<Pessoa> findAll() {
		return pessoaService.findAll();
	}

	@RequestMapping(value = "pessoas/{id}", method = RequestMethod.GET)
	public Pessoa findByid(@PathVariable String id) {
		return pessoaService.findById(id);
	}

	@RequestMapping(value = "pessoas/animais/{idPessoa}", method = RequestMethod.PUT)
	public String saveAnimais(@PathVariable String idPessoa, @RequestBody Animal animal) {
		Pessoa pessoaCons = pessoaService.findById(idPessoa);

		animal.setId(new ObjectId().toString());

		pessoaCons.getAnimais().add(animal);

		pessoaService.save(pessoaCons);

		return animal.getId();
	}

	@RequestMapping(value = "pessoas/animais/{idPessoa}", method = RequestMethod.GET)
	public String listAnimais(@PathVariable String idPessoa, @RequestBody Animal animal) {
		Pessoa pessoaCons = pessoaService.findById(idPessoa);

		animal.setId(new ObjectId().toString());

		pessoaCons.getAnimais().add(animal);

		pessoaService.save(pessoaCons);

		return animal.getId();
	}

}
