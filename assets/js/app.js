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
var pickedColor = colors[ 3 ];

// Set the displayed RGB numbers in the header:
var colorDisplay = document.getElementById( "colorDisplay" );
colorDisplay.textContent = pickedColor;

for ( var i = 0; i < squares.length; i++ ) {
	
	// Add initial colors to squares:
	squares[ i ].style.backgroundColor = colors[ i ];

	// Add click listeners to squares:
	squares[ i ].addEventListener( "click", function() {
		
		// Grab color of clicked square:
		var clickedColor = this.style.backgroundColor;

		// Compare color to pickedColor:
		if ( clickedColor === pickedColor ) {
			alert( "Correct!" );
		}
		else {
			alert( "Wrong . . ." );
		}
		
	});
}