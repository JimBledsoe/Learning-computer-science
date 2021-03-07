# The Difference Between a Class and an Object

## TLDR

You write a class to define the desired methods and properties, then use that class as an object to set and call those properties and methods.

## A Little More Detail

A class and an object represent the same concepts, but the class is the definition of the concepts you are trying to describe.  The class really only exists as a set of concepts about what something is and how it should operate.  All the properties (adjectives) and methods (verbs) are defined in the class (noun).  A class by itself cannot do anything useful becasue it is only the definition of a set of concepts.  To do something useful, you need to create an object from that class.

Creating an object from a class is where the real work takes place.  You may create as many objects from the same class as you need to do actual useful work.  When you create the class, you will set some or all of the properties.  Some or all of those properties may be set when you instantiate (create) the object from your class via its constructor (a special type of method), or you may be able to set more properties later by calling some of its methods (setters).  You will also be able to have your object perform certain functionality by calling its methods which could be methods that let you get information back out of the object (getters).  This may be a lot to take in at first, so lets proceed with some real-world examples.

## Create a Usable Class - a Backpack

Let's start off by creating a sinmple class that will define the properties and methods of a backpack and exercise it a little bit.  What do you do with a backpack?  Well, when you buy it, you might want to write your name on it or have it embroidered with your name so you can identify it among a group of other backpacks that might be that same make, model, and color.  The second thing you are likely to do is to pack it with items so you can go on your grand adventure.  Lets jump right into looking at the code that defines the backpack class and another file that creates objects based on this class.  We will write in javascript for this simple example.

First we will take a look at the class file.

### **`backpackClass.js`**

``` javascript
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
```

In this code we have started out by creating the class and giving it a name of Backpack.  That will be important when we want to make this class available to other javascript code that wants to create objects from this class.  The first method is the constructor, and it will want us to give the backpack a name, and an initial set of contents.  It will store these values in properties, accessed from the class by the keyword 'this'.  The nameTag is set as a simple string, whereas the contents are set as an array, because a backpack can hold many different items as its contents.  The constructor may be given a string or an array of strings, so we need to be sure we set the initial contents appropriately.

The next few lines are all the methods we are defining for this class.  You can think of these as verbs.  They take some action on the class, usually setting or getting properties of the class.  The first two are simply getting the nameTag or contents of the backpack and dispplaying them.  The next three are modifying the contents - either adding or removing items from the mainCompartment of the backpack.  Adding items is simple - just add more elements to the array of contents.  Removing items is more complicated, because we have to find the item first, and remove it only if it is already in the backpack.  Emptying the backpack is simplest of all - just remove all the contents.

## Create an Object with the Backpack Class - myBackpack

Now that we have our class defined, we need to be able to use this class in a useful way.  The following code will create an object from our class so we can manipulate and examine it.

### **`object.js`**

``` javascript
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
```

The code starts out by loading the class from the classfile and assigning it to an object class of Backpack.  It is still not an object yet, it is still just a class definition.  The next line is where the magic happens.  We are creating an object (myBackpack) from the class (Backpack).  When we create our new object, we are passing it parameters that it is expecting to be a nameTag and a list of contents or a single item.  At this point we can inspect the nameTag to be sure it is our backpack (Jim's).

Next, we will add a jacket into the backpack and make sure the contents include the items we put into it when we created it (a tent and socks), and the new item (a jacket).

Our next operation is to try to remove something that does not exist in the backpack yet (stove) and it tells us we do not have a stove in the backpack.

But we can successfully remove the socks we put in the backpack when we created it, and verify that only the tent and jacket are still inside.

Finally we empty the backpack, and inspect the main compartment and see that it is indeed empty.

This is what we woudl see if we run this code with a javascript interpreter like Node.js.

### **`Console output from Node.js`**

``` console
> node code/simple/object.js
You now have Jim's backpack and put a tent,socks into it.
This backpack belongs to Jim.
You have placed a jacket into Jim's backpack.
The main compartment contains tent,socks,jacket.
Your backpack does not contain stove.
You have removed a socks from Jim's backpack.
The main compartment contains tent,jacket.
You have dumped tent,jacket on the ground.
The main compartment is empty.
>
```

## The Power of Objects

multiple objects together

## Try an Example for Yourself

jsfiddle example

## Where to Go From Here

Object Oriented Programming
Language references
