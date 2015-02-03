window.addEventListener('load', function () {
	'use strict';
	var $textbox = document.getElementById('input');

	window.jdh = {
		hello: function (input) {
			alert('Hello ' + input + '!');
		}
	};

	function update (input) {
		jdh.hello(input);
	}

	function textbox_handler (event) {
		if (event.keyCode === 13) {
			var text = event.target.innerText.replace(/\n/gi, '');
			event.target.innerText = text;
			update(text);
		}
	}

	$textbox.addEventListener('keyup', textbox_handler);
	$textbox.innerText = $textbox.innerText.replace(/\n/gi, '');

	document.addEventListener('touchmove', function (event) {
		event.preventDefault();
	});
});
