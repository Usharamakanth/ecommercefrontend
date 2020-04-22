import * as categoriesAPI from "./fakeCategorys";

const products = [
  {
    _id: "2b22cd4ddr8g5fbccg571902",
    name: "LipBalm",
    price: 12,
    category: { _id: "6b21ca3eeb7f6fbccd471825", name: "Health & Beauty" },
    image: require("../data/images/lipbalm.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571903",
    name: "CoffeeMaker.jpg",
    price: 150,
    category: { _id: "6b21ca3eeb7f6fbccd471827", name: "Kitchen Items" },
    image: require("../data/images/coffeemaker.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571920",
    name: "Wrist Watch",
    price: 159,
    category: { _id: "6b21ca3eeb7f6fbccd471835", name: "Men's Accessories" },
    image: require("../data/images/wristwatch.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571921",
    name: "Belts",
    price: 60,
    category: { _id: "6b21ca3eeb7f6fbccd471835", name: "Men's Accessories" },
    image: require("../data/images/belts.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571922",
    name: "CoffeeTable",
    price: 40,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "Home decors" },
    image: require("../data/images/coffeetable.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571923",
    name: "DishWasher",
    price: 600,
    category: { _id: "6b21ca3eeb7f6fbccd471827", name: "Kitchen Items" },
    image: require("../data/images/dishwasher.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571924",
    name: "Fan",
    price: 60,
    category: { _id: "6b21ca3eeb7f6fbccd471830", name: "Home Products" },
    image: require("../data/images/fan.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571925",
    name: "Fridge",
    price: 500,
    category: { _id: "6b21ca3eeb7f6fbccd471827", name: "Kitchen Items" },
    image: require("../data/images/fridge.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571926",
    name: "HairDryer",
    price: 120,
    category: { _id: "6b21ca3eeb7f6fbccd471825", name: "Health & Beauty" },
    image: require("../data/images/hairdryer.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571927",
    name: "Iron box",
    price: 100,
    category: { _id: "6b21ca3eeb7f6fbccd471830", name: "Home Products" },
    image: require("../data/images/Iron box.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571928",
    name: "LuggageBag",
    price: 230,
    category: { _id: "6b21ca3eeb7f6fbccd471830", name: "Home Products" },
    image: require("../data/images/luggagebag.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571929",
    name: "Mac",
    price: 900,
    category: { _id: "6b21ca3eeb7f6fbccd471811", name: "Electronics" },
    image: require("../data/images/mac.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571930",
    name: "Samsung tab",
    price: 470,
    category: { _id: "6b21ca3eeb7f6fbccd471811", name: "Electronics" },
    image: require("../data/images/Samsung tab.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571931",
    name: "Straightner",
    price: 150,
    category: { _id: "6b21ca3eeb7f6fbccd471825", name: "Health & Beauty" },
    image: require("../data/images/straightner.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571932",
    name: "StudyTable",
    price: 99,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "Home decors" },
    image: require("../data/images/studytable.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571933",
    name: "Toaster",
    price: 80,
    category: { _id: "6b21ca3eeb7f6fbccd471827", name: "Kitchen Items" },
    image: require("../data/images/toaster.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571934",
    name: "Trimmer",
    price: 70,
    category: { _id: "6b21ca3eeb7f6fbccd471835", name: "Men's Accessories" },
    image: require("../data/images/trimer.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571935",
    name: "Vaccum Cleaner",
    price: 450,
    category: { _id: "6b21ca3eeb7f6fbccd471830", name: "Home Products" },
    image: require("../data/images/vaccumcleaner.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571936",
    name: "WashingMachine",
    price: 700,
    category: { _id: "6b21ca3eeb7f6fbccd471830", name: "Home Products" },
    image: require("../data/images/washingmachine.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571937",
    name: "Juicer",
    price: 69,
    category: { _id: "6b21ca3eeb7f6fbccd471827", name: "Kitchen Items" },
    image: require("../data/images/juicer.jpg"),
    numOfItemsInCart: 0,
    liked: true
  }
];
export function getProducts() {
  return products;
}
export function getProductWithId(id) {
  return products.find(p => p._id === id);
}

export function createProduct(product) {
  product.category = categoriesAPI.categories.find(
    c => c._id === product.category
  );
  product.image = require("../data/images/notFound.jpg");
  product.numOfItemsInCart = 0;
  if (!product._id) {
    product._id = Date.now().toString();
  }
  console.log("create a new prod :", product);
  products.push(product);
  return product;
}

export function updateProduct(data) {
  let product = getProductWithId(data.id);
  product.name = data.name;
  product.price = data.price;
  product.category = categoriesAPI.categories.find(
    c => c._id === data.category
  );
  return product;
}
