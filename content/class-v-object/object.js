// Load up our class definition for a backpack
const Backpack = require('./backpackClass.js');

// Create an instance of backpack for me and make sure its mine
let myBackpack = new Backpack("Jim", "tent");
myBackpack.readNameTag();

// Now lets put a jacket & socks inside and inspect the contents
myBackpack.addItemToMainCompartment("jacket");
myBackpack.addItemToMainCompartment("socks");
myBackpack.lookInMainCompartment();  // There should be 3 items now

// What happens if we try to remove something not in the backpack?
myBackpack.removeItemFromMainCompartment("stove");  // There is no stove

// Lets empty the backpack and make sure it is empty
myBackpack.empty();
myBackpack.lookInMainCompartment();  // Should be empty now
