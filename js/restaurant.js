class Restaurant {
    constructor(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
        this.id = id;
        this.nombre = nombre;
        this.rubro = rubro;
        this.ubicacion = ubicacion;
        this.horarios = horarios;
        this.imagen = imagen;
        this.calificaciones = calificaciones;
    }
    reservarHorario(horarioReservado) {
        for (var i = 0; i < this.horarios.length; i++) {
            if (this.horarios[i] === horarioReservado) {
                this.horarios.splice(i, 1);
                return;
            }
        }
        // let nuevoArray= this.horarios.filter(horario=> horario!=horarioReservado);
        // this.horarios= nuevoArray;
        return;
    }
    calificar(nuevaCalificacion) {
        if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
            this.calificaciones.push(nuevaCalificacion);
        }
    }
    obtenerPuntuacion() {
        if (this.calificaciones.length === 0) {
            return 0;
        }
        else {
            return this.promedio(this.calificaciones);
        }
    }
    sumatoria(numeros) {
        let total = 0;
        for (let i = 0; i < numeros.length; i++) {
            total = total + numeros[i];
        }
        return total;
    }
    promedio(numeros) {
        let total = this.sumatoria(numeros) / numeros.length;
        return Math.round(total * 10) / 10;
    }
}





