import {makeAutoObservable} from "mobx";

class GiraffeStore {
    giraffes = ["Marius", "Melman"];

    constructor() {
        makeAutoObservable(this, {}, {autoBind:true}
        )
    }

    addGiraffe = (giraffe)=> {
        this.giraffes.push(giraffe);
    }


}

export const giraffeStore = new GiraffeStore();