window.addEventListener('load', function () {
	'use strict';

	/* fix for lack of .innerText in FireFox */
	window.setText = function (element, text) {
		if(document.all){
			element.innerText = text;
		} else{
			element.textContent = text;
		}
	};

	window.getText = function (element) {
		if(document.all){
			return element.innerText;
		} else{
			return element.textContent;
		}
	}

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
			var text = getText(event.target).replace(/\n/gi, '');
			setText(event.target, text);
			update(text);
		}
	}

	$textbox.addEventListener('keyup', textbox_handler);
	setText($textbox, getText($textbox).replace(/\n/gi, ''));

	document.addEventListener('touchmove', function (event) {
		event.preventDefault();
	});
});
