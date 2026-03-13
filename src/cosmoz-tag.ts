import '@neovici/cosmoz-badge';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { styles } from './styles';
import { type UseTagProps } from './use-tag';

/**
 * An interactive tag component built on cosmoz-badge.
 *
 * @element cosmoz-tag
 *
 * @slot - Default slot for tag label text
 * @slot prefix - Slot for content before text (icons, avatars, flags)
 * @slot suffix - Slot for content after text (icons)
 *
 * @fires tag-close - Dispatched when the close button is clicked
 *
 * @example Basic tag
 * ```html
 * <cosmoz-tag color="brand">Label</cosmoz-tag>
 * ```
 *
 * @example Closable tag
 * ```html
 * <cosmoz-tag closeable>Label</cosmoz-tag>
 * ```
 */
const CosmozTag = (host: HTMLElement & UseTagProps) => {
	const { color, size, disabled, closeable } = host;

	const handleClose = () => {
		if (disabled) return;
		host.dispatchEvent(
			new CustomEvent('tag-close', {
				bubbles: true,
				composed: true,
			}),
		);
	};

	return html`<cosmoz-badge color=${color} size=${size} ?disabled=${disabled}>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${when(
			closeable,
			() =>
				html` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${(e: Event) => e.preventDefault()}
					@click=${handleClose}
				>
					${xCloseIcon()}
				</button>`,
			() => nothing,
		)}
	</cosmoz-badge>`;
};

customElements.define(
	'cosmoz-tag',
	component(CosmozTag, {
		observedAttributes: ['color', 'size', 'disabled', 'closeable'],
		styleSheets: [normalize, styles],
	}),
);

export { CosmozTag };
