"use strict";

var Sandwich = (function(){
	var sandwichBasePrice = 5;

	return {
		getBasePrice: function() {
			return sandwichBasePrice;
		}
	};
})();