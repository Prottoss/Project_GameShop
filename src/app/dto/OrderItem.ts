import { Game } from "./Game";

export class OrderItem
{
    orderGame: Game;
    orderKey: string;

    constructor (oKey: string, oGame: any)
    {
        this.orderGame = oGame;
        this.orderKey = oKey;
    }
}