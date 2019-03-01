"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forge = require("node-forge");
var RSAKey_1 = require("./RSAKey");
var rsa = forge.pki.rsa;
var ForgeRSA = /** @class */ (function () {
    function ForgeRSA() {
    }
    ForgeRSA.prototype.crearRSAKey = function () {
        //Crear par de llaves RSA
        var keypair = rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
        //crear objeto RSAKey
        console.log(keypair);
        var rsaKey = new RSAKey_1.RSAKey(keypair.privateKey, keypair.publicKey);
        console.log(rsaKey.llave_privada);
        //crear hash usando sha1 para identificar el par de llaves RSA
        // let md = forge.md.sha1.create();
        // md.update('The quick brown fox jumps over the lazy dog');
        // console.log(md.digest().toHex());
        return null;
    };
    ForgeRSA.prototype.desencriptarMensaje = function (msg) {
        return null;
    };
    return ForgeRSA;
}());
exports.default = ForgeRSA;
