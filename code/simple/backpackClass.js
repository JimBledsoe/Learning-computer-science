// Define a class to represent a backpack
class Backpack {
    constructor(nameTag, contents) {
      this.nameTag = nameTag;
      if (typeof contents === 'object') {
        this.mainContents = contents;  // If already an object, simply assign it
      } else if (typeof contents === 'string') {
        this.mainContents = [contents];  // Simple string, create a new array with it
      } else {
        this.mainContents = [];  // Unknown type of contents, start with empty backpack
        console.log(`I have no idea what ${contents} is - chucking it on the ground.`)
      }
      console.log(`You now have ${nameTag}'s backpack and put a ${contents} into it.`)
    }

    // Getter methods
    readNameTag() {
      console.log(`This backpack belongs to ${this.nameTag}.`);
    }

    lookInMainCompartment() {
      if (this.mainContents.length === 0) {
        console.log(`The main compartment is empty.`);
      } else {
        console.log(`The main compartment contains ${this.mainContents}.`);
      }
    }

    // Setter methods
    addItemToMainCompartment(item) {
      this.mainContents.push(item);
      console.log(`You have placed a ${item} into ${this.nameTag}'s backpack.`);
    }

    removeItemFromMainCompartment(item) {
      var itemLocationInBag = this.mainContents.indexOf(item);
      if (itemLocationInBag > -1) { // Did we find our item?
        this.mainContents.splice(itemLocationInBag, 1);  // Remove the 1 item
        console.log(`You have removed a ${item} from ${this.nameTag}'s backpack.`);
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
module.exports=Backpack
