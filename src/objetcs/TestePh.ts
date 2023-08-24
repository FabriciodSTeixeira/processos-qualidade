export class TestePh {
    private valorPh: number = 0;
    private horaTeste: number = 0;
    private minutoTeste: number = 0;
    private nomeProduto: string = "";

    constructor(nomeProduto: string, valorPh: number, horaTeste: number, minutoTeste: number) {
        this.nomeProduto = nomeProduto;
        this.valorPh = valorPh;
        this.minutoTeste = minutoTeste;
        this.horaTeste = horaTeste

    }


    public get getNomeProduto(): string {
        return this.nomeProduto;
    }

    public set setNomeProduto(nomeProduto: string) {
        this.nomeProduto = nomeProduto;
    }

    public get getValorPh(): number {
        return this.valorPh
    }

    public set setValorPh(valorPh: number) {
        this.valorPh = valorPh;
    }


    public get getMinutoTeste(): number {
        return this.minutoTeste;
    }

    public set setMinutoTeste(minutoTeste: number) {
        this.minutoTeste = minutoTeste;
    }


    public get getHoraTeste(): number {
        return this.horaTeste;
    }

    public set setHoraTeste(horaTeste: number) {
        this.horaTeste = horaTeste;
    }

    retornaAcidez() {
        if(this.getValorPh >= 8){
            return "Ph Alcalino";
        }else if(this.valorPh <= 6.99){
            return "Ph Acido"
        }else{
            return "Ph Neutro"
        }
    }


}