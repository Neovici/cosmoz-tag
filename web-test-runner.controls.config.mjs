import cfg from '@neovici/cfg/web/test-runner.mjs';
export default {
	...cfg,
	files: ['test/shared-buttons.browser.test.js'],
	testFramework: { config: { ui: 'bdd' } },
};
