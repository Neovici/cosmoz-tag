import { css } from '@pionjs/pion';
/* Spacing helper based on --cz-spacing (0.25rem = 4px) */
const sp = (n: number) => `calc(var(--cz-spacing) * ${n})`;
/**
 * Tag-specific styles. Badge base styles come from cosmoz-badge.
 */
export const styles = css`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	:host([disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* =========================================
	 * REMOVE BUTTON
	 * ========================================= */
	cosmoz-button.close::part(button),
	.close:not(cosmoz-button) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		/* a little room so the hover reads as a round hit area; the
		   negative margin keeps the tag's size as it was */
		padding: ${sp(0.5)};
		margin: ${sp(-0.5)};
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		opacity: 0.7;
		transition:
			opacity 0.1s,
			background-color 0.1s;
		flex-shrink: 0;
		border-radius: var(--cz-radius-full);
		line-height: 0;

		width: auto;
		height: auto;
	}
	cosmoz-button.close {
		display: inline-flex;
		flex-shrink: 0;
	}

	cosmoz-button.close::part(button):hover,
	.close:hover:not(cosmoz-button) {
		opacity: 1;
		/* tinted from the tag's own text color, so it suits every tag color */
		background: rgb(from currentColor r g b / 0.12);
	}

	cosmoz-button.close::part(button):focus-visible,
	.close:focus-visible:not(cosmoz-button) {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${sp(2.5)};
		height: ${sp(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${sp(3)};
		height: ${sp(3)};
	}

	:host([size='lg']) .close svg {
		width: ${sp(3.5)};
		height: ${sp(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${sp(3.5)};
		height: ${sp(3.5)};
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`;
