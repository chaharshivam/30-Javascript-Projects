# 30 Day Vanilla JS Challenge

### Things I Learnt 

##### Day 1 : JavaScript Drumkit

Binding event to the keys when they are pressed
```javascript
// window is a global variable that represents the window in which the code is running
window.addEventListener(‘keydown’, function(e){});
```

Using document.querySelector() and document.querySelectorAll()
```javascript
/* The Document method querySelector() returns the first element that matches the specified selector.
otherwise, null is returned */
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// keyCode is a property of event 'e' associated with each key
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
// querySelectorAll() returns all the elements that match the specified selector
const keys = document.querySelectorAll('.key');
```

Using audio functions and how to restart the audio if a key is pressed continuously
```javascript
// Used to restart the audio from beginning
audio.currentTime = 0;
// used to play an audio
audio.play();
```

Adding class to an item
```javascript
// added a class to key in order to give it an effect of playing
key.classList.add('playing');
```

Applying a property to an array
```javascript
// forEach loop adds the event listener to all the keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```

##### Day 2 : JS and CSS Clock

Running a function at every interval
```javascript
setInterval(function_name, interval);
// Used as below to run setDate function every 1 second or 1000 milliseconds
setInterval(setDate, 1000);
```

Using Date methods to run our clock
```javascript
// javascript comes with easy to use Date methods
const now = new Date();
now.getSeconds(); // Gives the current seconds
now.getMinutes(); // Gives the current minutes
now.getHour(); // Gives the current hour in 24-hour format
```

Removing the glitch at 0<sup>th</sup> second by making a class **zero**
```css
.zero {
    transition: all 0s;
}
```

Adding the class to secondHand when it reaches 0 and removing it afterwards
```javascript
if(seconds == 0) secondHand.classList.add('zero');
else secondHand.classList.remove('zero');
```

##### Day 3 : CSS Variables

How to use label in HTML and bind it to an element
```html
<label for="element"> Label: </label>
```

How to use input type **range** that has a slider with a default, min and max values
```html
<input type=“range” min="10" max="100" name="blur" value="20">
```

How to define custom data attributes
```html
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">
```

How to use CSS variables
```css
/* CSS Variables are declared at the root level*/
:root {
    --spacing: 10px;
}
/* To use the variable on a property */
img {    
    property-name: var(--spacing);
}
```

Using querySelectorAll
```javascript
// querySelectorAll returns a NodeList
```

How dataset works
```javascript
// returns all data prefixed properties and their values
this.dataset
// Used in the code as
const suffix = this.dataset.sizing || '';
```

Learnt about **document.documentElement** which returns root of the element of the document
e.g. HTML element for HTML Documents

Also learnt a few events like **mousemove** and **change**

##### Day 4 : Array Cardio

Learnt a few basic javascript functions

**Filter**
```javascript
// Filters the array according to our need
Array.prototype.filter();
```

**Map**
```javascript
// map() is used to modify the array
Array.prototype.map();
```

**Reduce**
```javascript
// Used as an accumulator, just like how we would used an variable in a  for loop
// to calculate sum
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(reducer));
```


Convert Node list to array
```javascript
// querySelectorAll returns a Node List, we can convet it into an array
Array.from(nodelist);
```

Use the textContent property of an attribute
```javascript
const de= links.map(link=> link.textContent);
```

##### Day 5 : Flexbox Gallery

Learnt CSS concepts

Learnt how to use cubic-bezier curves
```css
font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11)
flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11)
```
Learnt the **includes** function
```javascript
e.propertyName.includes('flex');
```

##### Day 6 : Type Ahead

Learnt how to fetch json data from a url
```javascript
// fetch returns a promise and then we convert it into json data
fetch(url).then(blob => blob.json())
``` 

How to use spread data and push it into an array
```javascript
cities.push(...data);
```

How to use regular expressions to match inputs
```javascript
const regex = new RegExp('wordToMatch', 'gi');
// to match the input
element.match(regex);
```

Learnt **change** and **keyup** event listeners