import { Estudiante } from "./estudiante.model";
import { NotaMedia } from "./notamedia.model"

export class Examinar {


    constructor(public examen: string, public tipo: string, public estudiantes: Estudiante[]) {

    }

    examinar() {
        //meter aqui acumulador para nota media y borrar archivo notamedia.model.ts
        for (let estudiante of this.estudiantes) {
            if (estudiante.modelo === this.tipo) {
                const nota = Math.floor(Math.random() * 10 + 1);
                // let cargaMedia = new NotaMedia(this.examen, nota)
                // cargaMedia.cargaMedia()
                console.log(`El estudiante ${estudiante.nombre} ha sacado un: ${nota} en ${this.examen}`);
            }
        }
        
    }
} 