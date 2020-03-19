export default class Tiempo{
    /**
     * @param {number} hora;
     * @param {number} minutos;
     * @param {string} periodo;
     */
    constructor(hora,minutos,periodo){
        this._hora = hora;
        this._minutos = minutos;
        this._periodo = periodo.toUpperCase();
    }
    getFormato12(){
        return `${this._hora}:${this._minutos} ${ this._periodo}`
    }
    getFormato24(){
        return `${this._hora += this._periodo == "AM"  ?0: this._hora ==12 ? 0:12}:${this._minutos}`
    }
}
