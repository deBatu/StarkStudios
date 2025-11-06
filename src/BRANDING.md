# Stark Studio Brand Guide

## Signature Typefaces
- **Unbounded** (500/600/700) – ausschliesslich fuer Logo, Headlines, Hero-Tagline und Pakettitel.
- **Poppins** (300/400/500/600/700) – Fliesstext, Buttons, Formulare, Navigation, Labels.
- Kombination: Headlines in Unbounded, Fliesstext und Button-Labels in Poppins (keine Vollversalien bei Buttons).

## Primäre Farben (Standard Theme)
- Hintergrund dunkel: `#12142c` bis `#0b0d1f`
- Glow Akzent Blau: `rgba(140, 119, 255, 0.22)`
- Glow Akzent Cyan: `rgba(66, 139, 255, 0.18)`
- Primärer Akzent: `#7f5bff`
- Primärer Akzent Hell: `#a68bff`
- Highlight Support: `#3be8b0`
- Grundtext: `#eef1ff`
- Muted Text: `#a9b4d6`

### Theme Ember (warm)
- Hintergrund dunkel: `#180b15` bis `#2a1b24`
- Glow Akzent Coral: `rgba(255, 148, 122, 0.18)`
- Glow Akzent Rot: `rgba(255, 107, 107, 0.2)`
- Primärer Akzent: `#ff6b6b`
- Primärer Akzent Hell: `#ff8c8c`
- Support: `#ffd166`

### Theme Boreal (frisch)
- Hintergrund dunkel: `#081921` bis `#10252c`
- Glow Akzent Blau: `rgba(55, 200, 255, 0.22)`
- Glow Akzent Mint: `rgba(123, 255, 181, 0.18)`
- Primärer Akzent: `#37c8ff`
- Primärer Akzent Hell: `#7ae4ff`
- Support: `#7bffb5`

## Theme-Wechsel
- Theme-Selector links unten aktivieren oder per Body-Klasse `theme-ember` / `theme-boreal` setzen.
- Pro Seite immer nur ein Theme verwenden, keine Mischungen.

## Buttons & CTA
- Primär-CTA: Verlauf `linear-gradient(145deg, #a68bff, #cdb1ff)`, Text `#060614`.
- Hover: `transform: translateY(-3px) scale(1.02)` und Schatten `0 34px 62px rgba(124, 90, 255, 0.58)`.
- Active: `transform: translateY(-1px)` mit Schatten `0 18px 45px rgba(124, 90, 255, 0.45)`.
- Sekundär: transparente Buttons mit Border `rgba(255,255,255,0.22)`; Outline-Variante mit Hintergrund `rgba(127, 91, 255, 0.12)` und Border `2px solid var(--accent)`.

## Karten & Badges
- Chips/Icons (z. B. im Hero) nutzen Poppins `0.85rem`, Hintergrund `rgba(255,255,255,0.08)`.
- Paket-Punkte als kurze Nutzen-Stichpunkte; Standard-Paket erhält Badge „Bestseller“ (oben rechts, Badge-Farbe `rgba(127, 91, 255, 0.18)`).

## Formularrichtlinien
- Felder: Name, Email, Projektinfo (Textarea).
- Pflicht-Checkbox mit Datenschutzhinweis und Verlinkung auf Datenschutzerklaerung.
- Nach dem Absenden erscheint immer die Rückmeldung „Danke! Wir melden uns innerhalb von 24 Stunden.“; das Formular wird geleert.
- Placeholder und Labels verwenden Poppins und `var(--text-muted)`.
