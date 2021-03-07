// Load up our class definition for a backpack
const Backpack = require('./backpackClass.js');

// Create an instance of backpack for Karen and myself
let myBackpack = new Backpack("Jim", "tent");
let herBackpack = new Backpack("Karen", "socks");

// Now let's put food in mine and binoculars in hers
myBackpack.addItemToMainCompartment("sandwich");
herBackpack.addItemToMainCompartment("binoculars");

// Let's see what's inside each of our packs now
myBackpack.readNameTag();
myBackpack.lookInMainCompartment();
herBackpack.readNameTag();
herBackpack.lookInMainCompartment();
