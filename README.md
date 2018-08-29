# 30 Day Vanilla JS Challenge

### Day 1 : JavaScript Drumkit

##### Things I Learnt

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