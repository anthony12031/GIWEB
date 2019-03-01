
export interface RSAResponse{
    hash:string,
    llave_publica:any
}
export interface IRSA{
    desencriptarMensaje(msg:string,hash:string):string;
    crearRSAKey():RSAResponse;
}