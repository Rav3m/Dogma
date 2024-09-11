//
// Be stepper js
//


'use strict';

if ($('#stepperForm').length) {
	var stepperForm
	document.addEventListener('DOMContentLoaded', function () {
		stepperForm = new Stepper(document.querySelector('#stepperForm'), {
			linear: false,
			animation: true
		});
	});

}