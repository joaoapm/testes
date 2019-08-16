import Model from "./Model";
var mongoose = require('mongoose');

export default class DefaultDAO {

    static mongoose: any = undefined;
    static db: any = undefined;
    static isConectado: boolean = false;
    constructor() {
    }

    static getMangoose() {
        if (this.mongoose != undefined) {
            return this.mongoose;
        } else {
            return this.getConexao();
        }
    }

    public static getConexao(): any {

        if (this.mongoose != undefined) {
            return this.mongoose;
        } else {
            mongoose.connect('mongodb://localhost/cadastra', { useNewUrlParser: true });

            this.mongoose = mongoose;
            this.db = mongoose.connection;
            this.db.on('error', console.error.bind(console, 'connection error:'));
            this.db.once('open', function () {
                console.log(`[MONGODB] Connectado`);
                Model.inicia();
                return DefaultDAO.mongoose;
            });
        }
    }


}
