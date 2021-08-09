// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { TiposFinanciacion } from 'src/app/models/tipos-financiacion';
import { Universidad } from 'src/app/models/universidad';

export const environment = {
  production: false
};

export const universidades: Universidad[] = [
  {
    id: 1,
    nombre: "Fundación universitaria de San Gil unisangil",
    nombrePrincipal: "UNISANGIL",
    vision: " En el 2014 Bienestar Institucional será el articulador de la comunidad Unisangil, que propende por su consolidación, mejoramiento de la calidad de vida y formación integral de sus miembros; propicia el desarrollo humano en las dimensiones Biológica, Psico-afectiva, intelectual, Espiritual, Social, trascendentes y Operativas. ",
    mision: " Somos Bienestar Institucional, red dinámica de relaciones (docentes, estudiantes, personal administrativo y de servicios generales) y como tal propiciamos ambientes que contribuyan a la formación integral y al mejoramiento de la calidad de vida de sus integrantes, mediante el cultivo de auto cuidado, del crecimiento personal, del desarrollo de los valores, intereses y potencialidades individuales en el reconocimiento del otro, de tal manera se proyecte al contexto regional y nacional para transformarlo. ",
    foto: "../../assets/unisangil.png",
    logo: "../../assets/logos/unisangil.png",
    direccion: "Cl. 24 #31100, Yopal, El Milagro, Casanare",
    telefono: "3106282527",
    color: "#FFFF33",
    colorTransparent: "#ffc40952",
    listaProgramas: [
      'Administración de empresas - Presencial',
      'Contaduría pública - Presencial',
      'Derecho - Presencial',
      'Enfermería - Presencial',
      'Ingeniería Agrícola - Presencial',
      'Ingeniería Ambiental - Presencial',
      'Ingeniería de Sistemas - Presencial',
      'Ingeniería Electrónica - Presencial',
      'Psicología - Presencial'
    ]
       
  },
  {
    id: 2,
    nombre: "Corporación universitaria Remington",
    nombrePrincipal: "UNIREMINGTON",
    vision: "Ser una dependencia modelo de la Corporación Universitaria Remington en programas de tipo social, cultural, ambiental, de salud, recreativo y deportivo, con énfasis en la universalidad y que genere procesos de fortalecimiento e integración de la comunidad universitaria.",
    mision: "Contribuir a la formación integral, estimulando las capacidades de los grupos y de las personas de la comunidad universitaria de la Corporación Universitaria Remington, apoyándolos mediante el desarrollo de programas y servicios que integren el trabajo y el estudio con los proyectos de vida, en un contexto participativo y pluralista.",
    foto: "../../assets/uniremington.png",
    logo: "../../assets/logos/uniremington.png",
    direccion: "Cra. 9 #231, Yopal, Casanare",
    telefono: "3112327218",    
    color: "#eb4258",
    colorTransparent: "#eb425859",
    listaProgramas: [
      'Administración Financiera – Virtual',
      'Administración de empresas agropecuarias – Virtual',
      'Administración de negocios internacionales – Distancia',
      'Administración de Empresas – Virtual – Distancia',
      'Contaduría pública – Virtual – Distancia',
      'Ingeniería Industrial – Virtual',
      'Ingeniería de Sistemas - Virtual – Distancia',
      'Marketing – Virtual',
      'Profesional en diseño gráfico – Virtual',
      
    ]
  },
  {
    id: 3,
    nombre: "Fundación universitaria internacional del trópico américano",
    nombrePrincipal: "UNITROPICO",
    vision: "En el 2030 Unitrópico será un referente de excelencia académica de la Orinoquía Colombiana y el país. Con este propósito, formará profesionales e investigadores integrales quienes responderán acertadamente a los retos de la globalización, a través de la apropiación del conocimiento científico y tecnológico. Así mismo, el egresado Unitropista continuará abogando por la protección y conservación de la biodiversidad, la construcción del tejido social, el valor por la diversidad cultural y el desarrollo sostenible.",
    mision: "Somos una universidad de naturaleza pluralista, formamos integralmente personas con criterios humanísticos, bioéticos, científicos e innovadores, con un elevado nivel cultural y una visión integral de los problemas humanos y ambientales, que incluyen una concepción innovadora y de curiosidad científica, una actitud tolerante y solidaria, un interés de alcanzar la excelencia y un deseo de servir a sus comunidades y a nuestros conciudadanos. Promovemos la investigación científica, el conocimiento de las riquezas naturales, la biodiversidad de la Orinoquia y nuestra diversidad étnica y cultural, para la generación y utilización de prácticas sostenibles de desarrollo Económico y social, mediante la articulación de la investigación, la docencia y la proyección social, de tal manera, que contribuyan a la generación, aplicación y divulgación del conocimiento para proyectar la Orinoquia al país y al mundo.",
    foto: "../../assets/unitropico.png",
    logo: "../../assets/logos/unitropico.png",
    direccion: "Cra. 19 #39 40, Yopal - Casanare",
    telefono: "3136039620",
    color: "#4caf50",
    colorTransparent: "#4caf5057",
    listaProgramas: [
      'Administración y negocios internacionales - Presencial',
      'Administración de Empresas - Presencial',
      'Arquitectura - Presencial',
      "Biología Ambiental - Presencial",
      'Contaduría pública - Presencial',
      'Derecho - Presencial',
      'Ingeniería de Sistemas - Presencial',
      'Ingeniería de petróleos - Presencial',
      'Ingeniería civil - Presencial',
      'Ingeniería Agroindustrial - Presencial',
      'Ingeniería Agroforestal - Presencial',
      'Medicina Veterinaria y Zootecnia - Presencial',
    ]
  },
];

