import {Produto} from "./Produto"

var p1, p2: Produto;

p1 = new Produto(1, "Mouse", "Mouse com Luz", 100, 10, "www.e-commerce.com/fotomouse.jpg");

p2 = new Produto(2, "Teclado", "Teclado com Luz", 200, 10, "www.e-commerce.com/fototeclado.jpg");

console.log(p1.getInfo());
console.log(p2.getInfo());

console.log(p1);
console.log(p2);