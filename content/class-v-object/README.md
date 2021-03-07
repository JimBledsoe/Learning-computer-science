# The Difference Between a Class and an Object

## TL;DR

> First you write a class to define the desired methods and properties, then use that class as an object to set and call those properties and methods.

## How Classes and Objects Differ

A class and an object represent the same concepts, but the class is the definition of the concepts you are trying to describe.  The class really only exists as a set of concepts about what something is and how it should operate.  All the properties (adjectives) and methods (verbs) are defined in the class (noun).  A class by itself cannot do anything useful because it is only the definition of a set of concepts.  To do something useful, you need to create an object from that class.

Creating an object from a class is where the fun begins.  You may create as many objects from the same class as you need to do actual useful work.  Some or all of those properties may be set when you instantiate (create) the object from your class via its constructor (a special type of method), or you may be able to set more properties later by calling some of its methods (setters).  You will also be able to have your object perform certain functionality by calling its methods which could let you get information back out of the object (getters).  This may be a lot to take in at first, so let's proceed with a real-world example.

## Design a Useful Class - a Backpack

Let's start off by designing a simple class that will define the properties and methods of a backpack and exercise it a little bit.  What do you do with a backpack?  Well, when you buy it, you might want to write your name on it or have it embroidered with your name so you can identify it among a group of other backpacks that might be that same make, model, and color.  The second thing you are likely to do is to pack it with other items you bought at the same time so you can go on your grand adventure.

### **`Think our class as a stencil, and paintings of backpacks as the objects`**

![Stenciling backpacks](stencils.png)

The illustration above shows us using our stencil (class) to paint as many pictures of backpacks (objects) as we need.  We can use different colors of paint for each backpack we paint.  They do not need to all be the same, but they will all have the same shape once they are painted.

## Coding a Backpack Class and Objects in Javascript

Let's jump right into looking at the code that defines a backpack class and another file that creates objects based on this class.  We will write in javascript for this example.

### **`backpackClass.js`**

``` javascript
// Define a class to represent a backpack
class Backpack {
  constructor(nameTag, contents) {
    this.nameTag = nameTag;
    if (typeof contents === 'object') {
      this.mainContents = contents;  // If already an object, simply assign it
    } else if (typeof contents === 'string') {
      this.mainContents = [contents];  // Simple string, create a new array
    } else {
      this.mainContents = [];  // Unknown type, start with an empty backpack
      console.log(`I have no idea what ${contents} is - chucking it out.`);
    }
    console.log(`You have ${nameTag}'s backpack with ${contents} in it.`);
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
module.exports = Backpack;
```

In this code we have started out by creating the class and giving it a name of Backpack.  That will be important when we want to make this class available to other javascript code that wants to create objects from this class.  The first method is the constructor, and it will want us to give the backpack a name and an initial set of contents.  It will store these values in properties, accessed from the class by the keyword *this*.  The nameTag is set as a simple string, whereas the contents are set as an array, because a backpack can hold many different items as its contents.  The constructor may be given a string or an array of strings, so we need to be sure we set the initial contents appropriately.

The next few lines are all the methods we are defining for this class.  You can think of these as verbs.  They take some action on the class, usually setting or getting properties of the class.  The first two are simply getting the nameTag or contents of the backpack and displaying them.  The next three are modifying the contents - either adding or removing items from the mainCompartment of the backpack.  Adding items is simple - just add more elements to the array of contents.  Removing items is more complicated because we have to find the item first, and remove it only if it is already in the backpack.  Emptying the backpack is simplest of all - just remove all the contents.

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

The code starts out by loading the class from the class file and assigning it to an object class of Backpack.  It is still not an object yet, it is still just a class definition.  The next line is where the magic happens.  We are creating an object (myBackpack) from the class (Backpack).  When we create our new object, we are passing it parameters that it is expecting to be a nameTag and a list of contents or a single item.  At this point we can inspect the nameTag to be sure it is our backpack (Jim's).

Next, we will add a jacket into the backpack and make sure the contents include the items we put into it when we created it (a tent and socks), and the new item (a jacket).

Our next operation is to try to remove something that does not exist in the backpack yet (stove) and it tells us we do not have a stove in the backpack.

But we can successfully remove the socks we put in the backpack when we created it, and verify that only the tent and jacket are still inside.

Finally we empty the backpack, and inspect the main compartment and see that it is indeed empty.

This is what we would see if we run this code with a javascript interpreter like Node.js.

### **`Console output from Node.js for object.js`**

``` console
> node code/simple/object.js
You have Jim's backpack with tent,socks in it.
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

![Backpack and contents](backpack_contents.png)

## Objects Multiplying the Power of Classes

We mentioned earlier that because objects are what bring classes to life, we do not have to stick to just one object per class.  I don't need to be restricted to having just one backpack, I can buy another one for my wife and they remain totally separate.  I could even buy seven of them if I wanted and put the days of the week on their nameTag.  Let's look at another code sample.

### **`object2.js`**

``` javascript
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
```

In this example, we are buying (creating) two backpacks and putting different labels on them and different items in them.  But at the end, we should be able to see that each backpack is unique and contains only the items put into the respective individual backpacks.

### **`Console output from Node.js for object2.js`**

``` console
> node code/simple/object2.js
You have Jim's backpack with tent,socks in it.
You have Karen's backpack with sleeping bag in it.
You have placed a sandwich into Jim's backpack.
You have placed a binoculars into Karen's backpack.
This backpack belongs to Jim.
The main compartment contains tent,socks,sandwich.
This backpack belongs to Karen.
The main compartment contains sleeping bag,binoculars.
>
```

![Brown and Pink backpacks](two_backpacks.png)

## Building Classes from Classes - Inheritance

We have seen that classes are useful for defining the properties and methods of a concept we wish to convey, and we can use that same class to do many different things with them... as long as all of those things are things you can do with a backpack.

But there is another useful concept related to classes - inheritance.  What if we wanted to create a class called hiker.  A hiker has a backpack, but also has shoes and clothes, and maybe a hat.  You can't put things in or remove things from a hiker (legally, at least) but you can make a hiker walk, or sit, or sleep.  But a hiker needs a backpack and that backpack still needs to do all the things a normal backpack can do.  You must now write a new hiker class, but will you need to copy all the properties and methods you already created for the backpack to be part of the hiker?  No, and this is where inheritance helps you out.

Inheritance is when you take and existing class, and *extend* its methods and properties to a new class.  This new class is sometimes called the *parent* class, and it is said to *inherit* all the properties and methods of the original *child* class.  If you create a hiker class that inherits from a backpack class, you will code new properties for hat, shoes, and clothes and code new methods for sit, walk, and sleep.  But the methods that relate to the backpack you now *inherit* form the backpack class for free!

## Summary Thoughts on Objects and Classes

I hope you now have a pretty clear understanding of what the difference between a class and an object is.  If you embrace classes and use them to organize your code, you will be able to reuse much of your code and reduce your effort of development.

If you would like to run this code for yourself, try it out on [repl.it](https://repl.it/@JimBledsoe/Learning-computer-science) or just browse it on [GitHub](https://github.com/JimBledsoe/Learning-computer-science).
