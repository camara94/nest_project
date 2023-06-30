import { Adresse } from "../adresse/adresse.interface";
import { Commande } from "../commande/commande.interface";

export interface Livraison {
    livreLe: Date;
	commande: Commande;
	adresse: Adresse;
}
