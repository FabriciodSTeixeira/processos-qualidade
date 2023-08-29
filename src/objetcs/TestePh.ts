export class TestePh {
    private _valorPh: number = 0;
    private _horaTeste: number = 0;
    private _minutoTeste: number = 0;
    private _nomeProduto: string = "";

    constructor(nomeProduto: string, valorPh: number, horaTeste: number, minutoTeste: number) {
        this._nomeProduto = nomeProduto;
        this._valorPh = valorPh;
        this._minutoTeste = minutoTeste;
        this._horaTeste = horaTeste

    }


    public get nomeProduto(): string {
        return this._nomeProduto;
    }

    public set nomeProduto(nomeProduto: string) {
        this._nomeProduto = nomeProduto;
    }

    public get valorPh(): number {
        return this._valorPh
    }

    private set valorPh(valorPh: number) {
        this._valorPh = valorPh;
    }


    public get minutoTeste(): number {
        return this._minutoTeste;
    }

    public set minutoTeste(minutoTeste: number) {
        this._minutoTeste = minutoTeste;
    }


    public get horaTeste(): number {
        return this._horaTeste;
    }

    public set horaTeste(horaTeste: number) {
        this._horaTeste = horaTeste;
    }

    retornaAcidez() : string {
        if(this._valorPh >= 8){
            return "Ph Alcalino";
        }else if(this.valorPh <= 6.99){
            return "Ph Acido"
        }else{
            return "Ph Neutro"
        }
    }



}