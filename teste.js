class Carro{
    
    Nome = []
    Potencia = []
    VelocidadeMaxima = []
    Aceleracao = []
    
    velocidadeMedia(distancia){
        let tempoEmSegundos = []
        let tempo = 0
        for (let index = 0; index < 4; index++) {
            tempo = distancia / (this.VelocidadeMaxima[index]/this.Aceleracao[index])
            tempoEmSegundos.push(tempo)
       } 
        return tempoEmSegundos
    }
}

let carros = new Carro() 

carros.Nome[0] = 'Ferrari F8 Tributo'
carros.Potencia[0] = 720
carros.VelocidadeMaxima[0] = 340
carros.Aceleracao[0] = 34

carros.Nome[1] = 'Porsche Panamera'
carros.Potencia[1] = 700
carros.VelocidadeMaxima[1] = 315
carros.Aceleracao[1] = 31

carros.Nome[2] = 'Audi R8'
carros.Potencia[2] = 610
carros.VelocidadeMaxima[2] = 320
carros.Aceleracao[2] = 32
 
carros.Nome[3] = 'Mustang Shelby GT500'
carros.Potencia[3] = 771
carros.VelocidadeMaxima[3] = 320
carros.Aceleracao[3] = 30

class Corrida{
    Nome
    Tipo
    Distancia
    Vencedor

    verificarVencedor(carros){
        let menorTempo = 1000000000000
        let tempo = carros.velocidadeMedia(this.Distancia)
        
        for (let index = 0; index < 4; index++) {
            if (menorTempo > tempo[index]) {
                menorTempo = tempo[index]
                this.Vencedor = carros.Nome[index]
            }
        }
        return this.Vencedor
    }

    mostrarVencedor(){
        console.log('o vencedor foi: ' + this.Vencedor)
    }
}

let F1 = new Corrida()
F1.Nome = "Racha na BR"
F1.Tipo = "Corrida de rua"
F1.Distancia = 1500