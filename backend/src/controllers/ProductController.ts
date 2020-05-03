import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Product} from "../entity/Product";

export class ProductController {

    //private productRepository = getRepository(Product);

    static async all(request: Request, response: Response, next: NextFunction) {
        const productRepository = getRepository(Product);
        return response.send(await productRepository.find());
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const productRepository = getRepository(Product);
        return response.send(await productRepository.findOne(request.params.id));
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const productRepository = getRepository(Product);
        return response.send(await productRepository.save(request.body));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        const productRepository = getRepository(Product);
        let userToRemove = await productRepository.findOne(request.params.id);
        await productRepository.remove(userToRemove);
    }

}