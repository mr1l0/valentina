import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {OfficeHour} from "../entity/OfficeHour";

export class OfficeHourController {

    //private officeHourRepository = getRepository(OfficeHour);

    static async all(request: Request, response: Response, next: NextFunction) {
        const officeHourRepository = getRepository(OfficeHour);
        return response.send(await officeHourRepository.find());
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const officeHourRepository = getRepository(OfficeHour);
        return response.send(await officeHourRepository.findOne(request.params.id));
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const officeHourRepository = getRepository(OfficeHour);        
        return response.send(await officeHourRepository.save(request.body));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        const officeHourRepository = getRepository(OfficeHour);
        let officeHourToRemove = await officeHourRepository.findOne(request.params.id);
        await officeHourRepository.remove(officeHourToRemove);
    }

}