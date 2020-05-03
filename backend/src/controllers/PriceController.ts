import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Price} from "../entity/Price";

export class PriceController {

    //private priceRepository = getRepository(Price);

    static async all(request: Request, response: Response, next: NextFunction) {        
        const priceRepository = getRepository(Price);                
        return response.send(await priceRepository.find());
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const priceRepository = getRepository(Price);
        return response.send(await priceRepository.findOne(request.params.id));
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const priceRepository = getRepository(Price);
        return response.send(await priceRepository.save(request.body));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        const priceRepository = getRepository(Price);
        let userToRemove = await priceRepository.findOne(request.params.id);
        await priceRepository.remove(userToRemove);        
    }

}