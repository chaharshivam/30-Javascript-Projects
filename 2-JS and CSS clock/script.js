const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(argument) {
	const now = new Date();
	const seconds = now.getSeconds();
	const min = now.getMinutes();
	const hour = now.getHours();

	const secondsDegrees = ((seconds/60)*360) + 90;
	const minsDegrees = ((min / 60) * 360) + ((seconds/60)*6) + 90;
	const hoursDegrees = ((hour / 12) * 360) + ((min/60)*30) + 90;
	
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minHand.style.transform = `rotate(${minsDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);