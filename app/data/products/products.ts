export type Product = {
  id: string
  name: string
  benefitTag: string // “Recovery”, “Digestion”, etc.
  price: string[]
  bullets: string[]
  imageSrc: string // "/products/turmeric.png" (en /public)
}

export const bestSellers: Product[] = [
  {
    id: "turmeric",
    name: "TURMERIC SuperShot®",
    benefitTag: "Recovery",
    price: ["Botella 375ml ₡3.500"],
    bullets: [
      "Recovery",
      "12 oz more Glass Bottles",
      "12.5g Fresh Turmeric | 21mg Vitamin C",
    ],
    imageSrc: "/Hero.jpg",
  },
  {
    id: "reset-antiinflamatorio",
    name: "Reset Antiinflamatorio",
    benefitTag: "Anti-inflamatorio",
    price: ["Precios: Botella 375ml ₡4600", "Botella 1 litro ₡9500"],
    bullets: [
      "Agua, jengibre, limón, vinagre de manzana",
      "Cúrcuma + pimienta negra + sal marina",
      "Energía limpia y apoyo al sistema inmune",
    ],
    imageSrc: "/antiinfla.jpg",
  },
  {
    id: "red-recovery",
    name: "Shot Red Recovery",
    benefitTag: "Recuperación",
    price: ["Botella 1 litro ₡7800"],
    bullets: [
      "Remolacha, zanahoria y jugo de naranja",
      "Apoya hemoglobina y oxigenación",
      "Ideal para entrenos intensos o cansancio",
    ],
    imageSrc: "/recovery.jpg",
  },
  {
    id: "pure-energizante",
    name: "Pure Shot",
    benefitTag: "Energía",
    price: ["Botella 355ml ₡1900"],
    bullets: [
      "Té verde + guaraná para enfoque",
      "Jengibre + cítricos (limón) + miel",
      "Energía sin sensación de “bajonazo”",
    ],
    imageSrc: "/pureshot.jpg",
  },
  {
    id: "antigripal",
    name: "Shot Antigripal",
    benefitTag: "Inmune",
    price: ["Botella 1 litro ₡8900"],
    bullets: [
      "Jengibre, cúrcuma, limón y miel",
      "Equinácea para refuerzo inmunológico",
      "Alivia molestias de gripe y resfrío",
    ],
    imageSrc: "/Antigripal.jpg",
  },
  {
    id: "sho-tea-hibiscus",
    name: "Sho-tea Rosas, Menta & Hibiscus",
    benefitTag: "Hidratación",
    price: ["Botella 1 litro ₡8800"],
    bullets: [
      "Hibiscus (jamaica), canela y menta",
      "Refrescante, digestivo y antioxidante",
      "Alternativa a bebidas azucaradas",
    ],
    imageSrc: "/shotea.jpeg",
  },
]
