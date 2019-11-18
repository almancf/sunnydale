"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Examinar = /** @class */ (function () {
    function Examinar(examen, tipo, estudiantes) {
        this.examen = examen;
        this.tipo = tipo;
        this.estudiantes = estudiantes;
    }
    Examinar.prototype.examinar = function () {
        // for (let asignatura of this.asignatura) {
        for (var _i = 0, _a = this.estudiantes; _i < _a.length; _i++) {
            var estudiante = _a[_i];
            if (estudiante.modelo === this.tipo) {
                var nota = Math.floor(Math.random() * 10 + 1);
                console.log("El estudiante " + estudiante.nombre + " ha sacado un: " + nota + " en " + this.examen);
            }
        }
        // }
    };
    return Examinar;
}());
exports.Examinar = Examinar;
