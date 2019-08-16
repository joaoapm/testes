import PessoaRN from "./PessoaRN"
import ErroHandler from "../Util/ErroHandler";

export default class PessoaControler {

    pessoaRN = new PessoaRN();

    constructor(server: any) {

        server.post("/pessoa/login", (req: any, res: any) => { this.login(res, req) });
        server.post("/pessoa/", (req: any, res: any) => { this.adiciona(res, req) });
        server.post("/pessoa/:id", (req: any, res: any) => { this.altera(res, req) });

        server.get("/pessoa/", (req: any, res: any) => { this.lista(res, req) });
        server.get("/pessoa/:id", (req: any, res: any) => { this.listaPorId(res, req) });

        server.delete("/pessoa/:id", (req: any, res: any) => { this.delete(res, req) }); 

    }

    async login(res: any, req: any) {
        try {
            res.send(await this.pessoaRN.login(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async adiciona(res: any, req: any) {
        try {
            res.send(await this.pessoaRN.adiciona(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async lista(res: any, req: any) {
        try {
            res.send(await this.pessoaRN.lista(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async listaPorId(res: any, req: any) {
        try {
            res.send(await this.pessoaRN.listaPorId(req.params.id));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async altera(res: any, req: any) {
        try {
            req.body.id = req.params.id;
            res.send(await this.pessoaRN.altera(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async delete(res: any, req: any) {
        try {
            res.send(await this.pessoaRN.delete(req.params.id));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }
 
}
