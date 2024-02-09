import { Animal } from "./Animal";

export class Habitat {

    private nome: string;// * Atributo privado para armazenar o nome do habitat
    private listaAnimais: Array<Animal>;// * Atributo privado para armazenar a lista de animai

    
    /**
     * Construtor da classe Habitat.
     * 
     * @param _nome O nome do habitat.
     * @param _listaDeAnimais A lista de animais no habitat.
     */
    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        this.nome = _nome;
        this.listaAnimais = _listaAnimais;
    }

    /**
     * Retorna o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do habitat.
     * 
     * @param _nome O nome a ser atribuído ao habitat.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna a lista de animais do habitat.
     * 
     * @returns A lista de animais do habitat.
     */
    public getListaAnimais(): Array<Animal> {
        return this.listaAnimais;
    }

    /**
     * Define a lista de animais do habitat.
     * 
     * @param _listaAnimais A lista de animais a ser atribuída ao habitat.
     */
    public setListaAnimais(_listaAnimais: Array<Animal>): void {
        this.listaAnimais = _listaAnimais;
    }
}