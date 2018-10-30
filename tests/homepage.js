const assert = require('assert');

describe('Homepage', function () {

	it('Fullpagescreenshot', function () {

		browser.url('/');

		let results = browser.checkDocument({});
		results.forEach(function (result) {
			expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
		});
	})

});