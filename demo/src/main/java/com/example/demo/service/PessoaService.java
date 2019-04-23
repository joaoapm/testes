package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Pessoa;
import com.example.demo.repository.PessoaRepository;

@Service
public class PessoaService {

	@Autowired
	private PessoaRepository arquivoRepository;

	public Pessoa save(Pessoa pessoa) {
		return arquivoRepository.save(pessoa);
	}

	public List<Pessoa> findAll() {
		return arquivoRepository.findAll();
	}

	public Pessoa findById(String id) {
		return arquivoRepository.findById(id).get();
	}

}
