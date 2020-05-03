import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { UserAdress } from "../entity/UserAdress";
import { User } from "../entity/User";

export class UserAdressController {


    static async allOfUser(request: Request, response: Response, next: NextFunction) {
        const userAdressRepository = getRepository(UserAdress);
        return response.send(await userAdressRepository.find({ where: { "user": request.params.user_id }}));
    }

    //private userAdressRepository = getRepository(UserAdress);

    static async one(request: Request, response: Response, next: NextFunction) {
        const userAdressRepository = getRepository(UserAdress);
        return response.send(await userAdressRepository.find({ where: { "user": request.params.user_id }}));
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const userAdressRepository = getRepository(UserAdress);
        return response.send(await userAdressRepository.save(request.body));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        const userAdressRepository = getRepository(UserAdress);
        let userAdressToRemove = await userAdressRepository.findOne(request.params.id);
        await userAdressRepository.remove(userAdressToRemove);
    }

}