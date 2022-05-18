import { OrderStatus } from "../types/OrderStatus";

export interface IOrder{
    id: number
    arrivalDate: Date
    senderName: string
    statuses: Array<OrderStatus>
}

