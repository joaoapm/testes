import express from "express";
import UsuarioControler from "./Usuario/UsuarioControler"
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

        new UsuarioControler(this.server);
        new AtendimentoControler(this.server);
        new UsuarioControler(this.server);

    }

}

new Principal();

