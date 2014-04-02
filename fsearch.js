/*
 * FSearch 0.1
 * @author HsienTsung Wu
 */

function Search( options ) {
	var _this = this;

	var defaults = {
		input 			: '#search-field',
		length 			: 2,
		list 			: '.search-list',
		target 			: 'data-content',
		keyupCallback 	: function() {},
		resetCallback 	: function() {},
		searchCallback 	: function(count) {}
	};

	_this.settings = $.extend(defaults, options);

	this.search = function(key) {
    	var count = 0;

    	$(_this.settings.list).each(function() { 
            if ($(this).attr(_this.settings.target).length === undefined) {
                $(this).hide();
            } else if ($(this).attr(_this.settings.target).search(new RegExp(key, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).show();
                count++;
            }
        });

        if (typeof _this.settings.searchCallback == 'function') _this.settings.searchCallback(count);
	}

	this.displayAll = function() {
		$(_this.settings.list).each(function(e) {
			$(this).show();
		});
	}

	this.reset = function() {
		if (typeof _this.settings.resetCallback == 'function') _this.settings.resetCallback();

		_this.displayAll();
		$(_this.settings.input).val('');
	};

	$(_this.settings.input).keyup(function(e) {
		if (typeof _this.settings.keyupCallback == 'function') _this.settings.keyupCallback();

		var key = $(this).val();

		if (key.length >= _this.settings.length) {
			_this.search(key);
		} else {
			_this.displayAll();
		}
	});

	return this;
}