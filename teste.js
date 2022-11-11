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

let ferrari = new Carro() 
ferrari.Nome = 'Ferrari F8 Tributo'
ferrari.Potencia = 720
ferrari.VelocidadeMaxima = 340
ferrari.Aceleracao = 34

let porsche = new Carro() 
porsche.Nome = 'Porsche Panamera'
porsche.Potencia = 700
porsche.VelocidadeMaxima = 315
porsche.Aceleracao = 31

let audi = new Carro() 
audi.Nome = 'Audi R8'
audi.Potencia = 610
audi.VelocidadeMaxima = 320
audi.Aceleracao = 32

let mustang = new Carro() 
mustang.Nome = 'Mustang Shelby GT500'
mustang.Potencia = 771
mustang.VelocidadeMaxima = 320
mustang.Aceleracao = 30

let carros = [ferrari, porsche, audi, mustang]