import PETS from "./pets.json";

// const CATEGORIES = [
//   { name: "Books", catslug: "books" },
//   { name: "Health and Wellness", catslug: "health-and-wellness" },
//   { name: "Liverpool", catslug: "liverpool" },
// ];

export type typePets = {
  name: string;
  species: string;
  breed: string;
  age: number;
  color: string;
  slug: string;
  fun_fact: string;
  image?: string;
};

export function getPets(): typePets[] {
  return PETS;
}

export function findPetBySlug(slug: string) {
  return PETS.find(pet => pet.slug === slug)
}

// export function getCategory() {
//   return CATEGORIES;
// }

// export function getPostsByCategory(catslug: string) {
//   return PETS.filter((pet) => pet.category === catslug);
// }
