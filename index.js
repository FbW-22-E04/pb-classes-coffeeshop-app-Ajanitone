// ### Coffee Shop App

// Write a **class** called **CoffeeShop**, which has **three instance variables**:

// 1.  **name** : a string (basically, of the shop)
// 2.  **menu** : an array of items (of object type), with each item containing the **item** (name of the item), **type** (whether _food_ or a _drink_) and **price**.
// 3.  **orders** : an empty array
// and **seven methods**:

// 1.  **addOrder**: adds the **name** of the item to the end of the **orders** array if it exists on the **menu**. Otherwise, return `"This item is currently unavailable!"`
// 2.  **fulfillOrder**: if the **orders** array is **not empty**, return `"The {item} is ready!"`. If the **orders** array is empty, return `"All orders have been fulfilled!"`
// 3.  **listOrders**: returns the list of **orders** taken, otherwise, an **empty** array.
// 4.  **dueAmount**: returns the total amount due for the **orders** taken.
// 5.  **cheapestItem**: returns the **name** of the cheapest item on the menu.
// 6.  **drinksOnly**: returns only the _item_  **names** of _type_  **drink** from the menu.
// 7.  **foodOnly**: returns only the _item_  **names** of _type_  **food** from the menu.

// **IMPORTANT**: Orders are fulfilled in a **FIFO** (first-in, first-out) order.

// ### Examples

// ```
// tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// // Tesha's coffee shop does not sell hot cocoa
// tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// // specifying the variant of "iced tea" will help the process

// tcs.addOrder("cinnamon roll") ➞  "Order added!"
// tcs.addOrder("iced coffee") ➞ "Order added!"
// tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// // the list of all the items in the current order

// tcs.dueAmount() ➞ 2.17

// tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
// tcs.fulfillOrder() ➞ "The iced coffee is ready!"
// tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// // all orders have been presumably served

// tcs.listOrders() ➞ []
// // an empty array is returned if all orders have been exhausted

// tcs.dueAmount() ➞ 0.0
// // no new orders taken, expect a zero payable

// tcs.cheapestItem() ➞ "lemonade"
// tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
// tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
// ```

// ### Notes

// Round off **due amount** up to **two decimal** places.

class CoffeeShop {
  constructor(name) {
    this.name = name;
    this.orders = [];
    this.menu = [];
  }

  addItem(item) {
    this.menu.push(item);
  }
  addOrder(item) {
    const result = this.menu.filter((el) => el.name === item);
    if (result.length > 0) {
      this.orders.push(item);
    } else {
      console.log("This item is currently unavailable");
    }
  }

  fulfillOrder() {
    return this.orders.length
      ? `The ${this.orders.shift()} is ready!`
      : "All orders have been fulfilled!";
  }
  listOrders() {
    return `Orders are ${this.orders}`;
  }
  dueAmount() {
    let total = 0;
    this.orders.forEach((item) => {
      const price = this.menu.find((el) => el.name === item).price;
      total += price;
    });
    return console.log(`The due amount is ${total}`);
  }

  cheapestItem() {
    // return this.menu.reduce(
    //   (acc, item) => (acc > item.price ? acc : `${item.name} ${item.price}`),
    //   0
    // );
    let cheapest = {
      price: Infinity,
      name: "",
    };
    this.menu.forEach((el) => {
      if (el.price < cheapest.price) {
        cheapest.price = el.price;
        cheapest.name = el.name;
      }
    });
    console.log(
      "The cheapest item is:",
      cheapest.name,
      "price:",
      cheapest.price
    );
    return cheapest.price;
  }
  drinksOnly() {
    const drinks = [];
    this.menu.filter((item) => {
      if (item.type === "drink") {
        drinks.push(item.name);
      }
      return console.log(`The drinks are ${drinks}`);
    });
    return drinks;
  }
  foodOnly() {
    const food = [];
    this.menu.filter((item) => {
      if (item.type === "food") {
        food.push(item.name);
      }
      return console.log(`The foods are ${food}`);
    });
    return food;
  }
}

const mocca = new CoffeeShop("mocca");

mocca.addItem({ name: "fruit cake", type: "food", price: 5 });
mocca.addItem({ name: "lemonade", type: "drink", price: 2 });
mocca.addItem({ name: "lemon cake", type: "food", price: 4 });
mocca.addItem({ name: "orange juice", type: "drink", price: 3 });
mocca.addOrder("lemonade");
mocca.addOrder("fruit cake");
mocca.addOrder("lemon cake");

console.log(mocca.fulfillOrder());
console.log(mocca.listOrders());
console.log(mocca.dueAmount());
console.log(mocca.cheapestItem());
console.log(mocca.drinksOnly());
console.log(mocca.foodOnly());
