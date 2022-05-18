import { IDeliveryPoint } from "./IDeliveryPoint";

export interface IUser{
    id: number
    name: string
    email: string
    type: 'enterprise' | 'person'
}

export interface IEnterprise extends IUser{
    deliveryPoints: Array<IDeliveryPoint>
}

export interface IPerson extends IUser{
    currentDeliveryPoint: IDeliveryPoint | null
}


// const a : IEnterprise | IPerson = {
//     deliveryPoints: [],
//     // currentDeliveryPoint: null,
//     email: '',
//     id: 0,
//     name: '',
//     type: 'enterprise'
// }


//if there is not a headquarter, system will show a select to pick one