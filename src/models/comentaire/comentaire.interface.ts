import { Boutique } from "../boutique/boutique.interface";

export interface Comentaire {
    id: number;
	titre: string;
	contenu: string;
	creerLe: Date;
	boutique: Boutique;
	utilisateur: Boutique;
}
