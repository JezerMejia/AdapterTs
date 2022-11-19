import { SIMCard } from "./card";

export class ClaroCard extends SIMCard {
  constructor() {
    super();
    this.tipo = "Claro";
  }

  protected sentMessage: string = "";

  sendClaroMessage(message: string) {
    console.log(`Enviando a Claro: ${message}`);
    this.sentMessage = message;
  }

  getClaroResponse(): String {
    return this.sentMessage.split("").reverse().join("");
  }
}

export class ClaroConnector {
  private card?: ClaroCard;

  constructor() {}

  public disattachCard() {
    this.card = undefined;
  }
  public attachClaroCard(card: SIMCard) {
    if (card.tipo !== "Claro") {
      console.error("ERROR: \x1b[91mTarjeta SIM incorrecta\x1b[0m");
      return;
    }

    this.card = card as ClaroCard;
  }

  public sendMessage(message: string) {
    if (this.card == undefined) {
      console.error("ERROR: \x1b[91mNo hay tarjeta SIM insertada\x1b[0m");
      return;
    }
    this.card.sendClaroMessage(message);
    const response = this.card.getClaroResponse();
    console.log(`Respuesta: ${response}`);
  }
}
