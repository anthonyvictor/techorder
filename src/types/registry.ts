export type Registry = {
    type: RegistryType
    key: string
}

export enum RegistryType{
    CPF='CPF/CNPJ',
    RG='RG'
} 