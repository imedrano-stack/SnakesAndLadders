class Dado{
    numero = 0

    rodarDado(){
        this.numero = Math.ceil(Math.random() * 6)
        return this.numero
    }
}