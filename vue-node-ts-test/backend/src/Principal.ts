import express from "express";
import PessoaControler from "./Pessoa/PessoaControler"
import DefaultDAO from "./Util/DefaultDAO";
import ErroHandler from "./Util/ErroHandler";
import AtendimentoControler from "./Atendimento/AtendimentoControler";
 

class Principal {

    server = express();

    constructor() {

        DefaultDAO.getConexao();


        this.server.use(express.json());
        this.server.use(ErroHandler.trataErros);

        this.server.listen(3000, () => {
            console.log(`[SERVER] Running at http://localhost:3000`);
        });

        new PessoaControler(this.server);
        new AtendimentoControler(this.server);

    }

}

new Principal();

