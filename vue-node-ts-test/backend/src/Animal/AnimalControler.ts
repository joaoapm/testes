import AnimalRN from "./AnimalRN"
import ErroHandler from "../Util/ErroHandler";

export default class AnimalControler {

    animalRN = new AnimalRN();

    constructor(server: any) {
 
        server.post("/animal/", (req: any, res: any) => { this.adiciona(res, req) });
        server.post("/animal/:id", (req: any, res: any) => { this.altera(res, req) });

        server.get("/animal/", (req: any, res: any) => { this.lista(res, req) });
        server.get("/animal/:id", (req: any, res: any) => { this.listaPorId(res, req) });

        server.delete("/animal/:id", (req: any, res: any) => { this.delete(res, req) }); 

    }
 
    async adiciona(res: any, req: any) {
        try {
            res.send(await this.animalRN.adiciona(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async lista(res: any, req: any) {
        try {
            res.send(await this.animalRN.lista(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async listaPorId(res: any, req: any) {
        try {
            res.send(await this.animalRN.listaPorId(req.params.id));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async altera(res: any, req: any) {
        try {
            req.body.id = req.params.id;
            res.send(await this.animalRN.altera(req.body));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }

    async delete(res: any, req: any) {
        try {
            res.send(await this.animalRN.delete(req.params.id));
        } catch (error) {
            ErroHandler.trataErros(error, req, res);
        }
    }
 
}