export const tiposFinanciacion: TiposFinanciacion[] = [
  {
    id: 1,
    nombre: "Sufi",
    logo: "../../assets/financiadores/sufi.jpg",
    idsUniversidades: [1, 2, 3]
  },
  {
    id: 2,
    nombre: "Icetex",
    logo: "../../assets/financiadores/icetex.jpg",
    idsUniversidades: [1, 2, 3]
  },
  {
    id: 3,
    nombre: "Counisangil",
    logo: "../../assets/financiadores/counisangil.jpg",
    idsUniversidades: [1]
  },
  {
    id: 4,
    nombre: "Banco Pichincha",
    logo: "../../assets/financiadores/pichincha.jpg",
    idsUniversidades: [1, 2, 3]
  },
  {
    id: 5,
    nombre: "Bancoomeva",
    logo: "../../assets/financiadores/bancoomeva.jpg",
    idsUniversidades: [1]
  },
  {
    id: 6,
    nombre: "Congente",
    logo: "../../assets/financiadores/congente.jpg",
    idsUniversidades: [1]
  },
  {
    id: 7,
    nombre: "Cupe",
    logo: "../../assets/financiadores/cupe.jpg",
    idsUniversidades: [1]
  },
  {
    id: 8,
    nombre: "Ifc",
    logo: "../../assets/financiadores/ifc.jpg",
    idsUniversidades: [1]
  },
  {
    id: 9,
    nombre: "Coopfuturo",
    logo: "../../assets/financiadores/coofuturo.jpg",
    idsUniversidades: [1]
  },
  {
    id: 10,
    nombre: "Banco Av Villas",
    logo: "../../assets/financiadores/avvillas.jpg",
    idsUniversidades: [1]
  },
  {
    id: 11,
    nombre: "Davivienda",
    logo: "../../assets/financiadores/davivienda.jpg",
    idsUniversidades: [1]
  },
  {
    id: 12,
    nombre: "Confiar Coop",
    logo: "../../assets/financiadores/confiar.jpg",
    idsUniversidades: [1]
  },
  {
    id: 13,
    nombre: "Banco Caja Social",
    logo: "../../assets/financiadores/cajaSocial.jpg",
    idsUniversidades: [1]
  },
  {
    id: 14,
    nombre: "Banco de Bogota",
    logo: "../../assets/financiadores/bancoBogota.jpg",
    idsUniversidades: [1]
  },
  {
    id: 15,
    nombre: "Credito de confianza Remington",
    logo: "../../assets/financiadores/uniremington.jpg",
    idsUniversidades: [2]
  },
  {
    id: 16,
    nombre: "Creditoeducativo Comfama",
    logo: "../../assets/financiadores/comfama.jpg",
    idsUniversidades: [2]
  },

];
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
