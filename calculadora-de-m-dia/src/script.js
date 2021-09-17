var nome = "Gláucia"
var notaDoPrimeiroBimestre = 9.879
var notaDoSegundoBimestre = 7.986
var notaDoTerceiroBimestre = 4.09
var notaDoQuartoBimestre = 2.03

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log(notaFixada)

var elementoNotaFinal = document.getElementById("notaFinal");
  var notaFinal = "A sua média será " + notaFixada;
  elementoNotaFinal.innerHTML = notaFinal;

