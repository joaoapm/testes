
import Model from "../Util/Model";

export default class UsuarioDAO {

    constructor() { }

    listaPorId(id: any) {
        return Model.UsuarioModel.findById(id);
    }

    lista(usuario: any) {
        return Model.UsuarioModel.find(usuario);
    }

    adiciona(usuario: any) {

        var novaUsuario = new Model.UsuarioModel({
            "nome": usuario.nome,
            "login": usuario.login,
            "senha": usuario.senha,
            "animais": usuario.animais
        });

        return novaUsuario.save();
    }

    altera(usuario: any) {

        var novaUsuario = new Model.UsuarioModel({
            "_id": usuario.id,
            "nome": usuario.nome,
            "login": usuario.login,
            "senha": usuario.senha,
            "animais": usuario.animais
        });

        novaUsuario.isNew = false;

        return novaUsuario.save();
    }

    delete(id: any) {
        return Model.UsuarioModel.deleteOne({ "_id": id });
    }

}
