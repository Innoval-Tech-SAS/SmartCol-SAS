export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "",
  description: ".",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos",
      href: "/products",
    },
    {
      label: "Nosotros",
      href: "/aboutUs",
    },
    {
      label: "Contacto",
      href: "/contact",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/profile.php?id=61562468776130",
    twitter: "https://x.com/Smartcol_",
    instagram: "https://www.instagram.com/smartcol_sas",
    linkedin: "https://www.linkedin.com/company/smartcol-s-a-s/",
    youtube: "https://www.youtube.com/@SMARTCOLS.A.S-n5u",
    tiktok: "https://www.tiktok.com/@smartcol.s.a.s?_t=8o8QdKmQ1Ab&_r=1",
  },
};

export const cityContacts = [
  {
    city: "Bogotá",
    cellphoneNumbers: [
      "350 422 7737",
      "316 017 9783",
      "301 502 9279",
      "350 422 7733",
    ],
    phoneNumber: "601 573 6413",
    address: "Cl. 66 #75 - 11",
  },
  {
    city: "Medellín",
    cellphoneNumbers: ["316 456 8409"],
    address: "Cl 45D #75A-12",
  },
  {
    city: "Cali",
    cellphoneNumbers: ["301 430 5276"],
    address: "Av. 2b Nte. #1",
  },
];

export const categories = [
  {
    title: "Insumos para Panadería, Repostería y Derivados",
    img: "img/Panaderia.png.webp",
  },
  {
    title: "Insumos para Confitería, Dulces y Derivados.",
    img: "img/Dulces.png.webp",
  },
  {
    title: "Insumos para la Industria Láctea y Derivados.",
    img: "img/Lacteos.png.webp",
  },

  {
    title: "Insumos para Helados, Yogures y Derivados.",
    img: "img/Helados.png.webp",
  },
  {
    title: "Insumos para Salsas, Mermeladas y Derivados.",
    img: "img/Mermeladas.png.webp",
  },
  {
    title: "Insumos para Industria Farmacéutica y Derivados",
    img: "img/Farmaceutica.jpg",
  },
  {
    title: "Insumos para Industria del Cartón y Derivados.",
    img: "img/carton.webp",
  },
];

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface FAQ {
  [key: string]: string | { [key: string]: string | string[] };
}

export const smartcolFAQ: FAQ = {
  "¿Qué tipos de materias primas ofrece Smartcol S.A.S?": {
    "Aditivos, Conservantes y Estabilizantes": [
      "Ácido cítrico",
      "Ácido acético",
      "Ácido fosfórico",
      "Ácido láctico",
      "Benzoato de sodio",
      "Bicarbonato de sodio",
    ],
    "Almidones de Maíz, Yuca y Papa":
      "Almidón nativo, modificado y soluble en agua fría",
    "Edulcorantes y Glucosas": [
      "Aspartame",
      "Sucralosa",
      "Maltodextrina",
      "Glucosa líquida y en polvo",
    ],
    "Aminoácidos y Vitaminas": ["Creatina monohidratada", "Vitamina C"],
    Proteínas: ["Proteína aislada de soya", "Proteína de suero de leche"],
    "Ingredientes Industriales y Farmacéuticos": [
      "Ácido ascórbico",
      "Cloruro de calcio",
      "Dióxido de titanio",
    ],
  },
  "¿En qué sectores industriales se especializa Smartcol S.A.S?":
    "Smartcol S.A.S. se especializa en los sectores de: Industria de alimentos, Sector industrial, Industria farmacéutica",
  "¿Cómo puedo mejorar la calidad de mis productos utilizando los productos de Smartcol S.A.S?":
    {
      "Aditivos y Estabilizantes":
        "Carragenina y goma guar para mejorar la textura y estabilidad",
      Proteínas:
        "Proteína de suero de leche para mejorar la consistencia y el valor nutricional",
      "Almidones Modificados":
        "Para mejorar la textura y estabilidad en productos procesados",
    },
  "¿Dónde realiza entregas Smartcol S.A.S?":
    "Realizamos entregas en las principales ciudades de Colombia: Bogotá, Medellín, Cali. Además, hemos establecido relaciones comerciales optimas para asegurar que nuestros Productos estén disponibles a Nivel Nacional.",
  "¿Cómo puedo mejorar el sabor de mis productos utilizando los servicios de Smartcol S.A.S?":
    {
      "Edulcorantes y Saborizantes":
        "Stevia y sucralosa para mejorar el sabor sin añadir calorías",
      "Colorantes y Aditivos":
        "Dióxido de titanio y color caramelo para mejorar la apariencia",
      "Estabilizantes y Emulsionantes":
        "Goma xanthan y la CMC para mejorar la textura y consistencia",
    },
  "¿Por qué debería elegir a Smartcol S.A.S como proveedor de materias primas?":
    "Deberías elegir a Smartcol S.A.S. porque tienen 10 años de experiencia en el mercado nacional, ofrecen una amplia variedad de productos de alta calidad, cuentan con un equipo de ingenieros entrenados para asesorar y guiar en la selección de productos, se comprometen con la calidad, seguridad, entregas oportunas y precios competitivos, y poseen un fuerte sentido de pertenencia y dedicación al trabajo.",
};


export const capitalesColombia = [
  "Arauca",           // Arauca
  "Armenia",          // Quindío
  "Barranquilla",     // Atlántico
  "Bogotá",           // Cundinamarca
  "Bucaramanga",      // Santander
  "Cartagena",        // Bolívar
  "Cúcuta",           // Norte de Santander
  "Florencia",        // Caquetá
  "Inírida",          // Guainía
  "Ibagué",           // Tolima
  "Leticia",          // Amazonas
  "Manizales",        // Caldas
  "Medellín",         // Antioquia
  "Mitú",             // Vaupés
  "Mocoa",            // Putumayo
  "Montería",         // Córdoba
  "Neiva",            // Huila
  "Pasto",            // Nariño
  "Pereira",          // Risaralda
  "Popayán",          // Cauca
  "Puerto Carreño",   // Vichada
  "Quibdó",           // Chocó
  "Riohacha",         // La Guajira
  "San Andrés",       // San Andrés y Providencia
  "San José del Guaviare", // Guaviare
  "Santa Marta",      // Magdalena
  "Sincelejo",        // Sucre
  "Tunja",            // Boyacá
  "Valledupar",       // Cesar
  "Villavicencio",    // Meta
  "Yopal"             // Casanare
];
