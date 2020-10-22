class Dado{
    constructor(){}

    rodarDado(){
        return Math.ceil(Math.random() * 6)
    }
}

class Tablero{
    constructor(){
        this.escalerasInicio = [2,7,8,15,21,27,28,51,71,78]
        this.escalerasFinal  = [38,14,31,26,42,84,44,67,91,98]
        this.serpientesInicio = [16,46,49,62,64,74,89,92,95,99]
        this.serpientesFinal = [6,25,11,19,60,53,68,88,75,80]
    }
    escalera(posicion){
        for(let i = 0; i < 10; i++) {
            if(posicion == this.escalerasInicio[i]){
                posicion = this.escalerasFinal[i]
                return posicion
            }
        }
        return posicion
    }
    serpiente(posicion){
        for(let i = 0; i < 10; i++) {
            if(posicion == this.serpientesInicio[i]){
                posicion = this.serpientesFinal[i]
                return posicion
            }
        }
        return posicion
    }
}

class Jugador{
    constructor(numJugador){
        this.numJugador = numJugador
        this.posicion = 0;
    }

    avance(){

        let tablero = new Tablero()
        let dado = new Dado()
        
        let cara = dado.rodarDado()

        this.posicion += cara
        this.posicion = tablero.escalera(this.posicion)
        this.posicion = tablero.serpiente(this.posicion)

        return this.posicion
    }
}

class Juego{
    constructor(){
        this.final = 100
        this.tablero = new Tablero()
        this.ganador = null
        
    }

    empezarJuego(){

        let j1 = new Jugador("Jugador 1")
        let j2 = new Jugador("Jugador 2")

        while(j1.posicion < 100 && j2.posicion < 100) {
            
            console.log(`${j1.numJugador}, esta en la posición ${j1.avance()}, 
            ${j2.numJugador}, esta en la posición ${j2.avance()}`)
        }

        if (j1.posicion >= this.final) {
            this.ganador = `El ${j1.numJugador}, ha ganado`
            console.log(this.ganador)
        } else {
            this.ganador = `El ${j2.numJugador}, ha ganado`
            console.log(this.ganador)
        }
    }
}
let app = new Juego()
app.empezarJuego()