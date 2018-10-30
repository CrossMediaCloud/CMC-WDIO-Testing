const assert = require('assert');

describe('Search', function () {

	it('Fullpagescreenshot empty', function () {

		browser.url('/?s');

		let results = browser.checkDocument({});
		results.forEach(function (result) {
			expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
		});
	});

	it('Fill search field', function () {

		browser.setValue('input[id="s"]', 'imprint');

		browser.click('button#searchsubmit');

	});

	it('Fullpagescreenshot surfing', function () {

		let results = browser.checkDocument({});
		results.forEach(function (result) {
			expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
		});
	});

});
