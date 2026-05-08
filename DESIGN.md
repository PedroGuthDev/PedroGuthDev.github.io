# Design

## Style

Brand portfolio with a dark workbench feel: low-glare, precise, image-led, and product-minded. The site should feel like a polished engineer's desk, with real project screenshots carrying the proof.

## Color

Use OKLCH tokens. Base surfaces are tinted toward deep petrol/graphite. Teal is the primary action and navigation signal, amber is used for proof and availability, and coral appears as a rare project/category warmth. Each project card may carry a quiet full-border/tinted-surface color to improve wayfinding. Avoid pure black and pure white.

## Typography

Use a single strong sans-serif family loaded from Google Fonts, with large display contrast for the hero and compact, readable text for project and form surfaces. Keep body measures between 65 and 75 characters.

## Layout

Favor full-width sections with constrained inner grids. Use cards only for project showcases, contact panels, and discrete repeated items. The hero should show Pedro's name, availability, stack, portrait, and a hint of project work in the first viewport.

## Components

- Fixed navigation with active section state and language switcher.
- Hero with primary calls to portfolio and contact.
- Project showcase with screenshot carousel and project switcher.
- Stack view with compact skill tiles.
- About section with portrait and supporting facts.
- Contact section with direct channels and form states.

## Motion

Use subtle load and hover motion with cubic-bezier easing. Do not animate layout-heavy properties. Respect `prefers-reduced-motion`.

## Imagery

Use existing local portrait and project screenshots as primary visual proof. Screenshots should be framed cleanly and never replaced by abstract placeholders when real assets exist.
