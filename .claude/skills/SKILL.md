# Frontend Design System

## Philosophy

Design with intention. Every spacing value, color, and typographic choice should feel considered — not generated. Avoid the "AI aesthetic": no glowing purple gradients, no overly-rounded blobs, no hero sections stuffed with icons. Prioritize legibility, negative space, and material honesty.

---

## Spacing — 8px Grid

All spacing, sizing, and layout values must be multiples of 8px. The 4px half-step is permitted only for fine adjustments (icon padding, border compensation).

| Token     | Value  | Use                                      |
|-----------|--------|------------------------------------------|
| `space-1` | 4px    | Fine-grained nudges only                 |
| `space-2` | 8px    | Tight inline gaps (icon + label)         |
| `space-3` | 12px   | Input internal padding                   |
| `space-4` | 16px   | Component padding, list item gaps        |
| `space-5` | 24px   | Section sub-grouping                     |
| `space-6` | 32px   | Card padding, sidebar gutters            |
| `space-7` | 48px   | Between unrelated content blocks         |
| `space-8` | 64px   | Section vertical rhythm                  |
| `space-9` | 96px   | Large section separators                 |
| `space-10`| 128px  | Hero / page-level breathing room         |

Never use arbitrary pixel values. If a value is not on this scale, question the design decision first.

---

## Typography Scale

Font stack (variable-first): `"Inter var", "Inter", system-ui, sans-serif`
Monospace: `"JetBrains Mono", "Fira Code", monospace`

| Step   | Size     | Line Height | Weight      | Use                              |
|--------|----------|-------------|-------------|----------------------------------|
| `t-xs` | 11px     | 1.4         | 400         | Labels, badges, legal copy       |
| `t-sm` | 13px     | 1.5         | 400 / 500   | Captions, secondary metadata     |
| `t-base`| 15px    | 1.6         | 400         | Body copy                        |
| `t-md` | 17px     | 1.5         | 400 / 500   | Lead text, card descriptions     |
| `t-lg` | 20px     | 1.4         | 500 / 600   | Section subheadings              |
| `t-xl` | 24px     | 1.3         | 600         | Card titles, modal headers       |
| `t-2xl`| 30px     | 1.2         | 600 / 700   | Page section headings            |
| `t-3xl`| 36px     | 1.15        | 700         | Hero subheadings                 |
| `t-4xl`| 48px     | 1.1         | 700 / 800   | Hero headlines                   |
| `t-5xl`| 60px     | 1.05        | 800         | Display / statement text         |

**Rules:**
- Headings use tight tracking: `letter-spacing: -0.02em` at `t-2xl`+
- Body text never goes below `t-base` at 15px
- Line lengths: 60–75ch for prose, 45–55ch for narrow columns
- Never use `font-weight: 900` in UI — it reads as shouting

---

## Color Tokens

### Primitive Palette

```
-- Neutral (zinc-based, slightly warm)
--color-neutral-0:    #ffffff
--color-neutral-50:   #fafafa
--color-neutral-100:  #f4f4f5
--color-neutral-200:  #e4e4e7
--color-neutral-300:  #d1d1d6
--color-neutral-400:  #a1a1aa
--color-neutral-500:  #71717a
--color-neutral-600:  #52525b
--color-neutral-700:  #3f3f46
--color-neutral-800:  #27272a
--color-neutral-900:  #18181b
--color-neutral-950:  #09090b

-- Primary (slate-blue — serious, not electric)
--color-primary-50:   #f0f4ff
--color-primary-100:  #dbe4ff
--color-primary-200:  #bac8ff
--color-primary-300:  #91a7ff
--color-primary-400:  #748ffc
--color-primary-500:  #5c7cfa   ← brand
--color-primary-600:  #4c6ef5
--color-primary-700:  #3b5bdb
--color-primary-800:  #2f4acf
--color-primary-900:  #1e3a8a

-- Accent (amber — used sparingly)
--color-accent-100:   #fef3c7
--color-accent-300:   #fcd34d
--color-accent-500:   #f59e0b   ← accent
--color-accent-700:   #b45309

-- Semantic
--color-success:      #16a34a
--color-warning:      #d97706
--color-danger:       #dc2626
--color-info:         #0284c7
```

### Semantic Roles (what to actually use in code)

