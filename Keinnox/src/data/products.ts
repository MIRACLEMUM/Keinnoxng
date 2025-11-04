export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  { id: 1, name: "Red Wine 2018", category: "Wine", price: "$120", image: "/WhatsApp Image 2025-10-28 at 23.39.35_8da9633c.jpg" },
  { id: 2, name: "White Wine 2020", category: "Wine", price: "$95", image: "/images/wine2.jpg" },
  { id: 3, name: "Champagne Prestige", category: "Champagne", price: "$250", image: "/images/champagne1.jpg" },
  { id: 4, name: "Dry Gin", category: "Gin", price: "$80", image: "/images/gin1.jpg" },
  { id: 5, name: "Rum Black Barrel", category: "Rum", price: "$70", image: "/images/rum1.jpg" },
  { id: 6, name: "Non-Alcoholic Wine", category: "Non-Alcoholic", price: "$50", image: "/images/nonalcohol1.jpg" },
];
