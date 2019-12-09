import teclado = require("readline-sync");

var titulo:string;
var desc:string;

var titulo = teclado.question("Digite o titulo: ");
var desc = teclado.question("Digite a descricao: ");


console.log(`<html> <head> <title> ~ Programa TS ~ </title> </head> <body> <h1>${titulo}</h1> <hr/><p>${desc}</p> </body> </html>`);