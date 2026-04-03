import '@neovici/cosmoz-badge';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
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
 * @fires remove - Dispatched when the remove button is clicked
 *
 * @example Basic tag
 * ```html
 * <cosmoz-tag color="brand">Label</cosmoz-tag>
 * ```
 *
 * @example Removable tag
 * ```html
 * <cosmoz-tag removable>Label</cosmoz-tag>
 * ```
 */
const CosmozTag = (host: HTMLElement & UseTagProps) => {
	const { color, size, disabled, removable } = host;

	const handleRemove = () => {
		if (disabled) return;
		host.dispatchEvent(new CustomEvent('remove'));
	};

	return html`<cosmoz-badge
		color=${ifDefined(color)}
		size=${ifDefined(size)}
		?disabled=${disabled}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${when(
			removable,
			() =>
				html` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${(e: Event) => e.preventDefault()}
					@click=${handleRemove}
				>
					${xCloseIcon()}
				</button>`,
		)}
	</cosmoz-badge>`;
};

customElements.define(
	'cosmoz-tag',
	component(CosmozTag, {
		observedAttributes: ['color', 'size', 'disabled', 'removable'],
		styleSheets: [normalize, styles],
	}),
);

export { CosmozTag };
