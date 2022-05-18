import { createContext, FC, useState } from "react";
import { IHeadquarters } from "../interfaces/IHeadquart";
import { IUser } from "../interfaces/IUser";
import { SimpleProps } from "../types/simpleProps";

interface ITestContext{

}

const TestContext = createContext<ITestContext | null>(null) 

export const TestProvider : FC<SimpleProps> = ({children}) => {

    // const users: Array<IUser> = [
    //     {}
    // ]
    
    const [headquarters, setHeadquarters] = useState<Array<IHeadquarters>>(
        [
            {
                id: '4as25AK5',
                name: 'REDEMIX - AMAZONAS',
                address: {postalCode: '40000000', street: 'RUA AMAZONAS, PITUBA', streetNumber: '2100A', city: 'Salvador', state: 'Bahia', country: 'Brazil'},
                maxReceiptDaysHour: [{day: 'Monday', minHour: 6, maxHour: 16}, {day: 'Tuesday', minHour: 6, maxHour: 16}],
            }
        ]
    )



    return (
        <TestContext.Provider value={{}}>
            {children}
        </TestContext.Provider>
    )
}
