export class Doutor{
    name = ''
    idade = 0

    constructor(){

    }

    getName(){
        return this.name;
    }

    setName(name:string){
        this.name = name;
    }

    getIdade(){
        return this.idade;
    }

    setIdade(idade:number){
        this.idade = idade;
    }

    save(){
        const aux:any = localStorage.getItem('Doutor')
        const lista = aux ? JSON.parse(aux):[]
        lista.push(this)
        const data = JSON.stringify(lista)
        localStorage.setItem('Doutor', data)
    }

}

