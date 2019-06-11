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
    name: "coffeemaker.jpg",
    price: 150,
    category: { _id: "2b22cd4ddr8g5fbccg571903", name: "kitchen products" },
    image: require("../data/images/coffeemaker.jpg"),
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
  },
  {
    _id: "2b22cd4ddr8g5fbccg571922",
    name: "coffeetable",
    price: 40,
    category: { _id: "2b22cd4ddr8g5fbccg571922", name: "home decor" },
    image: require("../data/images/coffeetable.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571923",
    name: "dishwasher",
    price: 600,
    category: { _id: "2b22cd4ddr8g5fbccg571923", name: "kitchen products" },
    image: require("../data/images/dishwasher.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571924",
    name: "fan",
    price: 60,
    category: { _id: "2b22cd4ddr8g5fbccg571924", name: "home products" },
    image: require("../data/images/fan.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571925",
    name: "fridge",
    price: 500,
    category: { _id: "2b22cd4ddr8g5fbccg571925", name: "kitchen products" },
    image: require("../data/images/fridge.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571926",
    name: "hairdryer",
    price: 120,
    category: { _id: "2b22cd4ddr8g5fbccg571926", name: "health & beauty" },
    image: require("../data/images/hairdryer.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571927",
    name: "Iron box",
    price: 100,
    category: { _id: "2b22cd4ddr8g5fbccg571927", name: "home products" },
    image: require("../data/images/Iron box.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571928",
    name: "luggagebag",
    price: 230,
    category: { _id: "2b22cd4ddr8g5fbccg571928", name: "home products" },
    image: require("../data/images/luggagebag.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571929",
    name: "mac",
    price: 900,
    category: { _id: "2b22cd4ddr8g5fbccg571929", name: "electronics" },
    image: require("../data/images/mac.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571930",
    name: "Samsung tab",
    price: 470,
    category: { _id: "2b22cd4ddr8g5fbccg571930", name: "electronics" },
    image: require("../data/images/Samsung tab.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571931",
    name: "straightner",
    price: 150,
    category: { _id: "2b22cd4ddr8g5fbccg571931", name: "health & beauty" },
    image: require("../data/images/straightner.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571932",
    name: "studytable",
    price: 99,
    category: { _id: "2b22cd4ddr8g5fbccg571932", name: "home decor" },
    image: require("../data/images/studytable.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571933",
    name: "toaster",
    price: 80,
    category: { _id: "2b22cd4ddr8g5fbccg571933", name: "kitchen products" },
    image: require("../data/images/toaster.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571934",
    name: "trimer",
    price: 70,
    category: { _id: "2b22cd4ddr8g5fbccg571934", name: "men's accessories" },
    image: require("../data/images/trimer.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571935",
    name: "vaccumcleaner",
    price: 450,
    category: { _id: "2b22cd4ddr8g5fbccg571935", name: "home products" },
    image: require("../data/images/vaccumcleaner.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571936",
    name: "washingmachine",
    price: 700,
    category: { _id: "2b22cd4ddr8g5fbccg571936", name: "home products" },
    image: require("../data/images/washingmachine.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "2b22cd4ddr8g5fbccg571937",
    name: "juicer",
    price: 69,
    category: { _id: "2b22cd4ddr8g5fbccg571937", name: "kitchen products" },
    image: require("../data/images/juicer.jpg"),
    numOfItemsInCart: 0,
    liked: true
  }
];
export function getProducts() {
  return products;
}
