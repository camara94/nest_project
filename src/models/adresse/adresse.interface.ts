import { Livraison } from "../livraison/livraison.interface";
import { Utilisateur } from "../utilisateur/utilisateur.interface";

export interface Adresse {
    id: number;
	rue: string;
	numero: number;
	numeroAppartement: number;
	message: string;
	code: string;
	ville: string;
	utilisateur: Utilisateur;
}
