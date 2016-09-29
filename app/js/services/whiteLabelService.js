four51.app.factory('WhiteLabel', function() {
	var replacements = [
		{"key":"Canceled","value":"Cancelled"},
		{"key":"Cart","value":"Basket"},
		{"key":"Cart Summary","value":"Basket Summary"},
		{"key":"Cart Type","value":"Basket Type"},
<<<<<<< HEAD
		{"key":"Center","value":"Centre"},
		{"key":"Favorite","value":"Favourite"},
		{"key":"Favorites","value":"My Favourites"},
=======
		{"key":"Cost Center","value":"Cost Centre"},
		{"key":"Shipping","value":"Delivery"},
>>>>>>> ecac757aaef882cfd5e914ac38b0ad1f2b9c6495
		{"key":"Tax","value":"VAT"},
		{"key":"State","value":"County"},
		{"key":"User Information","value":"My Details"},
		{"key":"ZIP","value":"Postcode"}
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
