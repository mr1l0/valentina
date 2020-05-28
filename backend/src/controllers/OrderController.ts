import {getRepository, ConnectionOptions} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Order} from "../entity/Order";
import { OrderItem } from "../entity/OrderItem";
import { OfficeHour } from "../entity/OfficeHour";
import { OrderTime } from "../models/OrderTime";

export class OrderController {


    static async all(request: Request, response: Response, next: NextFunction) {        
        const orderRepository = getRepository(Order);        
        
        let resp = await orderRepository.find({            
            relations: ['orderItem', 'orderItem.product', 'user', 'userAdress'],
            where: { 'user': request.params.user_id }}
        )
        
        return response.send(resp);
    }

    static dateEqual(dateA, dateB: Date): boolean {        
        return ((dateA.getDate() + '/' + dateA.getMonth() + '/' + dateA.getFullYear() ) == (dateB.getDate() + '/' + dateB.getMonth() + '/' + dateB.getFullYear()))
    }
    
    static async freeHours(request: Request, response: Response, next: NextFunction) {        
        const today: Date = new Date(Date.now());
        const todayHour = today.getHours();
        const data: Date = new Date(request.params.date);        
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();        
        const minutes = [0, 15, 30, 45]

        const officeHourRepository = getRepository(OfficeHour);        
        const orderRepository = await getRepository(Order).createQueryBuilder('order')
            .select('order.scheduledTo, count(1) as countN')
            .groupBy('order.scheduledTo')
            .where(`order.scheduledTo BETWEEN '${year}-${month}-${day} 00:00:00' and '${year}-${month}-${day} 23:59:59'`)
            .getRawMany();        
        
        let officeHour: OfficeHour = await officeHourRepository.findOne({ where: { 'weekDay': data.getDay() }});
        let freeHours: OrderTime[] = [];

        // TO-DO Unificar o FOR e extrair em método
        for (let hour = officeHour.startHourTurnOne; hour <= officeHour.endHourTurnOne; hour++) {
            let minutesToAdd: Number[] = [];
            await minutes.forEach(async minute => {  
                let orderCount = await orderRepository.find(time => time.scheduledTo.getHours() == hour && time.scheduledTo.getMinutes() == minute);
                if((orderCount == undefined) ||  (orderCount.countN < 2)){
                
                    minutesToAdd.push(minute);
                }
            })            
            if( minutesToAdd.length > 0 && (!OrderController.dateEqual(data, today) || hour > todayHour + 1)) {
                freeHours.push({ hour, minutes: minutesToAdd});            
            }
        }
        for (let hour = officeHour.startHourTurnTwo; hour <= officeHour.endHourTurnTwo; hour++) {
            let minutesToAdd: Number[] = [];
            await minutes.forEach(async minute => {  
                let orderCount = await orderRepository.find(time => time.scheduledTo.getHours() == hour && time.scheduledTo.getMinutes() == minute);
                if((orderCount == undefined) ||  (orderCount.countN < 2)){
                
                    minutesToAdd.push(minute);
                }
            })
            console.log(minutesToAdd);
            if(minutesToAdd.length > 0 && (!OrderController.dateEqual(data, today) || hour > todayHour + 1)) {
                freeHours.push({ hour, minutes: minutesToAdd});            
            }
        }
        
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