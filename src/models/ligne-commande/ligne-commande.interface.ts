import { Commande } from "../commande/commande.interface";
import { Produit } from "../produit/produit.interface";

export interface LigneCommande {
    id: number;
	quantite: number;
	commande: Commande;
	produit: Produit;

}
