import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Order} from "../entity/Order";
import { OrderItem } from "../entity/OrderItem";
import { OfficeHour } from "../entity/OfficeHour";
import { OrderTime } from "../models/OrderTime";

export class OrderController {

    //private userRepository = getRepository(User);

    static async all(request: Request, response: Response, next: NextFunction) {        
        const orderRepository = getRepository(Order);        
        
        let resp = await orderRepository.find({            
            relations: ['orderItem', 'orderItem.product', 'user', 'userAdress'],
            where: { 'user': request.params.user_id }}
        )
        
        return response.send(resp);
    }
    
    static async freeHours(request: Request, response: Response, next: NextFunction) {
        let data: Date = new Date(request.params.date);

        const officeHourRepository = getRepository(OfficeHour);
        const orderRepository = getRepository(Order);        
        
        let officeHour: OfficeHour = await officeHourRepository.findOne({ where: { 'weekDay': data.getDay() }});

        let freeHours: OrderTime[] = [];

        for (let hour = officeHour.startHourTurnOne; hour <= officeHour.endHourTurnOne; hour++) {
            freeHours.push({ hour, minutes: [ 0, 15, 30, 45 ]});
        }
        for (let hour = officeHour.startHourTurnTwo; hour <= officeHour.endHourTurnTwo; hour++) {
            freeHours.push({ hour, minutes: [ 0, 15, 30, 45 ]});
        }
        
        let resp = await orderRepository.find({                    
           where: { 'user': request.params.user_id }}
        )
        
        return response.send(freeHours);
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const orderRepository = getRepository(Order);
        return response.send(await orderRepository.findOne(request.params.id));
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const orderRepository = getRepository(Order);        
        const orderItemRepository = getRepository(OrderItem);        

        let order = await orderRepository.save<Order>(request.body);
        console.log(order);
        request.body.orderItem.forEach(async item => {
            const orderItem: OrderItem = {order, ...item};            
            
            return await orderItemRepository.save<OrderItem>(orderItem);            
        });
        
        return response.send(order);
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        const orderRepository = getRepository(Order);
        let userToRemove = await orderRepository.findOne(request.params.id);
        await orderRepository.remove(userToRemove);
    }

}