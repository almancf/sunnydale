import {Estudiante} from './estudiante.model';

export class Asignatura {
        estudiantes:Estudiante[]=[];

        constructor(public nombreAsignatura:string, public tipoAsignatura:string){

        }

    apuntarEstudiante(estudiante:Estudiante){
            this.estudiantes.push(estudiante);
    }
}