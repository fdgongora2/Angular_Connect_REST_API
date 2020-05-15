export interface Avion {
    serie: number;
    modelo: string;
    longitud: number;
    capacidad: number;
    velocidad: number;
    alcance: number;
    fabricante_id: number;
}

export interface datosDevueltos  {
    status: string,
    data: Avion[]
  };