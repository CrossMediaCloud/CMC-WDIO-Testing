let Login = require( '../helper/login' );
let login = new Login();

let assert = require( 'assert' );

describe( 'My account', function () {

	beforeEach(function () {
		browser.setViewportSize({
			width : 1920,
			height: 1280
		});
	});

	it( 'WP Login', function () {

		browser.url( '/wp-login.php' );

	} );

	it( 'WP Login Fullpagescreenshot', function () {

		let results = browser.checkDocument( {} );
		results.forEach( function ( result ) {
			expect( result.isWithinMisMatchTolerance ).to.equal( true, 'screenshot failure' );
		} );
	} );

	it( 'Logging in', function () {

		login.login();

		browser.url( '/my-account/' );

		let headline = browser.getText( 'h2' );
		assert.equal( headline, 'Hey User!' );

	} );

	it( 'Dashboard Fullpagescreenshot', function () {

		browser.url( '/my-account/' );

		let results = browser.checkDocument( {} );
		results.forEach( function ( result ) {
			expect( result.isWithinMisMatchTolerance ).to.equal( true, 'screenshot failure' );
		} );
	} );

	it( 'Logout Fullpagescreenshot', function () {

		browser.url( '/my-account/' );

		browser.click('=Logout');

	} );

	it( 'Logout Fullpagescreenshot', function () {

		let results = browser.checkDocument( {} );
		results.forEach( function ( result ) {
			expect( result.isWithinMisMatchTolerance ).to.equal( true, 'screenshot failure' );
		} );
	} );

	it( 'Logout confirm', function () {

		browser.click('=Confirm and log out');

	} );

	it( 'Logout confirm Fullpagescreenshot', function () {

		let results = browser.checkDocument( {} );
		results.forEach( function ( result ) {
			expect( result.isWithinMisMatchTolerance ).to.equal( true, 'screenshot failure' );
		} );
	} );

} );
