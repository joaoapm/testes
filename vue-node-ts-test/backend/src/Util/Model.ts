import DefaultDAO from "./DefaultDAO";

export default class Schemas {

    static UsuarioSchema: any;
    static UsuarioModel: any;

    static AtendimentoSchema: any;
    static AtendimentoModel: any;

    static AnimalSchema: any;
    static AnimalModel: any;

    constructor() { }

    static inicia() {

        this.UsuarioSchema = DefaultDAO.mongoose.Schema({
            nome: String,
            login: String,
            senha: String,
            animais : []
        }); 

        this.AtendimentoSchema = DefaultDAO.mongoose.Schema({
            usuario: {},
            data: Date,
            tipo: String,            
        }); 

        this.AnimalSchema = DefaultDAO.mongoose.Schema({
            idUsuarios: {},
            dataNascimento: Date,
            nome: String,   
            peso: Number         
        }); 

        this.UsuarioModel = DefaultDAO.mongoose.model('usuario', this.UsuarioSchema, 'usuario');
        this.AtendimentoModel = DefaultDAO.mongoose.model('atendimento', this.AtendimentoSchema, 'atendimento');
        this.AnimalSchema = DefaultDAO.mongoose.model('animal', this.AnimalSchema, 'animal');
    }

}
