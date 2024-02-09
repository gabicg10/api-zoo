import { Atracao } from "./Atracao";

export class Zoologico {

    private nomeZoologico: string; // * Atributo privado para armazenar o nome do zoológico
    private listaAtracoes: Array<Atracao>; // * Atributo privado para armazenar a lista de atrações do zoológico

    /**
     * Construtor da classe Zoologico.
     * 
     * @param _nome O nome do zoológico.
     * @param _listaAtracoes A lista de atrações do zoológico.
     */
    constructor(nomeDoZoo: string, atracoes: Array<Atracao>) {
        this.nomeZoologico = nomeDoZoo;
        this.listaAtracoes = atracoes;
    }

    /**
       * Retorna o nome do zoológico.
       * 
       * @returns O nome do zoológico.
       */
    public getNomeZoologico(): string {
        return this.nomeZoologico;
    }

    /**
     * Define o nome do zoológico.
     * 
     * @param _nomeDoZoo O nome a ser atribuído ao zoológico.
     */
    public setNomeZoologico(_nomeDoZoo: string): void {
        this.nomeZoologico = _nomeDoZoo;
    }

    /**
     * Retorna a lista de atrações do zoológico.
     * 
     * @returns A lista de atrações do zoológico.
     */
    public getAtracoes(): Array<Atracao> {
        return this.listaAtracoes;
    }

    /**
     * Define as atrações associadas ao zoológico.
     * 
     * @param _atracao A atração a ser adicionada à lista de atrações do zoológico.
     */
    public setAtracoes(_atracao: Atracao): void {
        this.listaAtracoes.push(_atracao);
    }
}