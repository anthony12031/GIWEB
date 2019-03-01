"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forge = require("node-forge");
var RSAKey_1 = require("./RSAKey");
var rsa = forge.pki.rsa;
var pki = forge.pki;
var ForgeRSA = /** @class */ (function () {
    function ForgeRSA() {
        this.keyToRSAKey = {};
    }
    ForgeRSA.prototype.crearRSAKey = function () {
        //Crear par de llaves RSA
        var keypair = rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
        //crear objeto RSAKey
        var rsaKey = new RSAKey_1.RSAKey(keypair.privateKey, keypair.publicKey);
        var publicKeyPem = pki.publicKeyToPem(keypair.publicKey);
        //crear identificador unico para el para el objeto usando sha1 para generar un hash
        var md = forge.md.sha1.create();
        md.update(publicKeyPem);
        var hash = md.digest().toHex();
        console.log(hash);
        this.keyToRSAKey[hash] = rsaKey;
        //this.encriptarMensaje("hola mundo",publicKeyPem,hash);
        return {
            hash: hash,
            llave_publica: publicKeyPem
        };
    };
    ForgeRSA.prototype.encriptarMensaje = function (msg, pemPublicKey, hash) {
        var publicKey = pki.publicKeyFromPem(pemPublicKey);
        var encrypted = publicKey.encrypt(msg);
        console.log(encrypted);
        //this.desencriptarMensaje(encrypted,hash);
        return encrypted;
    };
    ForgeRSA.prototype.desencriptarMensaje = function (msg, hash) {
        var rsaKey = this.keyToRSAKey[hash];
        if (!rsaKey) {
            console.log("no existe llave para el hash dado");
            throw "no existe llave para el hash dado";
        }
        var mensajeOriginal = rsaKey.llave_privada.decrypt(msg);
        console.log(mensajeOriginal);
        return mensajeOriginal;
    };
    return ForgeRSA;
}());
exports.default = ForgeRSA;
