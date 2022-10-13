export class Auto {
    protected marca: string;
    protected modelo: string;;
    protected color: string;
    protected combustible: string;
    protected deposito:number;
    protected depositoActual:number;
    protected velocidad: number;

    public constructor(parametroMarca:string, parametroModelo:string, parametroColor:string, parametroCombustible:string, parametroDeposito:number,parametroDepositoActual:number, paramVelocidad:number) {
        this.marca = parametroMarca;
        this.modelo = parametroModelo;
        this.color = parametroColor;
        this.combustible = parametroCombustible;
        this.deposito = parametroDeposito;
        this.depositoActual = parametroDepositoActual
        this.velocidad = paramVelocidad;        
    }

public llenarTanque() {
    let combustibleACargar:number = this.deposito - this.depositoActual;

  console.log('Tú tanque esta lleno se cargó ', combustibleACargar);
  
  this.depositoActual = this.deposito
}

public acelerar(){
    this.velocidad += 5;
}

public frenar(){
    this.velocidad -= 5;
}

public velocidadActual() {
    console.log('La velocidad actual es: ' + this.velocidad);

}

}