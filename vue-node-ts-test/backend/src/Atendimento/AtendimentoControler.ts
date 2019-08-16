import AtendimentoRN from "./AtendimentoRN"
import ErroHandler from "../Util/ErroHandler";

export default class AtendimentoControler {

    atendimentoRN = new AtendimentoRN();

    constructor(server: any) {

        server.post("/atendimento/", (req: any, res: any) => { this.adiciona(res, req) });

        server.get("/atendimento/", (req: any, res: any) => { this.lista(res, req) });
        server.get("/atendimento/:id", (req: any, res: any) => { this.listaPorId(res, req) });

        server.delete("/atendimento/:id", (req: any, res: any) => { this.delete(res, req) });

    }

    async adiciona(res: any, req: any) {
        try {
            res.send(await this.atendimentoRN.adiciona(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async lista(res: any, req: any) {
        try {
            res.send(await this.atendimentoRN.lista(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async listaPorId(res: any, req: any) {
        try {
            res.send(await this.atendimentoRN.listaPorId(req.params.id));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }


    async delete(res: any, req: any) {
        try {
            res.send(await this.atendimentoRN.delete(req.params.id));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

}
