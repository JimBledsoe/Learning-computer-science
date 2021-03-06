// Load up our class definition for a backpack
const Backpack = require('./backpackClass.js');

// Instantiate an instance of backpack for me and make sure its mine
let myBackpack = new Backpack("George", "tent");
myBackpack.readNameTag();

myBackpack.addItemToMainCompartment("jacket");
myBackpack.lookInMainCompartment();
myBackpack.removeItemFromMainCompartment("stove");
myBackpack.removeItemFromMainCompartment("tent");
myBackpack.lookInMainCompartment();