export type OrderStatus = {
    date: Date
    type: 
    'sent' | 'rejected' |
    'approved' | 'in route' |
    'error' | 'finished'
    shortMessages?: Array<
    'no response' | 
    'date changed' | 
    'items changed' | 
    'awaiting approval' | 
    'delivery error'
    >  
}

/*
    '

    quando o usuário envia o pedido, o status retorna 'sent - awaiting approval'
    quando a recepção envia o pedido, o status retorna 'approved'

    qualquer setor no backend pode alterar a data de chegada, se for a recepção,
    ele devolve status: 'approved - date changed', caso seja na logística,
    retorna 'in route - date changed'

    qualquer setor no backend pode alterar os itens, se for a recepção,
    ele devolve status: 'approved - items changed', caso seja na logística,
    retorna 'in route - items changed'
*/ 