export const categories = [
  { _id: "6b21ca3eeb7f6fbccd471811", name: "Electronics" },
  { _id: "6b21ca3eeb7f6fbccd471813", name: "Home decors" },
  { _id: "6b21ca3eeb7f6fbccd471825", name: "Health & Beauty" },
  { _id: "6b21ca3eeb7f6fbccd471827", name: "Kitchen Items" },
  { _id: "6b21ca3eeb7f6fbccd471830", name: "Home Products" },
  { _id: "6b21ca3eeb7f6fbccd471835", name: "Men's Accessories" }
];

export function getCategories() {
  return categories;
}
export function getSelectCategoriesList() {
  return categories.map(c => ({ name: c.name, value: c._id }));
}
