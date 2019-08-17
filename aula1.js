console.log("Nada de olá mundo hoje!");// escrever algo no console do navegador
console.warn("Sou uma alerta de erro");// escrever algo no console do navegador
console.error("Sou um alerta de erro. Cuidado!");// escrever algo no console do navegador

var idade = 28; //inteiro
var nome="Joao" //string
var salario = 980.99; //double
var pais=["Oscar", "Dona Cida"]//vetor
var veiculo = { //objeto
    tipo: "Carro",
    ano: 2012,
    marca: "Fiat",
    valor: 100.99,
    motor:{ //objeto dentro de objeto
        cilindros: 4,
        valvulas: 16
    }
}
    var namoradas = [ //vetor de objetos
        {
            nome: "Jennifer Lopez",
            idade: 38
        },
        {
            nome: "Maria Rita",
            idade: 36
        }
    ]
   



// var relatorio=nome + " tem " + idade + " anos";

relatorio = `${nome} filho de ${pais[0]} e ${pais[1]}
 tem ${idade} anos e recebe ${salario} de salário. Comprou um/uma
  ${veiculo.tipo} da marca ${veiculo.marca} com motor de 
  ${veiculo.motor.cilindros} cilidros por R$${veiculo.valor} para sair com ${namoradas[0].nome}`;

console.log(nome);
console.log(idade);
console.log(salario);
console.log(relatorio);
console.log(pais);
console.log(veiculo);
console.log(namoradas);



var num1=10;
var num=50;

console.log()



