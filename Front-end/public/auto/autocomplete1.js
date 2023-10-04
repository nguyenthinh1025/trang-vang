// global variables
var acListTotal1   =  0;
var acListCurrent1 = -1;
var acDelay1		  = 500;
var acURL1		  = null;
var acSearchId1	  = null;
var acResultsId1	  = null;
var acSearchField1 = null;
var acResultsDiv1  = null;

function setAutoComplete1(field_id1, results_id1, get_url1)
{

	// initialize vars
	acSearchId1  = "#" + field_id1;
	acResultsId1 = "#" + results_id1;
	acURL1 		= get_url1;

	// create the results div
	$("#auto1").append('<div id="' + results_id1 + '"></div>');

	// register mostly used vars
	acSearchField1	= $(acSearchId1);
	acResultsDiv1	= $(acResultsId1);

	// reposition div
	repositionResultsDiv1();
	
	// on blur listener
	acSearchField1.blur(function(){ setTimeout("clearAutoComplete1()", 200) });

	// on key up listener
	acSearchField1.keyup(function (e) {

		// get keyCode (window.event is for IE)
		var keyCode = e.keyCode || window.event.keyCode;
		var lastVal1 = acSearchField1.val();

		// check an treat up and down arrows
		if(updownArrow1(keyCode)){
			return;
		}

		// check for an ENTER or ESC
		if(keyCode == 13 || keyCode == 27){
			clearAutoComplete1();
			return;
		}

		// if is text, call with delay
		setTimeout(function () {autoComplete1(lastVal1)}, acDelay1);
	});
}

// treat the auto-complete action (delayed function)
function autoComplete1(lastVal1ue)
{
	// get the field value
	var part = acSearchField1.val();

	// if it's empty clear the resuts box and return
	if(part == ''){
		clearAutoComplete1();
		return;
	}

	// if it's equal the value from the time of the call, allow
	if(lastVal1ue != part){
		return;
	}

	// get remote data as JSON
	$.getJSON(acURL1 + part, function(json){

		// get the total of results
		var ansLength1 = acListTotal1 = json.length;

		// if there are results populate the results div
		if(ansLength1 > 0){

			var newData1 = '';

			// create a div for each result
			for(i=0; i < ansLength1; i++) {
				newData1 += '<div class="unselected">' + json[i] + '</div>';
			}

			// update the results div
			acResultsDiv1.html(newData1);
			acResultsDiv1.css("display","block");
			
			// for all divs in results
			var divs = $(acResultsId1 + " > div");
		
			// on mouse over clean previous selected and set a new one
			divs.mouseover( function() {
				divs.each(function(){ this.className = "unselected"; });
				this.className = "selected";
			})
		
			// on click copy the result text to the search field and hide
			divs.click( function() {
				acSearchField1.val(this.childNodes[0].nodeValue);
				clearAutoComplete1();
			});

		} else {
			clearAutoComplete1();
		}
	});
}

// clear auto complete box
function clearAutoComplete1()
{
	acResultsDiv1.html('');
	acResultsDiv1.css("display","none");
}

// reposition the results div accordingly to the search field
function repositionResultsDiv1()
{
	// get the field position
	var sf_pos    = acSearchField1.offset();
	var sf_top    = sf_pos.top;
	var sf_left   = sf_pos.left;

	// get the field size
	var sf_height = acSearchField1.height();
	var sf_width  = acSearchField1.width();

	// apply the css styles - optimized for Firefox
	acResultsDiv1.css("position","absolute");
	acResultsDiv1.css("left", sf_left - 2);
	acResultsDiv1.css("top", sf_top + sf_height + 5);
	acResultsDiv1.css("width", sf_width - 2);
}


// treat up and down key strokes defining the next selected element
function updownArrow1(keyCode) {
	if(keyCode == 40 || keyCode == 38){

		if(keyCode == 38){ // keyUp
			if(acListCurrent1 == 0 || acListCurrent1 == -1){
				acListCurrent1 = acListTotal1-1;
			}else{
				acListCurrent1--;
			}
		} else { // keyDown
			if(acListCurrent1 == acListTotal1-1){
				acListCurrent1 = 0;
			}else {
				acListCurrent1++;
			}
		}

		// loop through each result div applying the correct style
		acResultsDiv1.children().each(function(i){
			if(i == acListCurrent1){
				acSearchField1.val(this.childNodes[0].nodeValue);
				this.className = "selected";
			} else {
				this.className = "unselected";
			}
		});

		return true;
	} else {
		// reset
		acListCurrent1 = -1;
		return false;
	}
}