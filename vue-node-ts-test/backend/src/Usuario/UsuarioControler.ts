import UsuarioRN from "./UsuarioRN"
import ErroHandler from "../Util/ErroHandler";

export default class UsuarioControler {

    usuarioRN = new UsuarioRN();

    constructor(server: any) {

        server.post("/usuario/login", (req: any, res: any) => { this.login(res, req) });
        server.post("/usuario/", (req: any, res: any) => { this.adiciona(res, req) });
        server.post("/usuario/:id", (req: any, res: any) => { this.altera(res, req) });

        server.get("/usuario/", (req: any, res: any) => { this.lista(res, req) });
        server.get("/usuario/:id", (req: any, res: any) => { this.listaPorId(res, req) });

        server.delete("/usuario/:id", (req: any, res: any) => { this.delete(res, req) }); 

    }

    async login(res: any, req: any) {
        try {
            res.send(await this.usuarioRN.login(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async adiciona(res: any, req: any) {
        try {
            res.send(await this.usuarioRN.adiciona(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async lista(res: any, req: any) {
        try {
            res.send(await this.usuarioRN.lista(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async listaPorId(res: any, req: any) {
        try {
            res.send(await this.usuarioRN.listaPorId(req.params.id));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async altera(res: any, req: any) {
        try {
            req.body.id = req.params.id;
            res.send(await this.usuarioRN.altera(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async delete(res: any, req: any) {
        try {
            res.send(await this.usuarioRN.delete(req.params.id));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }
 
}
