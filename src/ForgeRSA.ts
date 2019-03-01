import * as forge from "node-forge";
import {RSAKey} from "./RSAKey";
import {IRSA} from "./IRSA";

const rsa = forge.pki.rsa;

export default class ForgeRSA implements IRSA{
    //dado un hash retorna un objeto RSAKey
    hashToRSAKey:object;

    crearRSAKey():RSAKey{
        //Crear par de llaves RSA
        let keypair  = rsa.generateKeyPair({bits: 2048, e: 0x10001});
        //crear objeto RSAKey
        console.log(keypair);
        let rsaKey = new RSAKey(keypair.privateKey,keypair.publicKey); 
        console.log(rsaKey.llave_privada);
        //crear hash usando sha1 para identificar el par de llaves RSA
        // let md = forge.md.sha1.create();
        // md.update('The quick brown fox jumps over the lazy dog');
        // console.log(md.digest().toHex());
        return null;
    }

    desencriptarMensaje(msg:string):string{
        return null;
    }
}