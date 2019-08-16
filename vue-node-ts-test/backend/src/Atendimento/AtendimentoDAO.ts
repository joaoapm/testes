import Model from "../Util/Model";

export default class AtendimentoDAO {

    constructor() { }

    listaPorId(id: any) {
        return Model.AtendimentoModel.findById(id);
    }

    lista(atendimento: any) {
        return Model.AtendimentoModel.find(atendimento);
    }

    adiciona(atendimento: any) {

        var novoAtendimento = new Model.AtendimentoModel({
            pessoa: atendimento.pessoa,
            data: atendimento.data,
            tipo: atendimento.tipo,
        });

        return novoAtendimento.save();
    }

    delete(id: any) {
        return Model.AtendimentoModel.deleteOne({ "_id": id });
    }

}
