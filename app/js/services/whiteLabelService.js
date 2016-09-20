four51.app.factory('WhiteLabel', function() {
	var replacements = [
		{"key":"Cart","value":"Basket"},
		{"key":"Cart Summary","value":"Basket Summary"},
		{"key":"Cart Type","value":"Basket Type"},
		{"key":"Cost Center","value":"Cost Centre"},
		{"key":"Tax","value":"VAT"},
		{"key":"User Information","value":"My Details"},
		{"key":"Favorites","value":"My Favourites"},
		{"key":"Favorite","value":"Favourite"},
		{"key":"Canceled","value":"Cancelled"},
		{"key":"Center","value":"Centre"}
	];

	return { replacements: replacements };
});

four51.app.directive('wrapOwlcarousel', function () { 
 return { 
 restrict: 'E', 
 link: function (scope, element, attrs) { 
 var options = scope.$eval($(element).attr('data-options')); 
 $(element).owlCarousel(options); 
 } 
 }; 
});
