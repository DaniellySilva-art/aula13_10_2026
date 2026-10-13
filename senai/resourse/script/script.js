// alert("Bem vindo ao nosso restaurante!");
// alert("Escolha uma opção abaixo: \n 1_Combo whopper e refil de refrigerante \n 2_ Pizza média e um suco grande \n 3_ Café e misto quente");
// let opcao = Number(prompt("Digite uma opção:"));

// switch (opcao) {
//     case 1:
//         alert("Você escolheu o whopper e refil de refrigerante ");
//         break;
//     case 2:
//         alert("Você escolheu a Pizza média e um suco grande ");
//         break;
//     case 3:
//         alert("Você escolheu o Café e misto quente ");
//         break;

//     default:
//         alert("opção inválida");
//         break;

// }

// Arrays

// let nome = "Danielly"
// let nomes = ["Asafe", "Susana", "Julia","Arnaldo"];
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let mist = [1,"um",2,"dois",3,"três"];
//  console.log(mist)
// console.log(nums[9])
// nomes[0] = "Paula"
// console.log(nomes[0]);
// adicionar ao final
// nomes.push("Isabel")
// nomes.pop()
//add inicio
// nomes.unshift("Brad Pitt")
// nomes.shift()
// console.log(nomes)

// let frutas = ["Melancia","Morango","Coco","ingá","Melão"]
// frutas.shift();
// frutas.shift();
// frutas.push("Pitaya","Amora","Framboesa");
// console.log(frutas)

// let nomesCombostos = ["Ana Clara","Carlos Eduardo","Davi Lucca","Enzo Gabriel","João Pedro","Maria Alice","Pedro Henrique"];
// nomesCombostos.shift();
// nomesCombostos.push("Jhon");
// console.log(nomesCombostos)

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let par = nums.filter(nums => nums = nums % 2 === 0)

console.log(par)
