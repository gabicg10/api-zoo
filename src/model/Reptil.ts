class Reptil extends Animal{
    private tipoEscamas:string;

    constructor(_tipoEscamas:string, _nome:string, _idade:number, _genero:string){
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