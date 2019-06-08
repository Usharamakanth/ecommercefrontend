const products = [
  {
    _id: "2b22cd4ddr8g5fbccg571902",
    name: "Lipbalm",
    price: 12,
    category: { _id: "2b22cd4ddr8g5fbccg571902", name: "beauty product" },
    image: require("../data/images/lipbalm.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571903",
    name: "Lipstick",
    price: 20,
    category: { _id: "2b22cd4ddr8g5fbccg571903", name: "beauty product" },
    image: require("../data/images/lipstick.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571920",
    name: "Wrist Watch",
    price: 159,
    category: { _id: "2b22cd4ddr8g5fbccg571920", name: "men's accessories" },
    image: require("../data/images/wristwatch.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571921",
    name: "Belts",
    price: 60,
    category: { _id: "2b22cd4ddr8g5fbccg571921", name: "men's accessories" },
    image: require("../data/images/belts.jpg"),
    numOfItemsInCart: 0,
    liked: true
  }
];
export function getProducts() {
  return products;
}
