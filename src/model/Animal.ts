export class Animal {
    private nome: string;// * Atributo privado para armazenar o nome do animal
    private idade: number;// * Atributo privado para armazenar a idade do animal
    private genero: string; // * Atributo privado para armazenar o gênero do animal

    /**
     * Construtor da classe Animal.
     * 
     * @param _nome O nome do animal.
     * @param _idade A idade do animal.
     * @param _genero O gênero do animal.
     */
    constructor(_nome: string, _idade: number, _genero: string) {
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    /**
 * Define o nome do animal.
 * 
 * @param _nome O nome a ser atribuído ao animal.
 */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    /**
     * Retorna o nome do animal.
     * 
     * @returns O nome do animal.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
  * Define a idade do animal.
  * 
  * @param _idade A idade a ser atribuída ao animal.
  */
    public setIdade(_idade: number): void {
        this.idade = _idade;
    }
    /**
     * Retorna a idade do animal.
     * 
     * @returns A idade do animal.
     */
    public getIdade(): number {
        return this.idade;
    }

    /**
    * Define o gênero do animal.
    * 
    * @param _genero O gênero a ser atribuído ao animal.
    */
    public setGenero(_genero: string): void {
        this.genero = _genero;
    }
    /**
     * Retorna o gênero do animal.
     * 
     * @returns O gênero do animal.
     */
    public getGenero(): string {
        return this.genero;
    }
}