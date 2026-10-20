import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import '../src/cosmoz-tag';

describe('tag remove control', () => {
	for (const size of ['sm', 'md', 'lg']) {
		it(`fits the ${size} remove control to its icon`, async () => {
			const el = await fixture(
				html`<cosmoz-tag removable size=${size}>Sample</cosmoz-tag>`,
			);
			el.style.cssText = '--cz-spacing: 4px; --cz-control-height-md: 32px;';
			await nextFrame();
			const close = el.shadowRoot.querySelector('.close');
			const button = close.shadowRoot.querySelector('button');
			const icon = close.querySelector('svg');
			expect(button.getBoundingClientRect().width).to.be.closeTo(
				icon.getBoundingClientRect().width,
				0.5,
			);
			expect(button.getBoundingClientRect().width).to.be.greaterThan(0);
		});
	}

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
