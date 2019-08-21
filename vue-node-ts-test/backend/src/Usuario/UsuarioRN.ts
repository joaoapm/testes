import UsuarioDAO from "./UsuarioDAO";
import { sha256 } from 'js-sha256';

export default class UsuarioRN {

    private usuarioDAO = new UsuarioDAO();

    constructor() { }

    async login(usuario: any) {

        let usuarioRet;
        let listaUsuario = await this.usuarioDAO.lista(usuario);

        if (listaUsuario.length > 0) {
            sha256(listaUsuario[0].id + listaUsuario[0].nome); 
            usuarioRet = { login: true, token: sha256.create().hex() }
        } else {
            usuarioRet = { login: false }
        }

        return usuarioRet;
    }

    async adiciona(usuario: any) {
        let novaUsuario = await this.usuarioDAO.adiciona(usuario);
        return novaUsuario;
    }

    async lista(usuario: any) {
        let novaUsuario = await this.usuarioDAO.lista(usuario);
        return novaUsuario;
    }

    async listaPorId(id: any) {
        let novaUsuario = await this.usuarioDAO.listaPorId(id);
        return novaUsuario;
    }

    async delete(id: any) {
        let novaUsuario = await this.usuarioDAO.delete(id);
        return novaUsuario;
    }

    async altera(usuario: any) {
        await this.usuarioDAO.altera(usuario);
    }

}
