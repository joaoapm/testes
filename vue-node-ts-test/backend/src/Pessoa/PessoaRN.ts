import PessoaDAO from "./PessoaDAO";

export default class PessoaRN {

    private pessoaDAO = new PessoaDAO();

    constructor() { }

    login(pessoa: any) {

        let pessoaRet;
 
        this.pessoaDAO.find();

        if (this.pessoaDAO.find() != null) { 
            pessoaRet = { login: true }
        } else {
            pessoaRet = { login: false }
        }

        return pessoaRet;
    }

}
