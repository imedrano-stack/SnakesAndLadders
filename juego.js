class Dado{
    numero = 0

    rodarDado(){
        this.numero = Math.ceil(Math.random() * 6)
        return this.numero
    }
}

class Jugador{
    constructor(color) {
        this.color = color
    }

    avance(){
        let dado = new Dado()
        return dado.rodarDado()
    }
}