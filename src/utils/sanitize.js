var reserved = 'break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield'.split( ' ' );

/**
 * Generates a sanitized (i.e. valid identifier) name from a module ID
 * @param {string} id - a module ID, or part thereof
 * @returns {string}
 */
export default function sanitize ( name ) {
	name = name.replace( /[^a-zA-Z0-9_$]/g, '_' );
	if ( /[^a-zA-Z_$]/.test( name[0] ) ) {
		name = '_' + name;
	}

	if ( ~reserved.indexOf( name ) ) {
		name = '_' + name;
	}

	return name;
}

var pathSplitRE = /\/|\\/;
export function splitPath ( path ) {
	return path.split( pathSplitRE );
}
