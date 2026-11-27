import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import '../src/cosmoz-tag';

describe('cosmoz-tag remove button tab order', () => {
	it('skips the remove button when remove-tabindex is -1', async () => {
		await fixture(
			html`<div>
				<button id="before">before</button>
				<cosmoz-tag removable>Plain</cosmoz-tag>
				<cosmoz-tag removable remove-tabindex="-1">Skipped</cosmoz-tag>
				<button id="after">after</button>
			</div>`,
		);

		const before = document.querySelector('#before');
		const after = document.querySelector('#after');
		const [plain, skipped] = document.querySelectorAll('cosmoz-tag');

		before.focus();

		// The plain tag's remove button is a tab stop.
		await sendKeys({ press: 'Tab' });
		expect(document.activeElement).to.equal(plain);

		// The remove button with tabindex -1 is skipped.
		await sendKeys({ press: 'Tab' });
		expect(document.activeElement).not.to.equal(skipped);
		expect(document.activeElement).to.equal(after);
	});
});
