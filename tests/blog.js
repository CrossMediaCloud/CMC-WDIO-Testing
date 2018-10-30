const assert = require('assert');

describe('Blog', function () {

	it('Fullpagescreenshot', function () {

		browser.url('/blog/');

		var results = browser.checkDocument({});
		results.forEach(function (result) {
			expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
		});
	})

});
