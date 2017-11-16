// NOTE: RGB(158, 178, 130) is an aweseome, Autechre-like color!

// An array of six colors:
var colors = generateRandomColors( 6 );

// Loop through all squares and assign a color to be each one's background:
var squares = document.querySelectorAll( ".square" );
var pickedColor = pickColor();

// Set the displayed RGB numbers in the header:
var colorDisplay = document.getElementById( "colorDisplay" );
colorDisplay.textContent = pickedColor;

// Reset Button:
var resetButton = document.getElementById( "reset" );
resetButton.addEventListener( "click", function() {

	// Generate all new colors
	colors = generateRandomColors( 6 );
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
});

// Message Display:
var messageDisplay = document.getElementById( "message" );
var header = document.getElementById( "header" );

function squareColors() {

	for ( var i = 0; i < squares.length; i++ ) {
	
		// Add initial colors to squares:
		squares[ i ].style.backgroundColor = colors[ i ];

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

squareColors();