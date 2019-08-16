import AtendimentoDAO from "./AtendimentoDAO";

export default class AtendimentoRN {

    private atendimentoDAO = new AtendimentoDAO();

    constructor() { }

    async adiciona(atendimento: any) {
        await this.atendimentoDAO.adiciona(atendimento);

    }

    async lista(atendimento: any) {
        let listaAtendimento = await this.atendimentoDAO.lista(atendimento);
        return listaAtendimento;
    }

    async listaPorId(id: any) {
        let atendimento = await this.atendimentoDAO.listaPorId(id);
        return atendimento;
    }

    async delete(id: any) {
        await this.atendimentoDAO.delete(id);
    }
 
}
