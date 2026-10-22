import '@neovici/cosmoz-badge';
import '@neovici/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html, useLayoutEffect } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';
import { styles } from './styles';
import { type UseTagProps } from './use-tag';

const NAMED = ['gray', 'brand', 'error', 'warning', 'success', 'processing'];

/**
 * An interactive tag component built on cosmoz-badge.
 *
 * @element cosmoz-tag
 *
 * @attr {string} type - Shape: color (default, rounded rectangle) or pill
 * @attr {string} color - gray (default), brand, error, warning, success, or any CSS color
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
	const {
		color,
		type = 'color',
		size,
		disabled,
		removable,
		removeLabel = 'Remove',
	} = host;

	// Icons are re-slotted into the badge, out of reach of its custom-color
	// styles, so the tag colors them itself.
	useLayoutEffect(() => {
		const custom =
			!!color && !NAMED.includes(color) && CSS.supports('color', color);
		host.style.setProperty('--cosmoz-tag-color', custom ? color : '');
	}, [color]);

	const handleRemove = () => {
		if (disabled) return;
		host.dispatchEvent(new CustomEvent('remove'));
	};

	return html`<cosmoz-badge
		color=${ifDefined(color)}
		size=${ifDefined(size)}
		?disabled=${disabled}
		type=${type}
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${when(
			removable,
			() =>
				html` <cosmoz-button
					variant="tertiary"
					icon-only
					slot="suffix"
					class="close"
					aria-label=${removeLabel}
					@mousedown=${(e: Event) => e.preventDefault()}
					@click=${handleRemove}
				>
					${xCloseIcon()}
				</cosmoz-button>`,
		)}
	</cosmoz-badge>`;
};

customElements.define(
	'cosmoz-tag',
	component(CosmozTag, {
		observedAttributes: ['color', 'type', 'size', 'disabled', 'removable'],
		styleSheets: [normalize, styles],
	}),
);

export { CosmozTag };
