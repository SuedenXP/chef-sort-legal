> Geänderte BrainBlooms-Projektfassung, 16.10.2026. Copyright 2025 Paul Bakaus. Apache-2.0; siehe ../LICENSE und ../NOTICE.md. Quelle: pbakaus/impeccable @ 6af45ac9a5eb8792f033d3242f52e99812fd91fa.

> Bearbeitung: Native-Routing, Engine-Aufruf und Original-Berichts-/Befehlsablauf entfernt; Integritätsprüfung manuell ersetzt. Keine vollständige Originalprüfung.

Run systematic **technical** quality checks and generate a comprehensive report. Don't fix issues; document them for other commands to address.

This is a code-level audit, not a design critique. Check what's measurable and verifiable in the implementation.

## Diagnostic Scan

Run comprehensive checks across 5 dimensions. Score each dimension 0-4 using the criteria below.

### 1. Accessibility (A11y)

**Check for**:
- **Contrast issues**: Text contrast ratios < 4.5:1 (or 7:1 for AAA)
- **Motion sensitivity**: `prefers-reduced-motion` needs an intentional alternative that preserves state change and hierarchy; flag a global `0.01ms` kill that destroys useful feedback, flashing above threshold, and motion that blocks focus, reading, or task completion
- **Missing ARIA**: Interactive elements without proper roles, labels, or states
- **Keyboard navigation**: Missing focus indicators, illogical tab order, keyboard traps
- **Semantic HTML**: Improper heading hierarchy, missing landmarks, divs instead of buttons
- **Alt text**: Missing or poor image descriptions
- **Form issues**: Inputs without labels, poor error messaging, missing required indicators

**Score 0-4**: 0=Inaccessible (fails WCAG A), 1=Major gaps (few ARIA labels, no keyboard nav), 2=Partial (some a11y effort, significant gaps), 3=Good (WCAG AA mostly met, minor gaps), 4=Excellent (WCAG AA fully met, approaches AAA)

### 2. Performance

**Check for**:
- **Layout thrashing**: Reading/writing layout properties in loops
- **Expensive animations**: Casual layout-property animation, unbounded blur/filter/shadow effects, or effects that visibly drop frames
- **Missing optimization**: Images without lazy loading, unoptimized assets
- **will-change overuse**: `will-change` applied broadly or left on at rest (it is a targeted hint for known expensive animations, not a baseline requirement)
- **Bundle size**: Unnecessary imports, unused dependencies
- **Render performance**: Unnecessary re-renders, missing memoization

**Score 0-4**: 0=Severe issues (layout thrash, unoptimized everything), 1=Major problems (no lazy loading, expensive animations), 2=Partial (some optimization, gaps remain), 3=Good (mostly optimized, minor improvements possible), 4=Excellent (fast, lean, well-optimized)

### 3. Theming

**Check for**:
- **Hard-coded colors**: Colors not using design tokens
- **Broken dark mode**: Missing dark mode variants, poor contrast in dark theme
- **Inconsistent tokens**: Using wrong tokens, mixing token types
- **Theme switching issues**: Values that don't update on theme change

**Score 0-4**: 0=No theming (hard-coded everything), 1=Minimal tokens (mostly hard-coded), 2=Partial (tokens exist but inconsistently used), 3=Good (tokens used, minor hard-coded values), 4=Excellent (full token system, dark mode works perfectly)

### 4. Responsive Design

**Check for**:
- **Fixed widths**: Hard-coded widths that break on mobile
- **Touch targets**: Interactive elements < 44x44px
- **Broken touch interaction**: Custom sliders, drag surfaces, and scrollable control strips whose primary gesture fails under touch, that swallow page scroll or lose the drag to it, or that stay stuck after an interrupted gesture. Code tells: mouse-only handlers, no `touch-action` on a pointer-event drag surface, drag state that nothing clears on cancel, lost capture, or blur. Exercise the gesture when a browser tool can synthesize touch (a rendered viewport proves layout, not the gesture), then say what produced the evidence (emulated viewport, synthesized touch, which engine, physical device) and what stayed untested
- **Horizontal scroll**: Content overflow on narrow viewports
- **Text scaling**: Layouts that break when text size increases
- **Missing breakpoints**: No mobile/tablet variants

**Score 0-4**: 0=Desktop-only (breaks on mobile), 1=Major issues (some breakpoints, many failures), 2=Partial (works on mobile, rough edges), 3=Good (responsive, minor touch target or overflow issues), 4=Excellent (fluid, all viewports, proper touch targets, gestures work under touch)

### 5. Implementation Integrity: manuelle Projektfassung

Prüfe sachlich richtige Inhalte, konsistente Komponenten, funktionierende Links und Sprachwechsel, erhaltene Rechtstext-Pfade und Widersprüche zwischen Gestaltung und tatsächlicher Funktion. Kein Engine-Aufruf.

Berichte nach der lokalen SKILL.md. Nicht relevante Kriterien mit n/a, nicht ausgeführte Prüfungen als ungeprüft kennzeichnen. Scores sind Orientierung und keine Konformitätsbescheinigung.
