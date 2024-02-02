import { Animal } from "./Animal";

export class Reptil extends Animal{
    private tipoEscamas:string;

    constructor(_nome:string, _idade:number, _genero:string, _tipoEscamas:string){
        super(_nome, _idade, _genero)
        this.tipoEscamas = _tipoEscamas;
    }

    public setTipoEscamas(_tipoEscamas:string):void{
        this.tipoEscamas = _tipoEscamas;
    }
    public getTipoEscamas():string{
        return this.tipoEscamas
    }
}