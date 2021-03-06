import packageResult from 'utils/packageResult';
import { req } from 'utils/mappers';

export default function cjs ( bundle, body, options ) {
	var importBlock = bundle.externalModules.map( x => {
		return `var ${x.name} = ${req(x.id)};`;
	}).join( '\n' );

	if ( importBlock ) {
		body.prepend( importBlock + '\n\n' );
	}

	var defaultName = bundle.entryModule.identifierReplacements.default;
	if ( defaultName ) {
		body.append( `\n\nmodule.exports = ${defaultName};` );
	}

	body.prepend("'use strict';\n\n").trimLines();

	return packageResult( body, options, 'toCjs', true );
}
