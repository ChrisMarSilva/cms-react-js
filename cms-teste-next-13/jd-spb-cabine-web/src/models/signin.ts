export type ListaIfInData = {
    usuario: string;
    senha: string;
}

export type IspbIf = {
    lista_ispb: IspbIfItem[]
}

type IspbIfItem = {
    ispb: string;
    nome: string;
}


export type SignInData = {
    usuario: string;
    senha: string;
    ispbif: string;
}

// export type SignInRequestData = {
//     usuario: string;
//     senha: string;
//     ispbif: string;
// }