import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    //private userRepository = getRepository(User);

    static async all(request: Request, response: Response, next: NextFunction) {
        const userRepository = getRepository(User);
        return response.send(await userRepository.find());
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const userRepository = getRepository(User);
        return response.send(await userRepository.findOne(request.params.id));
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const userRepository = getRepository(User);        
        return response.send(await userRepository.save(request.body));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        const userRepository = getRepository(User);
        let userToRemove = await userRepository.findOne(request.params.id);
        await userRepository.remove(userToRemove);
    }

}