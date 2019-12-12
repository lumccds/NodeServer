import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa{

    private disciplina: string;
    private qtdAula: number;
    private horaAula: number;

    public setDisciplina(disciplina: string): void{
        this.disciplina = disciplina;
    }
    public getDisciplina(): string{
        return this.disciplina;
    }
    public setQtdAula(qtdAula : number): void{
        this.qtdAula = qtdAula;
    }
    public getQtdAula(): number{
        return this.qtdAula;
    }
    public setHoraAula(horaAula : number): void{
        this.horaAula = horaAula;
    }
    public getHoraAula(): number{
        return this.horaAula;
    }

} 