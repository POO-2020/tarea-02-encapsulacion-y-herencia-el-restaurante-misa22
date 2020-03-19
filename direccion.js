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
        this._calle = calle;
        this._numeroExteriro = numeroExteriro;
        this._numeroInterior = numeroInterior;
        this._colonia = colonia;
        this._codigoPostal = codigoPostal;
        this._ciudad = ciudad;
        this._municipio = municipio;
    }
    getFormatoCorto() {
        return `${this._calle},${this._numeroExteriro}`;
    }
    getFormatoExtendido() {
        return `${this._calle},${this._numeroExteriro},${this._numeroInterior},${this._colonia},${this._codigoPostal},${this._ciudad},${this._municipio}`
    }
}
