---
name: brainblooms-impeccable-review
description: BrainBlooms-Entwürfe oder Website-Änderungen manuell auf Verständlichkeit, Hierarchie, Zugänglichkeit und mobile Qualität prüfen; auf Basis ausgewählter Impeccable-Rubriken.
---

# Manuelle Design- und Qualitätsprüfung

Geänderte Projektfassung vom 16.10.2026, abgeleitet aus pbakaus/impeccable 4.6.0,
Revision `6af45ac9a5eb8792f033d3242f52e99812fd91fa` (Apache-2.0, Copyright 2025 Paul Bakaus).
Der Einstieg ersetzt den Original-Skill. `references/critique.md` ist ein gekennzeichneter
Auszug; `references/audit.md` ist eine gekennzeichnete Bearbeitung. LICENSE und NOTICE.md erhalten.
Engine, Launcher, Hooks, Browser-Injektion, automatische Speicherung und Agenten-Orchestrierung
sind bewusst nicht installiert. Dies ist kein vollständiger Original-Impeccable-Lauf.

Lies `AGENTS.md`, den vereinbarten Zweck und den konkreten Prüfgegenstand. Ändere bei einer
Kritik keine Website-Dateien. Unterscheide Designurteil, Quellcode-Befund und beobachtetes
Browser-Verhalten. Ohne gerenderten Entwurf keine visuellen Prüfungen behaupten.

- Für Verständlichkeit, Hierarchie, Navigation und Nutzungsszenarien lies
  [critique.md](references/critique.md). Wähle zur echten Zielgruppe passende Perspektiven;
  erfinde keine Zielgruppendaten. Nicht passende Heuristiken mit n/a ausweisen.
- Für technische Qualität lies [audit.md](references/audit.md): Semantik, Tastaturbedienung,
  Fokus, Kontrast, reduzierte Bewegung, Ladeaufwand, responsive Darstellung und Integrität.
  Dark Mode oder ein Framework sind nur zu bewerten, wenn sie zum Auftrag gehören.

Bei einer später beauftragten Browser-Prüfung Desktop und schmale Ansicht, Sprachwechsel,
Rechtstext-Links, Tastaturfokus und Textvergrößerung prüfen. Emulation von einem echten Gerätetest
unterscheiden. Fehlende Browser-Werkzeuge offen nennen; nichts automatisch installieren.

Berichte die wichtigsten P0–P3-Befunde mit Fundort, Nutzerwirkung und konkretem Vorschlag.
Nenne auch funktionierende Elemente und Prüfgrenzen. Beginne mit
„Methode: manuelle Projektprüfung; ohne Impeccable-Engine und unabhängige Zweitprüfung.“
Keine automatische WCAG-Konformität, Sicherheitsfreigabe oder Rechtsprüfung behaupten.
Die nächste Korrektur wird als klar begrenzter Auftrag vereinbart, nicht automatisch ausgeführt.
