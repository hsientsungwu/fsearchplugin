(function ( $ ) {

	$.fn.fsearch = function ( options ) {
		var _this = this;

		var defaults = {
			length 			: 2,
			list 			: '.search-list',
			target 			: 'data-content',
			keyupCallback 	: function() {},
			resetCallback 	: function() {},
			searchCallback 	: function(count) {}
		};

		var settings = $.extend(defaults, options);

		function search(key) {
	    	var count = 0;

	    	$(settings.list).each(function() { 
	            if ($(this).attr(settings.target).length === undefined) {
	                $(this).hide();
	            } else if ($(this).attr(settings.target).search(new RegExp(key, "i")) < 0) {
	                $(this).hide();
	            } else {
	                $(this).show();
	                count++;
	            }
	        });

	        if (typeof settings.searchCallback == 'function') settings.searchCallback(count);
		}

		function displayAll() {
			$(settings.list).each(function(e) {
				$(this).show();
			});
		}

		function reset() {
			if (typeof settings.resetCallback == 'function') settings.resetCallback();

			displayAll();
			$(this).val('');
		}

		function init () {
			$(_this).keyup(function(e) { console.log('keyup');
				if (typeof settings.keyupCallback == 'function') settings.keyupCallback();

				var key = $(this).val();

				if (key.length >= settings.length) {
					search(key);
				} else {
					displayAll();
				}
			});
		};

		return init();
	}

} ( jQuery ));