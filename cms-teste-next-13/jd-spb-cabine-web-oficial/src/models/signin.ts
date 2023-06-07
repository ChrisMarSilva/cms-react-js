type ListaIfInData = {
    usuario: string;
    senha: string;
}

type IspbIf = {
    lista_ispb: IspbIfItem[]
}

type IspbIfItem = {
    ispb: string;
    nome: string;
}


type SignInData = {
    usuario: string;
    senha: string;
    ispbif: string;
}

type SignInDataResponse = {
    expires_in: number;
    access_token: string;
}