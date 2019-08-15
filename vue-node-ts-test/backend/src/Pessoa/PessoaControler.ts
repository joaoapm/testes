import PessoaRN from "./PessoaRN"

export default class PessoaControler {

    pessoaRN = new PessoaRN();

    constructor(server: any) { 
        server.post("/pessoa/login", (req: any, res: any) => { this.login(res, req) }); 
    }

    login(res: any, req:any) { 
        res.send(this.pessoaRN.login(req.body));
    }

}
