import { Animal } from "./Animal";

export class Reptil extends Animal {
    private tipoEscamas: string; // * Atributo privado para armazenar o tipo de escamas do réptil


  /**
     * Construtor da classe Reptil.
     * 
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     * @param _tipo_de_escamas O tipo de escamas do réptil.
     */
    constructor(_nome: string, _idade: number, _genero: string, _tipoEscamas: string) {
        super(_nome, _idade, _genero)
        this.tipoEscamas = _tipoEscamas;
    }

    /**
      * Define o tipo de escamas do reptil.
      * 
      * @param _tipoEscamas O tipo de escamas a ser atribuído ao reptil.
      */
    public setTipoEscamas(_tipoEscamas: string): void {
        this.tipoEscamas = _tipoEscamas;
    }

    /**
     * Retorna o tipo de escamas do reptil.
     * 
     * @returns O tipo de escamas do reptil.
     */
    public getTipoEscamas(): string {
        return this.tipoEscamas;
    }
}