import AnimalDAO from "./AnimalDAO";
import { sha256 } from 'js-sha256';

export default class AnimalRN {

    private animalDAO = new AnimalDAO();

    constructor() { }
 
    async adiciona(pessoa: any) {
        let novaPessoa = await this.animalDAO.adiciona(pessoa);
        return novaPessoa;
    }

    async lista(pessoa: any) {
        let novaPessoa = await this.animalDAO.lista(pessoa);
        return novaPessoa;
    }

    async listaPorId(id: any) {
        let novaPessoa = await this.animalDAO.listaPorId(id);
        return novaPessoa;
    }

    async delete(id: any) {
        let novaPessoa = await this.animalDAO.delete(id);
        return novaPessoa;
    }

    async altera(pessoa: any) {
        await this.animalDAO.altera(pessoa);
    }

}
