# cosmoz-tag

An interactive tag web component built on [cosmoz-badge](https://github.com/Neovici/cosmoz-badge). Adds close/remove and disabled state to the badge's visual foundation.

## Installation

```bash
npm install @neovici/cosmoz-tag
```

## Usage

Import the component:

```javascript
import '@neovici/cosmoz-tag';
```

Use in HTML:

```html
<!-- Basic tag -->
<cosmoz-tag color="brand">Label</cosmoz-tag>

<!-- Removable tag -->
<cosmoz-tag removable @remove="${handleRemove}">Label</cosmoz-tag>

<!-- Full-featured tag -->
<cosmoz-tag removable color="brand"> Label </cosmoz-tag>
```

## Attributes

| Attribute   | Type    | Default | Description                                        |
| ----------- | ------- | ------- | -------------------------------------------------- |
| `color`     | string  | `gray`  | Color scheme: gray, brand, error, warning, success |
| `size`      | string  | `md`    | Size: sm, md, lg                                   |
| `removable` | boolean | `false` | Show remove (X) button                             |
| `disabled`  | boolean | `false` | Disabled state (non-interactive, visually muted)   |

## Events

| Event    | Detail | Description                                  |
| -------- | ------ | -------------------------------------------- |
| `remove` | `{}`   | Dispatched when the remove button is clicked |

## Slots

| Slot      | Description                                 |
| --------- | ------------------------------------------- |
| (default) | Tag label text                              |
| `prefix`  | Content before text (icons, avatars, flags) |
| `suffix`  | Content after text (icons)                  |

## CSS Parts

Exposed via `exportparts` from the inner cosmoz-badge:

| Part    | Description                 |
| ------- | --------------------------- |
| `badge` | The badge container element |

## Development

1. Clone the repository
2. Run `npm install`
3. Start development with `npm run storybook:start`
4. Make changes and verify with tests

## Available Scripts

- `npm run lint` - Run ESLint and TypeScript type checking
- `npm run build` - Build TypeScript to dist/
- `npm run test` - Run all tests (unit + storybook)
- `npm run test:unit` - Run unit tests only (fast, jsdom)
- `npm run test:storybook` - Run storybook interaction tests only (browser)
- `npm run test:watch` - Run tests in watch mode
- `npm run storybook:start` - Start Storybook development server
- `npm run storybook:build` - Build static Storybook

## Testing

This project uses Vitest with two test projects:

### Unit Tests (`test:unit`)

Fast tests that run in jsdom for utility functions and pure logic.

### Storybook Tests (`test:storybook`)

Browser-based tests using Playwright for component rendering and interactions. Tests are written as `play` functions in story files.

**Important:** Never import from `'vitest'` in story files. Use `'storybook/test'` instead.

## Publishing

This package uses Semantic Release for automated versioning and publishing based on Conventional Commits.
