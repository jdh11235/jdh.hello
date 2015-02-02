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

	function textbox_keydown (event) {
		if (event.keyCode === 13) {
			var text = event.target.innerText;
			update(text);
			event.target.innerText = text;
		}
	}

	$textbox.addEventListener('keydown', textbox_keydown);
});