| Role                    | Light Mode              | Dark Mode               |
|-------------------------|-------------------------|-------------------------|
| `--bg-base`             | `neutral-50`            | `neutral-950`           |
| `--bg-surface`          | `neutral-0`             | `neutral-900`           |
| `--bg-elevated`         | `neutral-0`             | `neutral-800`           |
| `--bg-sunken`           | `neutral-100`           | `neutral-950`           |
| `--text-primary`        | `neutral-900`           | `neutral-50`            |
| `--text-secondary`      | `neutral-500`           | `neutral-400`           |
| `--text-tertiary`       | `neutral-400`           | `neutral-600`           |
| `--text-inverse`        | `neutral-0`             | `neutral-900`           |
| `--border-default`      | `neutral-200`           | `neutral-800`           |
| `--border-strong`       | `neutral-300`           | `neutral-700`           |
| `--interactive-default` | `primary-600`           | `primary-500`           |
| `--interactive-hover`   | `primary-700`           | `primary-400`           |
| `--interactive-active`  | `primary-800`           | `primary-300`           |

**Rules:**
- Never use primitive tokens in component code — always use semantic roles
- Accent color (`amber`) is for single highlights per page, not decoration
- Gray text on gray background: minimum 4.5:1 contrast ratio (WCAG AA)
- No gradients on interactive elements. Flat, then shadow on hover

---

## Component Patterns

### Buttons

Three variants. Three sizes. No more.

**Variants:**
- `primary` — filled, `--interactive-default` bg, white label
- `secondary` — outlined, `--border-strong` border, `--text-primary` label
- `ghost` — no border, `--text-secondary` label, subtle bg on hover

**Sizes:**
- `sm`: height 32px, `space-3` horizontal, `t-sm` font
- `md` (default): height 40px, `space-4` horizontal, `t-base` font
- `lg`: height 48px, `space-5` horizontal, `t-md` font

**Rules:**
- `border-radius: 6px` — not pill, not sharp square
- No drop shadows on buttons. Use background + border contrast only
- Hover: 6% darkened background (not a glow, not a lift)
- Active (pressed): 12% darkened, `transform: scale(0.98)`
- Disabled: `opacity: 0.4`, `cursor: not-allowed`, no pointer events
- Loading state: replace label with a 16px spinner (same color as label), preserve width
- Icon buttons: square, icon centered, no label — always include `aria-label`
- Never use uppercase labels — it reads as shouting and reduces legibility

```tsx
// Example structure (Tailwind)
<button
  className={cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
    {
      primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
      secondary: "border border-neutral-300 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100",
      ghost: "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900",
    }[variant],
    {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-[15px]",
      lg: "h-12 px-5 text-[17px]",
    }[size],
    disabled && "pointer-events-none opacity-40"
  )}
>
  {children}
</button>
```

---

### Cards

Cards contain a single coherent piece of information or action. They do not nest.

**Anatomy:** surface bg → border → padding → (optional header) → body → (optional footer)

**Variants:**
- `flat` — `--bg-surface`, `--border-default` border, no shadow
- `raised` — `--bg-surface`, subtle shadow: `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)`
- `interactive` — `raised` + hover shadow lift + cursor pointer

**Rules:**
- `border-radius: 12px` — premium feel, not bubbly
- Padding: `space-6` (32px) desktop, `space-4` (16px) mobile
- Cards never have colored backgrounds unless intentional (e.g., a status card)
- Keep card actions (buttons) in a consistent footer slot
- Maximum 3 actions per card. If you need more, rethink the card's scope

```tsx
// Example structure
<div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
  <div className="mb-4">
    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">{title}</h3>
    {description && <p className="mt-1 text-[15px] text-neutral-500">{description}</p>}
  </div>
  <div className="mt-6">{children}</div>
  {footer && (
    <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-6">
      {footer}
    </div>
  )}
</div>
```

---

### Forms

Forms are the most trust-sensitive UI. Every detail signals quality.

**Input anatomy:** label → input → helper/error text

**Input sizing:**
- Height: 40px (md), 36px (sm)
- Padding: `space-3` vertical, `space-4` horizontal
- `border-radius: 6px`

**States:**
- Default: `--border-default` border, `--bg-surface` background
- Focus: `--interactive-default` border (2px), no box-shadow glow
- Error: `--color-danger` border, danger-tinted message below
- Disabled: `--bg-sunken` background, `opacity: 0.6`

