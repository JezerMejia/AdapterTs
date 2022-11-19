import { SIMCard } from "./card";

export class TigoCard extends SIMCard {
  constructor() {
    super();
    this.tipo = "Tigo";
  }

  protected sentMessage: string = "";

  sendTigoMessage(message: string) {
    console.log(`Enviando a Tigo: ${message}`);
    this.sentMessage = message;
  }

  getTigoResponse(): string {
    return "T_I_G_O." + this.sentMessage + "T_I_G_O.";
  }
}
