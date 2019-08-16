
import Model from "../Util/Model";

export default class PessoaDAO {

    constructor() { }

    listaPorId(id: any) {
        return Model.PessoaModel.findById(id);
    }

    lista(pessoa: any) {
        return Model.PessoaModel.find(pessoa);
    }

    adiciona(pessoa: any) {

        var novaPessoa = new Model.PessoaModel({
            "nome": pessoa.nome,
            "login": pessoa.login,
            "senha": pessoa.senha
        });

        return novaPessoa.save();
    }

    altera(pessoa: any) {

        var novaPessoa = new Model.PessoaModel({
            "_id": pessoa.id,
            "nome": pessoa.nome,
            "login": pessoa.login,
            "senha": pessoa.senha,
            "animais": pessoa.animais
        });

        novaPessoa.isNew = false;

        return novaPessoa.save();
    }

    delete(id: any) {
        return Model.PessoaModel.deleteOne({ "_id": id });
    }

}
