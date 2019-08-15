import express from "express";
import PessoaControler from "./Pessoa/PessoaControler"
import DefaultDAO from "./Util/DefaultDAO";
 

class Principal {

    server = express();

    constructor() {

        DefaultDAO.getConexao();

        this.server.use(express.json());
        this.server.listen(3000, () => {
            console.log(`[SERVER] Running at http://localhost:3000`);
        });

        new PessoaControler(this.server);

    }

}

new Principal();
