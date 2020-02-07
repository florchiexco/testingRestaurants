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
        expect(horariosTAO).to.have.lengthOf(2);
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