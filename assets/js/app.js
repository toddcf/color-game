// An array of six colors:
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

// Loop through all squares and assign a color to be each one's background:
var squares = document.querySelectorAll( ".square" );
var pickedColor = pickColor();

// Set the displayed RGB numbers in the header:
var colorDisplay = document.getElementById( "colorDisplay" );
colorDisplay.textContent = pickedColor;

// Message Display:
var messageDisplay = document.getElementById( "message" );

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
		}
		else {
			// Match the square's bg color to the body's bg color:
			this.style.backgroundColor = "#232323";
			// Display message:
			messageDisplay.textContent = "Incorrect - Try Again";
		}

	});
}

function changeColors( color ) {

	for ( var i = 0; i < squares.length; i++ ) {
		squares[ i ].style.backgroundColor = color;
	}

};

function pickColor () {
	// Choose random number between 1 and the number of colors in the array (3 for easy, 6 for hard):
	var random = Math.floor( Math.random() * colors.length );
	return colors[ random ];
};