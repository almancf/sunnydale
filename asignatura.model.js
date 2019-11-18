"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Asignatura = /** @class */ (function () {
    function Asignatura(nombreAsignatura, tipoAsignatura) {
        this.nombreAsignatura = nombreAsignatura;
        this.tipoAsignatura = tipoAsignatura;
        this.estudiantes = [];
    }
    Asignatura.prototype.apuntarEstudiante = function (estudiante) {
        this.estudiantes.push(estudiante);
    };
    return Asignatura;
}());
exports.Asignatura = Asignatura;
