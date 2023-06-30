import { Adresse } from "../adresse/adresse.interface";
import { Comentaire } from "../comentaire/comentaire.interface";
import { Commande } from "../commande/commande.interface";

export interface Utilisateur {
    id: number;
	prenom: string;
	nom: string;
	password: string;
	email: string;
	genre: string;
	telephone: string;
}
