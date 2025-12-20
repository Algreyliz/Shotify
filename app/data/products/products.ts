export type Product = {
  id: string
  name: string
  benefitTag: string // “Recovery”, “Digestion”, etc.
  price: string
  bullets: string[]
  imageSrc: string // "/products/turmeric.png" (en /public)
}

export const bestSellers: Product[] = [
  {
    id: "turmeric",
    name: "TURMERIC SuperShot®",
    benefitTag: "Recovery",
    price: "₡3.500",
    bullets: [
      "Recovery",
      "12 oz more Glass Bottles",
      "12.5g Fresh Turmeric | 21mg Vitamin C",
    ],
    imageSrc: "/Hero.jpg",
  },
  {
    id: "ginger",
    name: "GINGER SuperShot®",
    benefitTag: "Digestion",
    price: "₡3.500",
    bullets: [
      "Digestive Aid",
      "12 oz more Glass Bottles",
      "17g Fresh Ginger | 20mg Vitamin C",
    ],
    imageSrc: "/Hero.jpg",
  },
  {
    id: "testw1",
    name: "TURMERIC SuperShot®",
    benefitTag: "Recovery",
    price: "₡3.500",
    bullets: [
      "Recovery",
      "12 oz more Glass Bottles",
      "12.5g Fresh Turmeric | 21mg Vitamin C",
    ],
    imageSrc: "/Hero.jpg",
  },
  {
    id: "test",
    name: "TURMERIC SuperShot®",
    benefitTag: "Recovery",
    price: "₡3.500",
    bullets: [
      "Recovery",
      "12 oz more Glass Bottles",
      "12.5g Fresh Turmeric | 21mg Vitamin C",
    ],
    imageSrc: "/Hero.jpg",
  },
]
