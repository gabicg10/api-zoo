class Mamifero extends Animal{
    private raca:string;

    constructor(_raca:string, _nome:string, _idade:number, _genero:string){
        super(_nome, _idade, _genero)
        this.raca = _raca;
    }

    public setRaca(_raca:string):void{
        this.raca = _raca;
    }
    public getRaca():string{
        return this.raca;
    }
}