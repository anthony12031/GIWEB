import {RSAKey} from "./RSAKey";
export interface IRSA{
    desencriptarMensaje(msg:string):string;
    crearRSAKey():RSAKey;
}