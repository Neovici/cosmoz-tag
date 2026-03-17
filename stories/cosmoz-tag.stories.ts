import {
	arrowRightIcon,
	arrowUpIcon,
	batteryFullIcon,
	batteryLowIcon,
	batteryMidIcon,
	bellMinusIcon,
	bellPlusIcon,
	bellRinging01Icon,
	bellRinging03Icon,
} from '@neovici/cosmoz-icons/untitled';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import '../src/cosmoz-tag';

const colors = ['gray', 'brand', 'error', 'warning', 'success'] as const;

const items = [
	{ id: 1, label: 'Design', color: 'brand' },
	{ id: 2, label: 'Bug', color: 'error' },
	{ id: 3, label: 'Feature', color: 'success' },
	{ id: 4, label: 'Review', color: 'warning' },
	{ id: 5, label: 'Docs', color: 'gray' },
	{ id: 6, label: 'Refactor', color: 'brand' },
	{ id: 7, label: 'Performance', color: 'success' },
	{ id: 8, label: 'Urgent', color: 'error' },
];

const meta: Meta = {
	title: 'Cosmoz Tag',
	component: 'cosmoz-tag',
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: [...colors],
			description: 'Tag color scheme',
			table: { defaultValue: { summary: 'gray' } },
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Tag size',
			table: { defaultValue: { summary: 'md' } },
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
			table: { defaultValue: { summary: 'false' } },
		},
		removable: {
			control: 'boolean',
			description: 'Show remove (X) button',
			table: { defaultValue: { summary: 'false' } },
		},
		label: { control: 'text', description: 'Tag label text' },
		remove: {
			description: 'Event dispatched when the remove button is clicked.',
			table: { category: 'events' },
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj;

const renderTag = (args: Record<string, unknown>) => html`
	<cosmoz-tag
		color=${args.color || 'gray'}
		size=${args.size || 'md'}
		?disabled=${args.disabled}
		?removable=${args.removable}
	>
		${args.label || 'Label'}
	</cosmoz-tag>
`;

export const Default: Story = {
	args: {
		color: 'gray',
		size: 'md',
		label: 'Label',
		disabled: false,
	},
	render: renderTag,
};

export const Sizes: Story = {
	render: () => html`
		<div class="story-row">
			<cosmoz-tag size="sm">Small</cosmoz-tag>
			<cosmoz-tag size="md">Medium</cosmoz-tag>
			<cosmoz-tag size="lg">Large</cosmoz-tag>
		</div>
	`,
	parameters: {
		docs: {
			description: { story: 'Tag sizes: sm, md, and lg.' },
		},
	},
};

export const Colors: Story = {
	render: () => html`
		<div class="story-row">
			${colors.map((c) => html`<cosmoz-tag color=${c}>${c}</cosmoz-tag>`)}
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'All available color variants for the tag.',
			},
		},
	},
};

export const WithCloseButton: Story = {
	args: {
		size: 'lg',
	},

	render: () => html`
		<div class="story-stack">
			<div>
				<h1 class="story-section-title">Colors</h1>
				<div class="story-row">
					${colors.map(
						(c) => html`<cosmoz-tag removable color=${c}>${c}</cosmoz-tag>`,
					)}
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Sizes</h1>
				<div class="story-row">
					<cosmoz-tag removable size="sm" color="brand">Small</cosmoz-tag>
					<cosmoz-tag removable size="md" color="brand">Medium</cosmoz-tag>
					<cosmoz-tag removable size="lg" color="brand">Large</cosmoz-tag>
				</div>
			</div>
		</div>
	`,

	parameters: {
		docs: {
			description: {
				story:
					'Removable tags with the removable attribute, shown across colors and sizes.',
			},
		},
	},
};

export const Disabled: Story = {
	render: () => html`
		<div class="story-stack">
			<div>
				<h1 class="story-section-title">Basic</h1>
				<div class="story-row">
					${colors.map(
						(c) => html`<cosmoz-tag disabled color=${c}>${c}</cosmoz-tag>`,
					)}
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Removable</h1>
				<div class="story-row">
					${colors.map(
						(c) =>
							html`<cosmoz-tag disabled removable color=${c}>${c}</cosmoz-tag>`,
					)}
				</div>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story: 'Disabled tags ignore close interactions.',
			},
		},
	},
};

export const WithIcons: Story = {
	render: () => html`
		<div class="story-stack">
			<div>
				<h1 class="story-section-title">Prefix</h1>
				<div class="story-row">
					${colors.map(
						(c) => html`
							<cosmoz-tag color=${c}>
								${bellRinging03Icon({ slot: 'prefix' })} ${c}
							</cosmoz-tag>
						`,
					)}
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Suffix</h1>
				<div class="story-row">
					${colors.map(
						(c) => html`
							<cosmoz-tag color=${c}>
								${c} ${arrowRightIcon({ slot: 'suffix' })}
							</cosmoz-tag>
						`,
					)}
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Prefix + Suffix</h1>
				<div class="story-row">
					${colors.map(
						(c) => html`
							<cosmoz-tag color=${c}>
								${arrowUpIcon({ slot: 'prefix' })} ${c}
								${arrowRightIcon({ slot: 'suffix' })}
							</cosmoz-tag>
						`,
					)}
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Prefix + Close</h1>
				<div class="story-row">
					<cosmoz-tag removable color="success">
						${batteryFullIcon({ slot: 'prefix' })} Success
					</cosmoz-tag>
					<cosmoz-tag removable color="warning">
						${batteryMidIcon({ slot: 'prefix' })} Warning
					</cosmoz-tag>
					<cosmoz-tag removable color="error">
						${batteryLowIcon({ slot: 'prefix' })} Error
					</cosmoz-tag>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Suffix + Close</h1>
				<div class="story-row">
					<cosmoz-tag removable color="success">
						${bellPlusIcon({ slot: 'suffix' })} Success
					</cosmoz-tag>
					<cosmoz-tag removable color="warning">
						${bellMinusIcon({ slot: 'suffix' })} Warning
					</cosmoz-tag>
					<cosmoz-tag removable color="error">
						${bellRinging01Icon({ slot: 'suffix' })} Error
					</cosmoz-tag>
				</div>
			</div>
			<div>
				<h1 class="story-section-title">Prefix + Suffix + Close</h1>
				<div class="story-row">
					<cosmoz-tag removable color="brand">
						${arrowUpIcon({ slot: 'prefix' })} Brand
						${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-tag>
					<cosmoz-tag removable color="success">
						${arrowUpIcon({ slot: 'prefix' })} Success
						${arrowRightIcon({ slot: 'suffix' })}
					</cosmoz-tag>
				</div>
			</div>
		</div>
	`,
	parameters: {
		docs: {
			description: {
				story:
					'Tags with prefix icons, suffix icons, and combinations with remove button.',
			},
		},
	},
};

export const Interactive: Story = {
	render: () => {
		const handleRemove = (e: Event) => {
			(e.target as HTMLElement).remove();
		};

		return html`
			<div class="story-row">
				${repeat(
					items,
					(item) => item.id,
					(item) => html`
						<cosmoz-tag removable color=${item.color} @remove=${handleRemove}>
							${item.label}
						</cosmoz-tag>
					`,
				)}
			</div>
		`;
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive list of removable tags that remove themselves via remove callback on each tag.',
			},
		},
	},
};
