// Define a class to represent a backpack
class Backpack {
    constructor(nameTag, contents) {
      this.nameTag = nameTag;
      this.mainContents = [contents];
      console.log(`You now have ${nameTag}'s backpack and put a ${contents} into it.`)
    }

    readNameTag() {
      console.log(`This backpack belongs to ${this.nameTag}.`);
    }

    lookInMainCompartment() {
      console.log(`The main compartment contains a ${this.mainContents}.`);
    }

    addItemToMainCompartment(item) {
      this.mainContents.push(item);
      console.log(`You have placed a ${item} into ${this.nameTag}'s backpack.`);
    }

    removeItemFromMainCompartment(item) {
      var itemLocationInBag = this.mainContents.indexOf(item);
      if (itemLocationInBag > -1) {
        this.mainContents.splice(itemLocationInBag, 1);
        console.log(`You have removed a ${item} from ${this.nameTag}'s backpack.`);
      } else {
        console.log(`Your backpack does not contain a ${item}.`);
      }
    }
}

module.exports=Backpack