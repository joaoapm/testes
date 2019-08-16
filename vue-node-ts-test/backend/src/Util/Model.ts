import DefaultDAO from "./DefaultDAO";

export default class Schemas {

    static PessoaSchema: any;
    static PessoaModel: any;

    static AtendimentoSchema: any;
    static AtendimentoModel: any;

    constructor() { }

    static inicia() {

        this.PessoaSchema = DefaultDAO.mongoose.Schema({
            nome: String,
            login: String,
            senha: String,
            animais : []
        }); 

        this.AtendimentoSchema = DefaultDAO.mongoose.Schema({
            pessoa: {},
            data: Date,
            tipo: String,            
        }); 

        this.PessoaModel = DefaultDAO.mongoose.model('pessoa', this.PessoaSchema, 'pessoa');
        this.AtendimentoModel = DefaultDAO.mongoose.model('atendimento', this.AtendimentoSchema, 'atendimento');
    }

}
