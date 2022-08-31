import { AppDataSource } from '../data-source';
import { UmidadeBifinho } from '../entity/UmidadeBifinho';
import { NextFunction, Request, Response } from "express"

const umidadeBifinhoRepository = AppDataSource.getRepository(UmidadeBifinho);

class UmidadeBifinhoController {

    static todasAsAnalises = async(req:Request, res:Response)=>{
        const todasAsAnalises = await umidadeBifinhoRepository.find();
        return res.status(200).send(todasAsAnalises);
    };
    
    static umaAnalise = async(req:Request, res:Response) =>{
        let id =  req.params.id;
        let idParsed = parseInt(id);
        
        if(idParsed = NaN){
            return res.status(404).send();
        };

        const umaAnalise = await umidadeBifinhoRepository.findOneByOrFail({id : idParsed})

        return res.status(200).send(umaAnalise);

    }

    static novaAnalise  = async (req:Request, res:Response) =>{
        let {produto, resultado, data} = req.body;

        if(!(produto && resultado && data)){
            return res.status(404).send();
        }

        const umidade = new UmidadeBifinho();
        umidade.nome_produto = produto;
        umidade.resultado_analise = resultado;
        umidade.data_analise = data;

        await umidadeBifinhoRepository.save(umidade);
        
        return res.status(201).send(umidade);
    }


    static editarResultado = async (req:Request, res:Response) =>{

        let id =  req.params.id;
        let idParsed = parseInt(id);
        if(idParsed = NaN){
            return res.status(404).send();
        };
        const analise = await umidadeBifinhoRepository.findOneByOrFail({id : idParsed});

        const {novoNome,novoResultado} = req.body;

        if(!(novoNome && novoResultado)){
            return res.status(404).send();
        };

        analise.nome_produto = novoNome;
        analise.resultado_analise = novoResultado;
        // umidadeBifinhoRepository.merge(analise,req.body)

        umidadeBifinhoRepository.save(analise);

        return res.status(204).send(analise);

    }

    

}