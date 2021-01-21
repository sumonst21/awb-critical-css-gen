class BrowserInterface {
	// eslint-disable-next-line no-unused-vars
	async runInPage(pageUrl, viewport, method, ...args) {
		throw new Error(
			'Undefined interface method: BrowserInterface.runInPage()'
		);
	}

	async getCssUrls(pageUrl) {
		return await this.runInPage(
			pageUrl,
			null,
			BrowserInterface.innerGetCssUrls
		);
	}

	static innerGetCssUrls() {
		return [...document.getElementsByTagName('link')]
			.filter((link) => link.rel === 'stylesheet')
			.map((link) => link.href);
	}
}

module.exports = BrowserInterface;