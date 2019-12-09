"use strict";
exports.__esModule = true;
var teclado = require("readline-sync");
var titulo;
var desc;
var titulo = teclado.question("Digite o titulo: ");
var desc = teclado.question("Digite a descricao: ");
console.log("<html> <head> <title> ~ Programa TS ~ </title> </head> <body> <h1>" + titulo + "</h1> <hr/><p>" + desc + "</p> </body> </html>");
