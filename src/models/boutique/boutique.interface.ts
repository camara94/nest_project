import { Photo } from "../photo/photo.interface";

export interface Boutique {
    id: number;
	nom: string;
	rue: string;
	numero: number;
	codePays:string;
	telephone:string;
	photos: Photo[];
}
