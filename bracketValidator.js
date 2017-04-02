/*
 * Let's say:
 *
 * '(', '{', '[' are called "openers."
 * ')', '}', ']' are called "closers."
 *
 * Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
 * 
 * Examples:
 * 
 * "{ [ ] ( ) }" should return True
 * "{ [ ( ] ) }" should return False
 * "{ [ }" should return False
 */
 
const bracketValidator = (str) => {
	let openers = [ '(', '[', '{' ];
	let closers = [ '}', ']', ')' ];
	let correspondance = {
		'(' : ')',
		'{' : '}',
		'[' : ']'
	};
	let len = str.length;
	let stack = [];
	/* iterate through the string - if we see an opener, push onto stack */
	/* if we see a closer, check for it's counterpart on the top of the stack */
	for ( var i = 0; i < len; i++ ) {
		if ( openers.includes( str[i] ) ) {
			stack.unshift( str[i] );
		}
		if ( closers.includes( str[i] ) ) {
			var match = stack.shift();
			if ( !match || correspondance[match] !== str[i] ) {
				return false;
			}
		}
	}
	return stack.length === 0;
}
