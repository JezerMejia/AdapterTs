"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaroConnector = exports.ClaroCard = void 0;
const card_1 = require("./card");
class ClaroCard extends card_1.SIMCard {
    constructor() {
        super();
        this.sentMessage = "";
        this.tipo = "Claro";
    }
    sendClaroMessage(message) {
        console.log(`Enviando a Claro: ${message}`);
        this.sentMessage = message;
    }
    getClaroResponse() {
        return this.sentMessage.split("").reverse().join("");
    }
}
exports.ClaroCard = ClaroCard;
class ClaroConnector {
    constructor() { }
    disattachCard() {
        this.card = undefined;
    }
    attachClaroCard(card) {
        if (card.tipo !== "Claro") {
            console.error("ERROR: \x1b[91mTarjeta SIM incorrecta\x1b[0m");
            return;
        }
        this.card = card;
    }
    sendMessage(message) {
        if (this.card == undefined) {
            console.error("ERROR: \x1b[91mNo hay tarjeta SIM insertada\x1b[0m");
            return;
        }
        this.card.sendClaroMessage(message);
        const response = this.card.getClaroResponse();
        console.log(`Respuesta: ${response}`);
    }
}
exports.ClaroConnector = ClaroConnector;
