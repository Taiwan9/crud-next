export default class Client{
    #id: string
    #nome: string
    #idade: number

    constructor(nome:string, idade:number, id:string){
        this.#id = id
        this.#nome = nome
        this.#idade = idade
    }

    static vazio(){
        return new Client('', 0, '')
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }
}