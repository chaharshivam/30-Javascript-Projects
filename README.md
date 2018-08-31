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

##### Day 2: JS and CSS Clock

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