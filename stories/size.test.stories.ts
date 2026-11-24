import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-tag';

export default { title: 'Tests/Size' } satisfies Meta;

const pill = (tag: Element) =>
	tag.shadowRoot
		?.querySelector('cosmoz-badge')
		?.shadowRoot?.querySelector<HTMLElement>('.badge');

const closeIcon = (tag: Element) =>
	tag.shadowRoot?.querySelector<HTMLElement>('.close svg');

export const XsIsTheSmallestPill: StoryObj = {
	render: () => html`
		<cosmoz-tag size="xs" removable>Extra small</cosmoz-tag>
		<cosmoz-tag size="sm" removable>Small</cosmoz-tag>
	`,
	play: async ({ canvasElement }) => {
		const [xs, sm] = canvasElement.querySelectorAll('cosmoz-tag');

		await waitFor(() => expect(pill(xs)).toBeTruthy());

		expect(pill(xs)!.getBoundingClientRect().height).toBe(20);
		expect(getComputedStyle(pill(xs)!).fontSize).toBe('11px');
		expect(pill(sm)!.getBoundingClientRect().height).toBe(24);
		expect(closeIcon(xs)!.getBoundingClientRect().width).toBe(8);
		expect(closeIcon(sm)!.getBoundingClientRect().width).toBe(10);
	},
};