**Rules:**
- Labels always visible — never placeholder-only labels
- Placeholder text: `--text-tertiary` color, never used as the label
- Error messages: below the field, `t-sm`, `--color-danger`, appear on blur or submit
- Helper text: below the field, `t-sm`, `--text-secondary`, always visible (not on hover)
- Group related fields with 24px gap (`space-5`), separate unrelated groups with 32px (`space-6`)
- Required fields: mark optional fields with "(optional)" — not required ones with "*"
- Submit button: always at the bottom, `primary` variant, full-width on mobile

```tsx
// Example input
<div className="flex flex-col gap-1.5">
  <label className="text-sm font-medium text-neutral-700" htmlFor={id}>
    {label}
    {optional && <span className="ml-1 text-neutral-400 font-normal">(optional)</span>}
  </label>
  <input
    id={id}
    className={cn(
      "h-10 w-full rounded-md border px-4 text-[15px] text-neutral-900 placeholder:text-neutral-400",
      "transition-colors focus:outline-none focus:border-primary-600",
      error
        ? "border-red-500 bg-red-50/30"
        : "border-neutral-300 bg-white hover:border-neutral-400"
    )}
  />
  {error && <p className="text-sm text-red-600">{error}</p>}
  {helper && !error && <p className="text-sm text-neutral-500">{helper}</p>}
</div>
```

---

## Anti-Patterns — Avoid These

These patterns signal "generic AI output." Do not use them.

| Anti-Pattern | Why It Fails | What to Do Instead |
|---|---|---|
| Purple/indigo gradient hero backgrounds | Overused, reads as template | Use white or neutral base; add depth through layout |
| Glowing colored shadows (`box-shadow: 0 0 40px #6366f1`) | Looks like a SaaS template circa 2022 | Flat surfaces, subtle neutral shadows only |
| Emoji in headings or UI copy | Juvenile, inconsistent rendering | Reserve emoji for user-generated content |
| Grid of 6–12 feature cards with icons | Signals filler content | Use fewer features with real depth |
| Gradient text (`bg-clip-text`) on headings | Immediately dates the design | Bold, dark type on light background reads better |
| Full-bleed background illustrations | Adds noise, not signal | White space is the premium signal |
| "Get started for free" CTA with rocket emoji | Generic beyond recovery | Write specific copy for the actual value prop |
| Animations on every scroll event | Distracting, slows perception | Use motion only to confirm actions or guide attention |
| `border-radius: 9999px` on non-pill elements | Bubbly and toylike | `6px` for inputs/buttons, `12px` for cards |
| Dark mode with neon accent colors | Looks like a gaming site | Muted, desaturated accents on dark surfaces |

---

## Motion

Motion is not decoration — it confirms state and guides attention.

**Durations:**
- Micro (hover, focus): 100–150ms, `ease-out`
- Transition (enter/exit): 200–250ms, `ease-in-out`
- Page-level (route change): 300ms, `ease-in-out`

**Rules:**
- Default to `transition-colors` and `transition-opacity` — not `transition-all`
- No bouncing or spring animations in data-dense UIs
- Respect `prefers-reduced-motion` — wrap all animation in a media query check
- Stagger list animations only if the list has ≤ 8 items and loads once (not on each render)

---

## Layout Principles

- **Container width:** 1280px max, `space-6` horizontal margin on desktop, `space-4` on mobile
- **Content width:** 768px max for prose, 960px for dashboard layouts
- **Grid:** 12-column CSS Grid, 24px gap — never Flexbox for page-level layout
- **Sidebar width:** 240px (navigation), 320px (context panel)
- **Z-index scale:** content `0`, sticky headers `100`, dropdowns `200`, modals `300`, toasts `400`

---

## Accessibility Baseline

Every component must meet these before shipping:

- Interactive elements: visible focus ring (2px `--interactive-default`, 2px offset)
- Color contrast: 4.5:1 for body text, 3:1 for large text and UI components
- All images: `alt` attribute (empty string `""` for decorative images)
- Form controls: explicitly associated labels via `htmlFor`/`id` — no `aria-label` shortcuts for visible labels
- Keyboard navigation: tab order follows reading order, no keyboard traps
- Error states: announced via `role="alert"` or `aria-live="polite"` — not just color change
