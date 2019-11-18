import { Estudiante } from "./estudiante.model";
import { Asignatura } from "./asignatura.model";
import { Examinar } from "./examinar.model"

export class Sunnydale {

    constructor(public estudiantes: Estudiante[], public asignaturas: Asignatura[]) {

    }

    globales() {
        for (let estudiante of this.estudiantes) {
            for (let asignatura of this.asignaturas) {
                asignatura.apuntarEstudiante(estudiante)
            }
        }
        for (let asignatura of this.asignaturas) {
            let examen = new Examinar(asignatura.nombreAsignatura,asignatura.tipoAsignatura, this.estudiantes)
            examen.examinar()
        }
    }
}