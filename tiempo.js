export default class Tiempo{
    /**
     * @param {number} hora;
     * @param {number} minutos;
     * @param {string} periodo;
     */
    constructor(hora,minutos,periodo){
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = periodo.toUpperCase();
    }
    getFormato12(){
        return `${this.hora}:${this.minutos} ${ this.periodo}`
    }
    getFormato24(){
        return `${this.hora += this.periodo == "AM"  ?0: this.hora ==12 ? 0:12}:${this.minutos}`
    }
}
