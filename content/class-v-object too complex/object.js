// Load up our class definition for a backpack
const Backpack = require('./backpackClass.js');

// Create an instance of backpack for me and make sure its mine
let myBackpack = new Backpack("Jim", ["tent", "socks"]);
myBackpack.readNameTag();

// Now lets put a jacket inside and verify it is in there
myBackpack.addItemToMainCompartment("jacket");
myBackpack.lookInMainCompartment();  // There should be a jacket in there

// What happens if we try to remove something not in the backpack?
myBackpack.removeItemFromMainCompartment("stove");  // There is no stove

// Lets add some socks and inspect it again
myBackpack.removeItemFromMainCompartment("socks");
myBackpack.lookInMainCompartment();  // Can you see the socks?

// Lets empty the backpack and make sure it is empty
myBackpack.empty();
myBackpack.lookInMainCompartment();  // Should be empty now
