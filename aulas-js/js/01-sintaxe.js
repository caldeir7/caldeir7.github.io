
/* comentário de multiplas linhas */

// comentario de linha única

// comando de saida de dados

/* Sempre que trabalhar com textos devemos colocá-lo entre aspas SIMPLES '', DUPLAS"" ou crase (textos sao chamados de strings) */
console.log("Olá, JavaScript");

/* Variáveis e Contstantes
espaços identificados na memória para armazenar dados temporáriamente  */

// Variavel: valor pode mudar
// Obs. Antigamente era usado "var"
let ano = 2022;

// Constante: Valor imutável (não muda)
const aluno = "Guilherme"
// const aluno = prompt();

// prompt comando para testes

console.log(ano);
console.log(aluno);

/* Operações matemáticas
+ (adição),
- (subtração),
/ (divisão),
* (multiplicação) */

let preco = 1500;
let desconto = 250;
let precoFinal = preco - desconto; /* Use a sintaxe camelCase: nomeComposto */

console.log(preco, desconto, precoFinal);

let produto ="TV Led";

/*A TV Led custava 1500 reais (fazer uma saida com variavel e texto) */

// 1° forma Tradicional CONCATENAÇÃO juntar dados dinamicos e estaticos sinal de + junta as coisas nesse caso

console.log("A "+produto+" custava "+preco+" reais.");


// 2º Forma Moderna - Template String/Literal
console.log(`A ${produto} custava ${preco} reais.`);