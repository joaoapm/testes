
import Model from "../Util/Model";

export default class AnimalDAO {

    constructor() { }

    listaPorId(id: any) {
        return Model.AnimalModel.findById(id);
    }

    lista(animal: any) {
        return Model.AnimalModel.find(animal);
    }

    adiciona(animal: any) {

        var novoAnimal = new Model.AnimalModel({
            "idPessoas": animal.idPessoas,
            "dataNascimento": animal.dataNascimento,
            "nome": animal.nome,   
            "peso": animal.peso
        });

        return novoAnimal.save();
    }

    altera(animal: any) {

        var novoAnimal = new Model.AnimalModel({
            "_id": animal.id,
            "idPessoas": animal.idPessoas,
            "dataNascimento": animal.dataNascimento,
            "nome": animal.nome,   
            "peso": animal.peso
        });

        novoAnimal.isNew = false;

        return novoAnimal.save();
    }

    delete(id: any) {
        return Model.AnimalModel.deleteOne({ "_id": id });
    }

}
