interface IUser{
    fullName: string
    username: string
    type: 'provider' | 'customer' | 'sender' | 'reception' | 'shipping'
    provider: {logo: string; workingDays: string; exceptionDates: Array<Date>}
    customer: ICustomer
    sender: {customers: Array<ICustomer>; registry: string}
}

interface ICustomer{
    logo: string; 
    receiptDays: string;
}