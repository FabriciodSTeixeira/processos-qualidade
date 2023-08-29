export class AnaliseCloro{
    private _pontoAnalise : string;
    private _valorAnalise : number;
    private _horarioAnalise : string;

    constructor(pontoAnalise : string, valorAnalise : number, horarioAnalise : string){
        this._pontoAnalise = pontoAnalise;
        this._valorAnalise = valorAnalise
        this._horarioAnalise = horarioAnalise;
    }

    
    public get pontoAnalise() : string {
        return this._pontoAnalise;
    }

    
    public set pontoAnalise(pontoAnalise : string) {
        this._pontoAnalise = pontoAnalise;
    }
    
    
    public get valorAnalise() : number {
        return this._valorAnalise;
    }
    
    
    public set valorAnalise( valorAnalise : number) {
        this._valorAnalise = valorAnalise;
    }

    
    public get horarioAnalise() : string {
        return this._horarioAnalise;
    }

    
    public set horarioAnalise(horarioAnalise : string) {
        this._horarioAnalise = horarioAnalise;
    }
    

    nivelDeCloro(){
        if(this._valorAnalise > 2){
            return "Valor está alto demais! Reduza a dosagem."
        }else if(this._valorAnalise <0.1){
            return "Valor está baixo demais. Aumente a dosagem."
        }else{
            return "Valor do cloro está dentro dos padrões recomendados."
        }
    }
    
    
    


}