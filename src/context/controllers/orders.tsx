import { createContext, FC, useEffect, useState } from "react";
import { IOrder } from "../../interfaces/IOrder";
import { SimpleProps } from "../../types/simpleProps";
import { IUpdate } from "../../interfaces/IUpdate";
import { useApi } from "../api";
import { useLocal } from "../local";

const OrdersContext = createContext({} as IOrdersContext)

interface IOrdersContext{
    orders: Array<IOrder>
    updateOrders: (pageSize?: number, page?: number) => void
}

export const OrdersProvider : FC<SimpleProps> = ({children}) => {
    const [orders, setOrders] = useState<Array<IOrder>>([])
    const {api} = useApi()
    const [update, setUpdate] = useState<IUpdate>({count: 0, pageSize: 10, page: 1})
    
    
    useEffect(() => {
        let mounted = true

        async function getOrders(){
            const response = await api().get(
                `orders/?
                pageSize=${update.pageSize}&
                page=${update.page}`
            )
            if(response.status === 200){
                mounted && setOrders(response.data)
            }        
        }

        getOrders()

        return () => {mounted = false}
    }, [update.count])

    function updateOrders(pageSize = 10, page = 1){
        pageSize = pageSize < 1 ? 1 : pageSize
        page = page < 1 ? 1 : page
        setUpdate(prev => {
            return {
                count: prev.count + 1, pageSize: pageSize, page: page
            } 
        })
    }

    return (
        <OrdersContext.Provider value={{orders, updateOrders}}>
            {children}
        </OrdersContext.Provider>
    )
}