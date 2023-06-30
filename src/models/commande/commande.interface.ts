import { LigneCommande } from "../ligne-commande/ligne-commande.interface";
import { Utilisateur } from "../utilisateur/utilisateur.interface";

export interface Commande {
    id: number;
	creeLe: Date;
	status: boolean;
	utilisateur: Utilisateur;
	ligneCommandes: LigneCommande[];
}
