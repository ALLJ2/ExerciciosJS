//1 - Crie um Grupo de mensagem na tela que mostre o passo a passo de como trocar uma lâmpada.
console.group("COMO TROCAR UMA LÂMPADA");
console.log("Suba na cadeira");
console.log("Retire a lâmpada quebrada");
console.log("Encaixe a lâmpada nova");
console.log("Faça o teste ligando a luz");
console.groupEnd();



//2 - Crie um programa que utilize um loop for para imprimir números pares de 1 a 20 na tela.
console.log("PARES");
for (let l=2; l <= 20; l+=2) {
    console.log(l);
}


//3 - Crie um programa que utilize um loop for para imprimir números ímpares de 1 a 20 na tela.
console.log("IMPARES");
for (let l2=1; l2 <= 20; l2+=2) {
    console.log(l2);
}

//4 - Crie um programa que armazene a avaliação de um aluno, armazene o item "atendeu" dentro dessa variável. Depois faça um loop Switch onde se o resultado for "atendeu" ele mostra na tela "aprovado", se o resultado for "atendeu parcialmente" ele mostra recuperação, se não for nenhum dos anteriores ele executa "reprovado".
console.log("AVALIAÇÃO");
let avaliação="atendeu";

switch(avaliação) {
case "atendeu":
    console.log("Aprovado");
break;

case "Atendeu parcialmente":
    console.log("Recuperação");
break;

default:
    console.log("Reprovado");
}

// 5 - Faça um programa que calcule a distância de São Paulo - SP, até Rio de Janeiro - RJ, e mostra na tela através de interpolação o resultado da distância entre São Paulo e Rio de Janeiro.
console.log("DE SP A RJ");
let SPaRJ= 446.3;

console.log(`A distancia entre São Paulo e Rio de Janeiro é de ${SPaRJ} km`);


// 6 - Pergunta, responda como um comentário, o que é o Creat do CRUD?
// é a operação com funcionalidade de criar dados em um programa

// 7 - Pergunta, responda como um comentário, o que é o Read do CRUD?
// é a função de leitura de dados de um programa

// 8 - Pergunta, responda como um comentário, o que é o Update do CRUD?
// é a função de atualizar dados em um programa

// 9 - Pergunta, responda como um comentário, o que é o Delete do CRUD?
// é a função de deletar dados em um programa

// 10 - Pergunta, responda como um comentário. Quais cuidados são importantes na criação do CRUD?
//sempre deixar as informações de cada aplicação muito claras para o usuário para evitar perda permanente de dados
// ter uma interface intuitiva e facil de entender, deixando as informações claras visualmente 

// 11 - Pergunta, responda como um comentário. Qual a diferença entre o laço For para o laço Switch?
// o laço for tem uma sintaxe mais simples, sendo o ideal para laços de curto periodo, enquanto o switch funciona por meio da alternancia livre e direta de valores por casos (case)

// 12 - Pergunta, responda como um comentário. Qual a importância de desenvolver Soft Skills?
// as soft skills são importantes em um ambiente de trabalho por serem competencias sociais individuais, elas são boas para dinamismo nos processos e resultados melhores nas equipes. Elas tambem são destacaveis em processos de recrutamento. 