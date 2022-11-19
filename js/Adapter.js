"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TigoToClaroAdapter = void 0;
const Claro_1 = require("./Claro");
class TigoToClaroAdapter extends Claro_1.ClaroCard {
    constructor(tigoCard) {
        super();
        this.tigoCard = tigoCard;
    }
    sendClaroMessage(message) {
        this.tigoCard.sendTigoMessage(message);
    }
    getClaroResponse() {
        const tigoResponse = this.tigoCard.getTigoResponse();
        const cleanResponse = tigoResponse.substring(8, tigoResponse.length - 8);
        return cleanResponse.split("").reverse().join("");
    }
}
exports.TigoToClaroAdapter = TigoToClaroAdapter;
