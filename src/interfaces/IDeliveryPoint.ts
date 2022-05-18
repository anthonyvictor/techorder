import { IAddress } from "./IAddress";

export interface IDeliveryPoint{
    id: string
    name: string
    address: IAddress
    maxReceiptDaysHour: Array<DayHour> // {day: "Tuesday", minHour: "06:00", maxHour: "16:00"}  
    notReceiptDates?: Array<Date> // ["2022-05-05", "2022-05-15"]
}

type DayHour = {
    day: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
    minHour: number
    maxHour: number
}