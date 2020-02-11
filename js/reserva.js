class Reserva{
    constructor(horario, cantPersonas, precioXpersona, codigoDescuento){
        this.horario= horario;
        this.cantPersonas= cantPersonas;
        this.precioXpersona= precioXpersona;
        this.codigoDescuento= codigoDescuento;
    }

    calcularPrecioBase(){
        let precioBase= this.cantPersonas * this.precioXpersona;
        return precioBase;
    }

    calcularAdicionales(){
        let adicional=0;
        if(this.horario.getDay()==6 || this.horario.getDay()==5 || this.horario.getDay()==4){
            adicional= adicional += (this.calcularPrecioBase() * 10) / 100;
        }
        if(this.horario.getHours()==13 || this.horario.getHours==20){
            adicional += (this.calcularPrecioBase() * 5) /100
        }
        return adicional;
    }

    calcularDescuento(){
        let codDescuento= this.codigoDescuento;
        let descuento=0;
        switch(codDescuento){
            case "DES15":
                descuento= (this.calcularPrecioBase() * 15) / 100;
                return descuento;
                break;
            case "DES200":
                descuento= 200;
                return descuento;
                break;
            case "DES1":
                descuento= this.precioXpersona;
                return descuento;
                break;
            default: 
                    return descuento;
                    break;
        }

    }

    calcularPrecioTotal(){
        let precioTotal= this.calcularPrecioBase() + this.calcularAdicionales() - this.calcularDescuento();
        return precioTotal;
    }
}
