"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TigoCard = void 0;
const card_1 = require("./card");
class TigoCard extends card_1.SIMCard {
    constructor() {
        super();
        this.sentMessage = "";
        this.tipo = "Tigo";
    }
    sendTigoMessage(message) {
        console.log(`Enviando a Tigo: ${message}`);
        this.sentMessage = message;
    }
    getTigoResponse() {
        return "T_I_G_O." + this.sentMessage + "T_I_G_O.";
    }
}
exports.TigoCard = TigoCard;
