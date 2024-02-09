import { Habitat } from "./Habitat";

export class Atracao {

    private nomeAtracao: string;  // * Atributo privado para armazenar o nome da atração
    private listaHabitats: Array<Habitat>;// * Atributo privado para armazenar a lista de habitats da atração

    /**
     * Construtor da classe Atracao.
     * 
     * @param _nome O nome da atração.
     * @param _listaHabitats A lista de habitats na atração.
     */
    constructor(_nome: string, _habitats: Array<Habitat>) {
        this.nomeAtracao = _nome;
        this.listaHabitats = _habitats;
    }
    /**
     * Define o nome da atração.
     * 
     * @param _nomeAtracao O nome a ser atribuído à atração.
     */
    public setNomeAtracao(_nomeAtracao: string): void {
        this.nomeAtracao = _nomeAtracao;
    }
    /**
     * Retorna o nome da atração.
     * 
     * @returns O nome da atração.
     */
    public getNomeAtracao(): string {
        return this.nomeAtracao;
    }

    /**
   * Define os habitats associados à atração.
   * 
   * @param _habitats Os habitats a serem atribuídos à atração.
   */
    public setHabitats(_habitats: Array<Habitat>): void {
        this.listaHabitats = _habitats;
    }
    /**
    * Retorna a lista de habitats associados à atração.
    * 
    * @returns A lista de habitats associados à atração.
    */
    public getHabitats(): Array<Habitat> {
        return this.listaHabitats;
    }

}