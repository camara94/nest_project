import { Boutique } from "../boutique/boutique.interface";
import { Produit } from "../produit/produit.interface";

export interface Photo {
    id: number;
	nom: string;
	url: string;
	boutique: Boutique;
	produit: Produit;
}
