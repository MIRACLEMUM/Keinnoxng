
export type Product = {
  id: number;
  name: string;
  category: string;
  price: number; // ✅ make it a number
  image: string;
};

export const products: Product[] = [
  { id: 1, name: "Red Wine 2018", category: "Wine", price: 12000, image: "/undefined.jpeg" },
  { id: 2, name: "White Wine 2020", category: "Wine", price: 9500, image: "/undefined (1).jpeg" },
  { id: 3, name: "Champagne Prestige", category: "Champagne", price: 25000, image: "/The Champagne region, located about 100 miles….jpeg" },
  { id: 4, name: "Dry Gin", category: "Gin", price: 8000, image: "/undefined (2).jpeg" },
  { id: 5, name: "Rum Black Barrel", category: "Rum", price: 7000, image: "/images/rum1.jpg" },
  { id: 6, name: "Non-Alcoholic Wine", category: "Non-Alcoholic", price: 5000, image: "/images/nonalcohol1.jpg" },
];
