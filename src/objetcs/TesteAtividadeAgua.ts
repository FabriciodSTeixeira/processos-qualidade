export class AtividadeAgua{
    private _nome:string = "";
    private _valorAW : number = 0;
    private _temperaturaAnalise : number = 0;
    private _horarioAnalise : string = "00:00";

    constructor(nome:string,valorAW:number,temperaturaAnalise:number,horarioAnalise:string) {
        this._nome = nome;
        this._valorAW = valorAW;
        this._temperaturaAnalise = temperaturaAnalise;
        this._horarioAnalise = horarioAnalise;
    }

    
    public get nome() : string {
        return this._nome;
    }
    
    public set nome(nome : string) {
        this._nome = nome;
    }
    
    
    public get valorAW() : number {
        return this._valorAW;
    }
    
    public set valorAW(valorAW :number) {
        this._valorAW = valorAW;
    }

    public get temperaturaAnalise() : number {
        return this._temperaturaAnalise;
    }
    
    public set temperaturaAnalise(temperaturaAnalise : number) {
        this._temperaturaAnalise = temperaturaAnalise;
    }
    
    public get horarioAnalise() : string {
        return this._horarioAnalise;
    }
    
    public set horarioAnalise(horarioAnalise : string) {
        this._horarioAnalise = horarioAnalise;
    }
    
    verificaAwRange(valorAw:number){
        if(valorAw <= 600){
            return "Valor AW está abaixo do padrão, produto muito seco."
        }else if(valorAw >= 670){
            return "Valor AW está acima do padrão, produto muito úmido"
        }else{
            return "Produto dento de valores padrões."
        }
    }
    
    
    
}