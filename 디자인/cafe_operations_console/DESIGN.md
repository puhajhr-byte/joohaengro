---
name: Cafe Operations Console
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#564338'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#897267'
  outline-variant: '#ddc1b3'
  surface-tint: '#9b4500'
  primary: '#903f00'
  on-primary: '#ffffff'
  primary-container: '#b45309'
  on-primary-container: '#fff1eb'
  inverse-primary: '#ffb68e'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#854600'
  on-tertiary: '#ffffff'
  tertiary-container: '#a95b00'
  on-tertiary-container: '#fff1e9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb68e'
  on-primary-fixed: '#331200'
  on-primary-fixed-variant: '#763300'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-numeric-lg:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  label-numeric-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-numeric-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system is engineered for independent cafe owners, general managers, and shift leads executing high-stakes daily closing workflows, inventory reconciliation, cash-drawer balancing, and recipe prep tracking. The operational context often involves tired users working late hours, shifting rapidly between POS stations, mobile screens, and back-office desktops.

The design philosophy unites utilitarian precision with the grounded warmth of artisanal coffee craft:
- **Utilitarian Speed & Clarity:** Information density is calibrated for rapid scanning and error-free data entry. Zero extraneous visual noise, decorative fluff, or ambiguous interactions.
- **Warm Editorial Precision:** Combines a clinical slate background with roasted coffee and amber accents to soften institutional coldness without sacrificing operational authority.
- **High-Fidelity Feedback:** Visual confirmations, ledger-style alignment, and explicit validation states provide immediate assurance that financial and inventory counts balance perfectly before closing the doors.

## Colors

The palette establishes an ergonomic, glare-resistant hierarchy tailored for extended shifts under harsh cafe lighting or dim back-office spaces.

- **Primary (`#B45309` - Roasted Amber):** Used for primary call-to-action buttons, key workflow step completions (e.g., "Finalize Daily Close"), active navigation indicators, and high-priority toggles.
- **Secondary (`#0F172A` - Dark Slate / Espresso Charcoal):** Grounding neutral used for dominant typography, structural header bars, deep navigation drawers, and authoritative table column headers.
- **Tertiary (`#D97706` - Warm Honey / Golden Crema):** Secondary highlights, interactive hover fills, metric callouts, and secondary action accents.
- **Neutral Canvas (`#F8FAFC` - Light Slate Canvas):** Cool-tinted, low-fatigue base background that prevents pure-white glare. Structural cards sit on `#FFFFFF` bordered with `#E2E8F0`.
- **System States:**
  - **Success (`#059669` / Surface `#ECFDF5`):** Confirmed reconciliations, cash-in-drawer balance, safe temperature readings.
  - **Warning (`#F59E0B` / Surface `#FFFBEB`):** Low stock thresholds, pending shift sign-offs, minor inventory variances.
  - **Danger (`#E11D48` / Surface `#FFF1F2`):** Register cash discrepancies, expired prep batches, missed compliance checks.

## Typography

Typography prioritizes tabular legibility, rapid data comparison, and bilingual stability (Korean/English):

- **Primary UI & Headings (Inter / Pretendard fallback):** Neutral, crisp grotesk with tight aperture and clean geometry. Delivers seamless readability across high-density task lists and nested modals.
- **Data & Numeric Display (JetBrains Mono / Inter Tabular Figures):** Applied strictly to currency values, batch weights (grams, ml), stock counts, time logs, and variance percentages. Enforces `font-variant-numeric: tabular-nums` across all tables to guarantee vertically aligned decimal points.
- **Section Micro-Labels (`label-caps`):** Rendered in uppercase with generous tracking (`0.06em`) for dashboard metric headers (e.g., `CASH DRAWER DELTA`, `PREP SHELF LIFE EXPIRED`).

## Layout & Spacing

The layout is built around a responsive 12-column grid designed for rapid reflow across three core hardware form-factors: handheld smartphones (stock counting in walk-in fridges), counter POS tablets (prep logs and mid-day restock), and widescreen desktops (comprehensive end-of-day reconciliation).

- **Grid Architecture:**
  - **Desktop (1024px+):** 12 columns, fixed 256px collapsible left sidebar for quick navigation, `1.5rem` gutters, `2rem` outer padding.
  - **Tablet (768px - 1023px):** 8 columns, compact navigation rail (icon-only), `1rem` gutters, `1.5rem` outer padding.
  - **Mobile (< 768px):** 4 columns, persistent bottom action bar for primary actions, full-width cards with `1rem` outer screen gutters.
