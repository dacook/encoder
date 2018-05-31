/**
 *  encoder
 *  v1.0.0
 *  david@redcliffs.net
 */

import url from 'locutus/php/url';

var form = document.getElementById('form');

const run = (e) => {
	var input = document.getElementById('input');
	var output = document.getElementById('output');
	var type = form.elements['type'].value;

	try {
		output.value = url[type](input.value);
	} catch (e) {
		output.value = "Error" ; //TODO: show err msg. eg bas64 decod err
	}

	e.preventDefault();
	return false;
};

form.addEventListener('submit', run);
form.addEventListener('change', run);