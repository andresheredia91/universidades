import { TiposFinanciacion } from './tipos-financiacion';

export class Universidad {

    id: number;
    nombre: string;
    nombrePrincipal: string;
    mision: string;
    vision: string;
    foto: string;
    logo: string;
    direccion: string;
    telefono: string;
    tiposFinanciacion?: TiposFinanciacion[];
    color: string;
    colorTransparent: string;
    listaProgramas: string[];
}
