import { TigoCard } from "./Tigo";
import { ClaroCard } from "./Claro";

export class TigoToClaroAdapter extends ClaroCard {
  private tigoCard: TigoCard;

  constructor(tigoCard: TigoCard) {
    super();
    this.tigoCard = tigoCard;
  }

  override sendClaroMessage(message: string) {
    this.tigoCard.sendTigoMessage(message);
  }

  override getClaroResponse(): String {
    const tigoResponse = this.tigoCard.getTigoResponse();
    const cleanResponse = tigoResponse.substring(8, tigoResponse.length - 8);
    return cleanResponse.split("").reverse().join("");
  }
}
