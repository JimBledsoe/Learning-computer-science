// Load up our class definition for a backpack
const Backpack = require('./backpackClass.js');

// Create an instance of backpack for me and my wife
let myBackpack = new Backpack("Jim", ["tent", "socks"]);
let herBackpack = new Backpack("Karen", "sleeping bag");

// Now let's put food in mine and binoculars in hers
myBackpack.addItemToMainCompartment("sandwich");
herBackpack.addItemToMainCompartment("binoculars");

// Let's see what's inside each of our packs now
myBackpack.readNameTag();
myBackpack.lookInMainCompartment();
herBackpack.readNameTag();
herBackpack.lookInMainCompartment();