- **Density Control:** Core tables and closing checklists use compact vertical rhythm (`space-sm` for row padding) to maximize visible line items above the fold, while modal dialogues expand to `space-lg` to create clear cognitive separation during critical sign-offs.

## Elevation & Depth

Visual depth avoids heavy skeuomorphic shadows or distracting blurs, leaning instead on low-contrast structural borders, surgical hairline dividers, and minimal ambient drop shadows.

- **Level 0 (Base Canvas):** `#F8FAFC` flat surface.
- **Level 1 (Cards, Panel Blocks, Table Containers):** `#FFFFFF` background bound by a crisp 1px solid border in `#E2E8F0`. Shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`.
- **Level 2 (Dropdowns, Popovers, Floating Action Rows):** `#FFFFFF` with 1px `#CBD5E1` border and ambient drop shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Closing Modals & Critical Alert Overlays):** Centered `#FFFFFF` surface with an elevated shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`. Backdropped by `#0F172A` at 60% opacity to dim ambient distractions completely.

## Shapes

A subtle, controlled corner radius is maintained across all system elements to project modern software discipline while preserving compact data density.

- **Radius Scale:** Base radius is `0.25rem` (4px). Structural cards and modals utilize `rounded-lg` (`0.5rem` / 8px).
- **Interactive Elements:** Input inputs, buttons, chips, and table line selection states use `0.375rem` (6px) for an ergonomic, tactile touch target without appearing overly playful or toy-like.
- **Status Tags & Micro Badges:** Fully enclosed pill shape (`rounded-full`) to immediately distinguish contextual metadata from interactive button boxes.

## Components

### Buttons
- **Primary:** Solid `#B45309` with white text, font weight 600. On hover: `#92400E`. Active: `#78350F`. Focus: 2px offset ring with `#D97706`.
- **Secondary:** Surface `#FFFFFF`, border 1px solid `#CBD5E1`, text `#0F172A`. On hover: `#F1F5F9`.
- **Destructive:** Solid `#E11D48` or subtle `#FFF1F2` with `#E11D48` text for reset/delete actions.
- **Height Scale:** Compact table action button (32px), standard form button (40px), closing workflow hero button (48px for easy tablet tap).

### Input Fields & Structured Form Controls
- **Standard Text / Number Inputs:** Background `#FFFFFF`, 1px solid `#CBD5E1` border, 8px vertical padding, 12px horizontal padding. Active focus transitions border to `#B45309` with a subtle amber glow (`ring-1 ring-amber-500/20`).
- **Currency & Weight Inputs:** Feature a fixed left or right adornment box (e.g., `₩`, `g`, `ml`, `ea`) in `#F1F5F9` with `#64748B` label text. Font inside the input defaults to `JetBrains Mono` with right text alignment.
- **Error State:** Border becomes `#E11D48`, accompanied by an inline warning message below the field in 12px `#E11D48`.

### Status Badges & Chips
- **Success:** Surface `#ECFDF5`, text `#065F46`, border 1px solid `#A7F3D0` (e.g., `정산 완료`, `적정 재고`).
- **Warning:** Surface `#FFFBEB`, text `#92400E`, border 1px solid `#FDE68A` (e.g., `재고 부족`, `확인 필요`).
- **Danger:** Surface `#FFF1F2`, text `#9F1239`, border 1px solid `#FECDD3` (e.g., `금액 불일치`, `유통기한 임박`).
- **Neutral:** Surface `#F1F5F9`, text `#334155`, border 1px solid `#E2E8F0` (e.g., `대기 중`).

### Closing Workflow Checklist & Table Rows
- **Table Structure:** Header uses `#F8FAFC` background with 11px uppercase bold slate labels (`#64748B`). Row height fixed at 48px with 1px border `#F1F5F9`. Hover state tints row to `#F8FAFC`.
- **Checklist Item:** Multi-state row featuring a custom 20px checkbox, primary task label, timestamp badge, and operator signature initials. Completed rows dim text to `#94A3B8` with an emerald check icon.

### Tab Switchers & Segmented Controls
- Contained within an `#F1F5F9` track. Active tab transitions into a clean white card (`#FFFFFF`) with a micro-shadow (`0 1px 2px rgba(0,0,0,0.06)`) and bold `#0F172A` label, while inactive tabs remain flat with `#64748B` typography.

### Reconciliation Modals
- Fixed max-width (540px for single-step, 720px for multi-column reconciliation). Header includes step progression indicator, bold title, and immediate close button. Modal footer is pinned to the base with an explicit two-button cluster (`취소` secondary on left, `마감 확정` primary roasted amber on right).