// Define a class to represent a backpack
class Backpack {
  constructor(nameTag, contents) {
    this.nameTag = nameTag;
    this.mainContents = [contents];
    console.log(`You have ${nameTag}'s backpack with ${contents} in it.`);
  }

  // Getter methods
  readNameTag() {
    console.log(`This backpack belongs to ${this.nameTag}.`);
  }

  lookInMainCompartment() {
    console.log(`The main compartment contains ${this.mainContents}.`);
  }

  // Setter methods
  addItemToMainCompartment(item) {
    this.mainContents.push(item);
    console.log(`You have placed ${item} into ${this.nameTag}'s backpack.`);
  }

  removeItemFromMainCompartment(item) {
    var itemLocationInBag = this.mainContents.indexOf(item);
    if (itemLocationInBag > -1) { // Did we find our item?
      this.mainContents.splice(itemLocationInBag, 1);  // Remove the 1 item
      console.log(`You have removed ${item} from ${this.nameTag}'s backpack.`);
    } else {
      console.log(`Your backpack does not contain ${item}.`);
    }
  }

  empty() {
    console.log(`You have dumped ${this.mainContents} on the ground.`);
    this.mainContents = [];
  }
}

// This lets other code use this class to create objects
module.exports = Backpack;
