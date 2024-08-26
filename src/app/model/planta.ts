export class Planta {

    id? : number;
    pais: string;
    nombrePlanta : string;
    lecturas : number;
    alertasMedias : number;
    alertasRojas : number;

    constructor (pais: string, nombrePlanta: string, lecturas: number, alertasMedias: number, alertasRojas: number) {
        this.pais = pais;
        this.nombrePlanta = nombrePlanta;
        this.lecturas = lecturas;
        this.alertasMedias = alertasMedias;
        this.alertasRojas = alertasRojas;
    }

}
