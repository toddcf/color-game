// NOTE: RGB(158, 178, 130) is an aweseome, Autechre-like color!

var qtySquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll( ".square" );
// Set the displayed RGB numbers in the header:
var colorDisplay = document.getElementById( "colorDisplay" );
// Message Display:
var messageDisplay = document.getElementById( "message" );
var header = document.getElementById( "header" );
var resetButton = document.getElementById( "reset" );
var modeButtons = document.querySelectorAll( ".mode" );

init();

function init() {

	for ( var i = 0; i < modeButtons.length; i++ ) {

		// Set event listeners for mode buttons:
		modeButtons[ i ].addEventListener( "click", function() {
			
			// Hardcode: Remove "selected" class from mode buttons first:
			modeButtons[ 0 ].classList.remove( "selected" );
			modeButtons[ 1 ].classList.remove( "selected" );
			
			// Then add it back to the one that was just clicked on:
			this.classList.add( "selected" );

			// MODE setting:
			this.textContent === "Easy" ? qtySquares = 3 : qtySquares = 6;

			reset();

		});

	}

	// Set up each square:
	for ( var i = 0; i < squares.length; i++ ) {
	
		// Add click listeners to squares:
		squares[ i ].addEventListener( "click", function() {
			
			// Grab color of clicked square:
			var clickedColor = this.style.backgroundColor;

			// Compare color to pickedColor:
			if ( clickedColor === pickedColor ) {
				// Display message:
				messageDisplay.textContent = "Correct!";
				changeColors( clickedColor );
				resetButton.textContent = "Play Again";
			}
			else {
				// Match the square's bg color to the body's bg color:
				this.style.backgroundColor = "#232323";
				// Display message:
				messageDisplay.textContent = "Incorrect - Try Again";
			}

		});
	
	}

	// Now reset the screen:
	reset();

}

// BUTTONS

// Reset Button:
resetButton.addEventListener( "click", function() {
	reset();
});

function squareColors() {

	

};

function changeColors( color ) {

	for ( var i = 0; i < squares.length; i++ ) {
		squares[ i ].style.backgroundColor = color;
	}

	header.style.background = color;

};

function pickColor() {
	// Choose random number between 1 and the number of colors in the array (3 for easy, 6 for hard):
	var random = Math.floor( Math.random() * colors.length );
	return colors[ random ];
};

function randomColor() {

	// Pick a "red" from 0 to 255:
	var red = Math.floor( Math.random() * 256 );
	// Pick a "green" from 0 to 255:
	var green = Math.floor( Math.random() * 256 );
	// Pick a "blue" from 0 to 255:
	var blue = Math.floor( Math.random() * 256 );

	// Plug RGB values into string and return it:
	return "rgb(" + red + ", " + green + ", " + blue +")";
};

function generateRandomColors( qty ) {

	// Make an array.
	var arr = [];
	
	// Add qty random colors to array.
	for ( var i = 0; i < qty; i++ ) {

		// Get random color and push into array:
		arr.push( randomColor() );
	}

	// Return that array
	return arr;

};

function reset() {

	// Generate all new colors
	colors = generateRandomColors( qtySquares );
	// Pick new random color from array
	pickedColor = pickColor();
	// Change display color in header:
	colorDisplay.textContent = pickedColor;
	// Change colors of squares on page.
	squareColors();
	// Ensure button text says New Colors:
	resetButton.textContent = "New Colors";
	// Clear messageDisplay:
	messageDisplay.textContent = "";
	// Reset header's bg color:
	header.style.background = "";

	for ( var i = 0; i < squares.length; i++ ) {
		
		// If the square has an index, give it a new color:
		if ( colors[ i ] ) {
			// First make sure all squares are visible:
			squares[ i ].style.display = "block";
			// Then assign the color:
			squares[ i ].style.backgroundColor = colors[ i ];
		}
		// Otherwise, hide the square:
		else {
			squares[ i ].style.display = "none";
		}

	}

};