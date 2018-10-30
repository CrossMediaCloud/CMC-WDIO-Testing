const assert = require('assert');

describe('Blog post', function () {

	it('Fullpagescreenshot', function () {

		browser.url('/blog-post/');

		let results = browser.checkDocument({});
		results.forEach(function (result) {
			expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
		});
	})

});
