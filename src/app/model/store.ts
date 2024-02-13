import { GameI } from "./game";

export interface StoreI {

    id: number,
    name: string,
    domain: string,
    slug: string,
    games_count: number,
    image_background: string,
    description: string,
    games?: GameI[]

}