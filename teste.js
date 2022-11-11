class Carro{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    
    velocidadeMedia(distancia){
        tempo = distancia / (this.VelocidadeMaxima/this.Aceleracao)
    }
}

distancia = parseInt(prompt('digite uma distancia (em metros) para percorrer'))