import { Boutique } from "../boutique/boutique.interface";
import { Categorie } from "../categorie/categorie.interface";

export interface Produit {
    id: string;
	designation: string;
	description: string;
	prix: number;
	boutique: Boutique;
	categorie: Categorie;
}
