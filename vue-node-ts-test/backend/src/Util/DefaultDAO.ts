var mongoose = require('mongoose');

export default class DefaultDAO {

    static mongoose: any = undefined;
    static db: any = undefined;
    static isConectado: boolean = false;
    constructor() {
    }

    public static getConexao(): any {

        if (this.mongoose != undefined) {
            return this.mongoose;
        } else {
            mongoose.connect('mongodb://localhost/cadastra');

            var db = mongoose.connection;


            db.on('error', console.error.bind(console, 'connection error:'));

            db.once('open', function () {
                console.log(`[MONGODB] Connectado`);

 

                // Define schemad

 
                           
                var BookSchema = mongoose.Schema({
                    nome: String,
                    login: Number,
                    senha: Number
                });


                var Pessoa = mongoose.model('pessoa', BookSchema, 'pessoa');
                          
 
   
                var Pessoa1 = new Pessoa({
                    nome: 'xbbbbxx',
                    login: 1,
                    senha: 2
                });



                Pessoa1.save(function (err: any, thor: any) {
                    if (err) return console.error(err);
                    console.log(thor);
                });





                return DefaultDAO.mongoose;
            });
        }
    }


}
