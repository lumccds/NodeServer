import { Pessoa } from "./Pessoa";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

var p:Pessoa;
p = new Pessoa();
p.setNumRegistro(1234);
p.setNome("Genereites de Albuquerque Lima Filho Jr");
p.setEmail("gene@generates.com.br");
p.setTelefone("+55 11 98765-4321");
console.log(p);

var a: Aluno;
a = new Aluno();
a.setNumRegistro(1235);
a.setNome("Isidro de Almeida Botelho");
a.setEmail("isi@isidrocorp.com");
a.setTelefone("+55 11 12345-6789");
a.setCurso("Java Full Stack Galaxy Master");
a.setAnoMatricula(2019);
console.log(a);

var pf: Professor;
pf = new Professor();
pf.setNumRegistro(13);
pf.setNome("Haroldo da Silva");
pf.setEmail("h.silva@isidrocorp.com");
pf.setTelefone("+55 11 97138-2465");
pf.setDisciplina("Jogos Digitais");
pf.setQtdAula(20);
pf.setHoraAula(100);
console.log(pf);
