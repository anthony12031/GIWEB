import * as forge from "node-forge";
import {RSAKey} from "./RSAKey";
import {IRSA,RSAResponse} from "./IRSA";

const rsa = forge.pki.rsa;
let  pki = forge.pki;

export default class ForgeRSA implements IRSA{
    //dado un hash retorna un objeto RSAKey
    keyToRSAKey:any;

    constructor(){
        this.keyToRSAKey={};
    }

    crearRSAKey():RSAResponse{
        //Crear par de llaves RSA
        let keypair  = rsa.generateKeyPair({bits: 2048, e: 0x10001});
        //crear objeto RSAKey
        let rsaKey = new RSAKey(keypair.privateKey,keypair.publicKey); 
        let publicKeyPem = pki.publicKeyToPem(keypair.publicKey);
        //crear identificador unico para el para el objeto usando sha1 para generar un hash
        let md = forge.md.sha1.create();
        md.update(publicKeyPem);
        let hash =  md.digest().toHex();
        console.log(hash);
        this.keyToRSAKey[hash] = rsaKey;
        //this.encriptarMensaje("hola mundo",publicKeyPem,hash);
        return {
            hash:hash,
            llave_publica:publicKeyPem
        };
    }

    encriptarMensaje(msg:string,pemPublicKey:string,hash:string):string{
        let publicKey = pki.publicKeyFromPem(pemPublicKey);
        let encrypted = publicKey.encrypt(msg);
        console.log(encrypted);
        //this.desencriptarMensaje(encrypted,hash);
        return encrypted;
    }

    desencriptarMensaje(msg:string,hash:string):string{
        var rsaKey = this.keyToRSAKey[hash];
        if (!rsaKey) {
            console.log("no existe llave para el hash dado");
            throw "no existe llave para el hash dado";
        }
        var mensajeOriginal = rsaKey.llave_privada.decrypt(msg);
        console.log(mensajeOriginal);
        return mensajeOriginal;
    }
}