export interface Empleado{
    [x: string]: any;
    
    id?:number;
    nombre: string; 
    apellidos: string; 
    correoPersonal: string; 
    cedula: string;
    genero: string;
    fechaNacimiento:Date;
    lugarNacimiento: string;
    direccion: string;
    municipio: string;
    barrio: string;
    estrato: number;
    telefono: string;
    tipoVivienda: string;
    estadoCivil: string;
    nivelFormacion: string;
    tituloObtenido: string;
    nombreConyuge: string;
    condicionEspecial: string;
    especifique: string;
    createAt?:Date
}