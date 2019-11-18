"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var examinar_model_1 = require("./examinar.model");
var Sunnydale = /** @class */ (function () {
    function Sunnydale(estudiantes, asignaturas) {
        this.estudiantes = estudiantes;
        this.asignaturas = asignaturas;
    }
    Sunnydale.prototype.globales = function () {
        for (var _i = 0, _a = this.estudiantes; _i < _a.length; _i++) {
            var estudiante = _a[_i];
            for (var _b = 0, _c = this.asignaturas; _b < _c.length; _b++) {
                var asignatura = _c[_b];
                asignatura.apuntarEstudiante(estudiante);
            }
        }
        for (var _d = 0, _e = this.asignaturas; _d < _e.length; _d++) {
            var asignatura = _e[_d];
            var examen = new examinar_model_1.Examinar(asignatura.nombreAsignatura, asignatura.tipoAsignatura, this.estudiantes);
            examen.examinar();
        }
    };
    return Sunnydale;
}());
exports.Sunnydale = Sunnydale;
