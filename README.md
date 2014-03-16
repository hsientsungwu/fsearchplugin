FSearch Plugin
===============

######Introduction:

FSearch is a simple jquery plugin that perform a simple search through the DOM user specified. 

######Basic Usage:

```
$(#search-key).fsearch();

```

######Advance Usage:
```
$(#search-key).fsearch({
	length 			: 3 
	list 			: '.search-list li', 
	target 			: 'data-content',
	keyupCallback 	: function() {},
	resetCallback 	: function() {},
	searchCallback 	: function(count) {}
});
```

######Variables:
* length : start the search after three characters have been entered in input fields
* list : list of data search will perform. E.g li, tr, div, p ... etc.
* target: data attribute that stores the search content
	`<li data-content="steve">Steve</li>`
* keyupCallback : Callback function calls when a key is entered in the search key input
* resetCallback : Callback function calls when a reset button is clicked.
* searchCallback: Callback function calls AFTER search has performed. 

