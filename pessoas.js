class Pessoa {
   nome;
   altura;
   peso;

   constructor(nome, altura, peso) {
      this.nome = nome;
         this.altura = altura;
         this.peso = peso;
   }
   calcularImc() {
      return this.peso / (this.altura * this.altura);
   }
   classificacaoImc(){
      const imc = this.calcularImc();
      if (imc < 18.5) {
         return ("Abaixo do peso");
     } else if (imc > 18.5 && imc < 25) {
         return ("Dentro do peso normal");
     } else if (imc > 25 && imc < 30) {
         return (" Esta com sobrepeso");
     } else if (imc > 30) {
         return (" Esta acima do peso");
     }
   }
}
const jose = new Pessoa("José", 1.75, 70);
console.log(jose.classificacaoImc());

