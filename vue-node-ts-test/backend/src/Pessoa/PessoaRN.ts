import PessoaDAO from "./PessoaDAO";
import { sha256 } from 'js-sha256';

export default class PessoaRN {

    private pessoaDAO = new PessoaDAO();

    constructor() { }

    async login(pessoa: any) {

        let pessoaRet;
        let listaPessoa = await this.pessoaDAO.lista(pessoa);

        if (listaPessoa.length > 0) {
            sha256(listaPessoa[0].id + listaPessoa[0].nome); 
            pessoaRet = { login: true, token: sha256.create().hex() }
        } else {
            pessoaRet = { login: false }
        }

        return pessoaRet;
    }

    async adiciona(pessoa: any) {
        let novaPessoa = await this.pessoaDAO.adiciona(pessoa);
        return novaPessoa;
    }

    async lista(pessoa: any) {
        let novaPessoa = await this.pessoaDAO.lista(pessoa);
        return novaPessoa;
    }

    async listaPorId(id: any) {
        let novaPessoa = await this.pessoaDAO.listaPorId(id);
        return novaPessoa;
    }

    async delete(id: any) {
        let novaPessoa = await this.pessoaDAO.delete(id);
        return novaPessoa;
    }

    async altera(pessoa: any) {
        await this.pessoaDAO.altera(pessoa);
    }

}
