import { ClaroConnector, ClaroCard } from "./Claro";
import { TigoCard } from "./Tigo";
import { TigoToClaroAdapter } from "./Adapter";

const connector = new ClaroConnector();

const claroCard = new ClaroCard();
const tigoCard = new TigoCard();
const tigoToClaroAdapter = new TigoToClaroAdapter(tigoCard);

console.log("- \x1b[1mConectando la SIM\x1b[0m -");

console.log("\n--- \x1b[91;1mSIM Claro\x1b[0m ---");
connector.attachClaroCard(claroCard);
connector.sendMessage("Mensaje a Claro");
connector.disattachCard();

console.log("\n--- \x1b[94;1mSIM Tigo\x1b[0m ---");
connector.attachClaroCard(tigoCard);
connector.sendMessage("Mensaje a Tigo");
connector.disattachCard();

console.log("\n--- \x1b[92;1mAdaptator de SIM Tigo a Claro\x1b[0m ---");
connector.attachClaroCard(tigoToClaroAdapter);
connector.sendMessage("Mensaje a Tigo desde Claro");
connector.disattachCard();

console.log("\n- \x1b[1mUsando la SIM\x1b[0m -");

console.log("\n--- \x1b[91;1mSIM Claro\x1b[0m ---");
claroCard.sendClaroMessage("Mensaje a Claro");
let response = claroCard.getClaroResponse();
console.log("Respuesta: ", response);

console.log("\n--- \x1b[94;1mSIM Tigo\x1b[0m ---");
tigoCard.sendTigoMessage("Mensaje a Tigo");
response = tigoCard.getTigoResponse();
console.log("Respuesta: ", response);
