//1 - Crie um programa que peça ao usuário a nota de um aluno em uma prova.
//Utilize a estrutura if e else para verificar se a nota é suficiente para aprovação (>= 7) e exiba uma mensagem informando se o aluno foi aprovado ou reprovado.
const nota = 2;

if( nota >= 7){
    console.log("Aluno aprovado");
}
else{
    console.log("Aluno reprovado");
}

//2 - Crie um programa que utilize um loop while para fazer uma contagem regressiva de 10 a 0, exibindo cada número na tela.
let num = 10;
 
while(num >= 0){    // >=decrescente
    console.log(num);
    num = num - 1;
}

//3 - Crie um programa que utilize um loop do while para fazer uma contagem de 50 até 5, retirando de 5 em 5 números.
let num2 = 50;

do{
    console.log(`${num2}`);
    num2 = num2 - 5;
   
}while(num2 >= 5);   // >= decrescente


//4 - Crie uma estrutura if else, que armazene o nome de Maria, pergunte primeiro de o nome é João, depois se é Pedro, depois se é Manoela, e por fim de é Maria. Execute em cada console.log os nomes na tela.
let nome="";

if(nome === "Maria"){
    console.log("O nome é Maria");
    
}
else if(nome === "João"){
    console.log("o nome é João");
}else if(nome === "Pedro"){
    console.log("o nome é Pedro");
}else if(nome === "Manoela"){
    console.log("o nome é Manoela");
}else if(nome === "Manoela"){
    console.log("o nome é Manoela");
}
 else{
    console.log("Nome inexistente");
 }





