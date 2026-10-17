import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import '../src/cosmoz-tag';

describe('tag remove control', () => {
	it('removes once and respects the disabled tag state', async () => {
		const el = await fixture(html`<cosmoz-tag removable>Sample</cosmoz-tag>`);
		let removed = 0;
		el.addEventListener('remove', () => removed++);
		const button = el.shadowRoot.querySelector('.close');
		button.click();
		expect(removed).to.equal(1);
		el.setAttribute('disabled', '');
		await nextFrame();
		button.click();
		expect(removed).to.equal(1);
	});
});
