(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	function add(f, s) {
		return f + s
	}

	function sub(f, s) {
		return f - s
	}

	console.log(add(1, 4));

	console.log(sub(1, 4));

}));
