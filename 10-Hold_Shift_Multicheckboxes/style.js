const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
	// Check is Shift key is held down
	// and check that the checkbox is being checked
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		// loop over every single checkbox
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				console.log('inBetween');
			}

			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}

	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));