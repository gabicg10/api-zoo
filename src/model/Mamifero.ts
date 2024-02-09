import { Animal } from "./Animal";

export class Mamifero extends Animal {
    private raca: string;// * Atributo privado para armazenar a raça do mamífero

    /**
     * Construtor da classe Mamifero.
     * 
     * @param _raca A raça do mamífero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     */
    constructor(_nome: string, _idade: number, _genero: string, _raca: string) {
        super(_nome, _idade, _genero)
        this.raca = _raca;
    }

    /**
    * Define a raça do animal de estimação.
    * 
    * @param _raca A raça a ser atribuída ao animal de estimação.
    */
    public setRaca(_raca: string): void {
        this.raca = _raca;
    }
    /**
     * Retorna a raça do animal de estimação.
     * 
     * @returns A raça do animal de estimação.
     */
    public getRaca(): string {
        return this.raca;
    }
}