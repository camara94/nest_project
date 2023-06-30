import { Adresse } from "../adresse/adresse.interface";
export interface Utilisateur {
    id: number;
	prenom: string;
	nom: string;
	password: string;
	email: string;
	genre: string;
	telephone: string;
}
