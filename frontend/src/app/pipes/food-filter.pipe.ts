import { Pipe, PipeTransform } from '@angular/core';
import { OrderItem } from '../model/order-item';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(orderItens: OrderItem[]): any {
    return orderItens.filter(orderItem => orderItem.product.group.name == 'Salgadinho');
  }

}
