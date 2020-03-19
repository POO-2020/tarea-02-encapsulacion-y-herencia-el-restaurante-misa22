export default class Direccion {
    /**
     * @param {string} calle
     * @param {number} numeroExteriro
     * @param {number} numeroInterior
     * @param {string} colonia
     * @param {number} codigoPostal
     * @param {string} ciudad 
     * @param {string} municipio
     */
    constructor(calle, numeroExteriro, numeroInterior, colonia, codigoPostal, ciudad, municipio) {
        this.calle = calle;
        this.numeroExteriro = numeroExteriro;
        this.numeroInterior = numeroInterior;
        this.colonia = colonia;
        this.codigoPostal = codigoPostal;
        this.ciudad = ciudad;
        this.municipio = municipio;
    }
    getFormatoCorto() {
        return `${this.calle},${this.numeroExteriro}`;
    }
    getFormatoExtendido() {
        return `${this.calle},${this.numeroExteriro},${this.numeroInterior},${this.colonia},${this.codigoPostal},${this.ciudad},${this.municipio}`
    }
}
