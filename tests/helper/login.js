const assert = require('assert');

class Login {
	// Select elements
	get email() {
		return $('#user_login');
	}

	get password() {
		return $('#user_pass');
	}

	get submit() {
		return $('input[id=wp-submit]');
	}

	// Login method
	login() {

		// Login data
		const validEmail = 'user@domain.tld';
		const validPass = 'password';

		this.email.setValue(validEmail);
		this.password.setValue(validPass);

		this.submit.click();
	}
}

module.exports = Login;
