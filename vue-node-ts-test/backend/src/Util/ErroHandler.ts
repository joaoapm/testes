export default class ErroHandler {

    constructor() {
    }

    static trataErros(err: any, req: any, res: any, next?: any) {
        console.error("[ERRO] - " + err.stack);
        res.status(500).send("Erro na requisição.");
    }
 

}
