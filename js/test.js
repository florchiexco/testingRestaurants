const expect = chai.expect;

describe("Función reservarHorario", ()=> {

    let TAO= listadoDeRestaurantes[0];
    let horariosTAO= TAO.horarios;

    it("El horario 13:00 hs está realmente en el arreglo", ()=> {
        expect(horariosTAO[0]).to.equal("13:00");
    }),

    //La función de reservar se ejecuta en el segundo IT, por lo que en el primer it hay 3 valores en el arreglo
    //A partir de la segunda, ya para todas las demás queda el nuevo arreglo, que es solo de 2, sin el horario de 13
    it("Teniendo 3 horarios en el restaurante TAO, se elimina uno y ahora solo le quedan 2 horarios", ()=>{
        TAO.reservarHorario("13:00");
        expect(horariosTAO).to.be.an('array').that.does.not.include("13:00");
    }),

    it("Se reserva un horario inexistente, el arreglo queda igual", ()=>{
        TAO.reservarHorario("12:00");
        expect(horariosTAO).to.have.lengthOf(2);
    }),

    it("Se intenta reservar un horario sin parametros, el arreglo queda igual", ()=>{
        TAO.reservarHorario();
        expect(horariosTAO).to.have.lengthOf(2);
    })
})

describe ("Función obtenerPuntuación", ()=>{
    let TAO= listadoDeRestaurantes[0];
    let flor= listadoDeRestaurantes[24];
    it("El promedio de calificaciones del restaurante TAO es 7.4", ()=>{
        expect(TAO.obtenerPuntuacion()).to.equal(7.4);
    })
    it("El promedio de un restaurante sin calificaciones (Flor Gourmet) es 0", ()=>{
        expect(flor.obtenerPuntuacion()).to.equal(0);
        expect(flor.calificaciones).to.have.lengthOf(0);
    })
})

describe("Función calificar", ()=>{
    let restaurante= listadoDeRestaurantes[1];
    restaurante.calificar(5);
    it("Una calificación se agrega correctamente",() =>{ 
        expect(restaurante.calificaciones).to.have.lengthOf(6);
        expect(restaurante.calificaciones).to.include(5);
    })
    it("Una calificacion mayor a 10 no es agregada", ()=>{
        restaurante.calificar(11);
        expect(restaurante.calificaciones).to.have.lengthOf(6);
        expect(restaurante.calificaciones).to.be.an('array').that.does.not.include(11);
    })
})

describe("Función buscarRestaurante",()=>{
    it("Se encuentra a un restaurant existente correctamente", ()=>{
        expect(listado.buscarRestaurante(1)).to.be.a("object");
    })
    it("La búsqueda de un restaurant no existente devuelve un string que informa que no ha sido encontrado", ()=>{
        expect(listado.buscarRestaurante(80)).to.be.a("string");
        expect(listado.buscarRestaurante(80)).to.equal("No se ha encontrado ningún restaurant")
    })
})

describe("Función obtenerRestaurantes", ()=>{
    it("Se prueban todos los filtros", ()=>{
        expect(listado.obtenerRestaurantes("Hamburguesa", "Berlín", "22:00")).to.have.lengthOf(1);
    })
     it("Se prueba que no se use ningun filtro, por lo que debe devolver el total", ()=>{
         expect(listado.obtenerRestaurantes(null,null, null)).to.have.lengthOf(25); //hay que pasarle null, si no toma undefined
     })
     it("Se prueba que se use solo el filtro de rubro Hamburguesa, hay 5 restaurantes de este tipo", ()=>{
         expect(listado.obtenerRestaurantes("Hamburguesa", null, null)).to.have.lengthOf(5);
     })
})

describe("TDD", ()=>{
    var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")

    it("El restaurante calcula bien su precio base", ()=>{
        expect(reserva1.calcularPrecioBase()).to.equal(2800);
    })
    it("El restaurante calcula bien su precio final", ()=>{
        expect(reserva1.calcularPrecioTotal()).to.equal(2730);
    })
    
})