import { Game } from "./Game";
import { OrderItem } from "./OrderItem";

export class Order
{
    orderID: string;
    orderDate: Date;
    orderQty: number;
    orderPrice: number;
    orderItem: OrderItem[];

    constructor (oId: string, oQty: number, oPrice: number, oDate:Date)
    {
        this.orderID = oId;
        this.orderDate = oDate;
        this.orderQty = oQty;
        this.orderPrice = oPrice;
        this.orderItem = [];
    }

    static generateEmptyOrder(){
        return new Order("",0,0,new Date);
    }
} 