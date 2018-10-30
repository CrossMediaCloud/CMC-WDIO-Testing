const assert = require('assert');

describe('Contact us', function () {

	it('Fullpagescreenshot', function () {

		browser.url('/contact-us/');

		let results = browser.checkDocument({});
		results.forEach(function (result) {
			expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
		});
	})

});
