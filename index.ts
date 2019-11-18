import {Estudiante} from './estudiante.model';
import { Asignatura } from './asignatura.model';
import { Sunnydale } from './sunnydale.model';


let e1:Estudiante = new Estudiante('Xabi', 'ciencias');
let e2:Estudiante = new Estudiante('Alberto', 'letras');
let e3:Estudiante = new Estudiante('Jasone', 'letras');
let e4:Estudiante = new Estudiante('Ander', 'ciencias');
let e5:Estudiante = new Estudiante('Amaia', 'ciencias');
let e6:Estudiante = new Estudiante('Ali', 'letras');

let a1:Asignatura = new Asignatura('Matematicas','ciencias')
let a2:Asignatura = new Asignatura('Lenguaje','letras')
let a3:Asignatura = new Asignatura('Tecnologia','ciencias')
let a4:Asignatura = new Asignatura('Historia','letras')
let a5:Asignatura = new Asignatura('Biologia','ciencias')
let a6:Asignatura = new Asignatura('Filosofia','letras')


let sunnydale = new Sunnydale([e1,e2,e3,e4,e5,e6],[a1,a2,a3,a4,a5,a6])
sunnydale.globales();

