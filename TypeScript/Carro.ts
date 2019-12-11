export class Carro{
    private placa:  string;
    private cor:    string;
    private modelo: string;
    private ano:    number;
    private ligado: boolean;


public getPlaca():string{
    return this.placa;
}
public setPlaca (outraPlaca:string):void{
    this.placa = outraPlaca;
}

public getCor():string{
    return this.cor;
}
public setCor (outraCor:string):void{
    this.cor = outraCor;
}

public getAno():number{
    return this.ano;
}
public setAno (outroAno:number):void{
    if (outroAno < 1990 || outroAno > 2100) {
        console.log("O valor para o ano do carro eh invalido!");   
    }
    else {
        this.ano = outroAno;
    }
}

public getModelo():string{
    return this.modelo;
}
public setModelo (outroModelo:string):void{
    this.modelo = outroModelo;
}


andar():void{
    console.log(`O carro ${this.modelo} de placa ${this.placa} do ano ${this.ano} está andando.`);
}

parar():void{
    console.log(`O carro ${this.modelo} de cor ${this.cor} parou.`)
}

ligar():void{
    this.ligado = true;
    if (this.ligado == true) {
        this.andar()            
    } else {
       console.log(`O carro ${this.modelo} não liga.`)
    }
}
desligar():void{
    console.log(`O carro ${this.modelo} esta desligado.`)
}
}