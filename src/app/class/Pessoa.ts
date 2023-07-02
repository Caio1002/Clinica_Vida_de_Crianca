export class Pessoa{
    name = ''
    idade = 0
    sexo = ''
    cep = ''
    rua = ''
    numero = ''
    bairro = ''
    cidade = ''
    estado = ''
    telefone = ''

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

    getSexo(){
        return this.sexo;
    }

    setSexo(sexo:string){
        this.sexo = sexo;
    }
    getRua(){
        return this.rua;
    }

    setRua(rua:string){
        this.rua = rua;
    }
    getNumero(){
        return this.numero;
    }

    setNumero(numero:string){
        this.numero = numero;
    }
    getCep(){
        return this.cep;
    }

    setCep(cep:string){
        this.cep = cep;
    }
    getBairro(){
        return this.bairro;
    }

    setBairro(bairro:string){
        this.bairro = bairro;
    }
    getCidade(){
        return this.cidade;
    }

    setCidade(cidade:string){
        this.cidade = cidade;
    }
    getEstado(){
        return this.estado;
    }

    setEstado(estado:string){
        this.estado = estado;
    }
    getTelefone(){
        return this.telefone;
    }

    setTelefone(telefone:string){
        this.telefone = telefone;
    }

    save(){
        const aux:any = localStorage.getItem('Pessoa')
        const lista = aux ? JSON.parse(aux):[]
        lista.push(this)
        const data = JSON.stringify(lista)
        localStorage.setItem('Pessoa', data)
    }

}

