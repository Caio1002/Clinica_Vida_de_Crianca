export class Consulta{
    doutor = ''
    paciente = ''
    data = ''
    hora = ''

    constructor(){

    }

    getDoutor(){
        return this.doutor;
    }

    setDoutor(doutor:string){
        this.doutor = doutor;
    }

    getPaciente(){
        return this.paciente;
    }

    setPaciente(paciente:string){
        this.paciente = paciente;
    }

    getData(){
        return this.data;
    }

    setData(data:string){
        this.data = data;
    }

    getHora(){
        return this.hora;
    }

    setHora(hora:string){
        this.hora = hora;
    }

    save(){
        const aux:any = localStorage.getItem('Consulta')
        const lista = aux ? JSON.parse(aux):[]
        lista.push(this)
        const data = JSON.stringify(lista)
        localStorage.setItem('Consulta', data)
    }

}

