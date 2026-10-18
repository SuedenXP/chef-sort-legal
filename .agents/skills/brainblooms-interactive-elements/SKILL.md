---
name: brainblooms-interactive-elements
description: Buttons, Links, Bildpfeile, Sprachschalter und Formulare in BrainBlooms umsetzen oder auf vollständige Bedienzustände prüfen. Bei neuen oder geänderten bedienbaren Website-Elementen anwenden.
---

# Bedienbare Elemente vollständig gestalten

Projekt-Skill aus dem Nutzerauftrag vom 18.10.2026: Jeder aktiv bedienbare Button braucht einen sichtbaren Hover-Zustand. Auch Links, die wie Buttons aussehen, gehören dazu. Vor Änderungen AGENTS.md und die tatsächlich geladenen Stylesheets lesen; lokale Entwurfsquelle und veröffentlichbare Dateien synchron halten. Bestehende Freigabegrenzen beachten.

## Erforderliche Zustände

| Zustand | Anforderung |
| --- | --- |
| Normal | Erkennbar bedienbar, lesbarer Aktionsname, ausreichender Kontrast. Icons ohne sichtbaren Text brauchen einen zugänglichen Namen; dekorative Icons vor Screenreadern verbergen. |
| Hover | Jeder aktive Button zeigt eine sichtbare Änderung an Fläche, Rahmen oder Unterstreichung. Nicht nur den Mauszeiger ändern oder ein winziges Icon bewegen. Auch ausgewählte Sprachschalter und Galeriepunkte berücksichtigen; ihre Auswahl muss erkennbar bleiben. Hover in `@media (hover: hover) and (pointer: fine)` begrenzen. |
| Tastaturfokus | Sofort sichtbarer `:focus-visible`-Rahmen mit Abstand und Kontrast zum tatsächlichen Hintergrund. Nicht durch Hover, Schatten, overflow oder Dialogränder verdecken. Fokus niemals ersatzlos entfernen. |
| Gedrückt | Unmittelbares sichtbares Feedback über `:active` oder vorhandenen Pointer-Zustand, auch auf Touchscreens. Bei gleichzeitigem Hover bleibt der gedrückte Zustand unterscheidbar. Keine Funktion erst nach einer Animation auslösen. |
| Ausgewählt, falls vorhanden | Sichtbaren Zustand und passende native Semantik bzw. `aria-pressed`, `aria-expanded` oder `aria-current` synchron halten. Auswahl ist kein Hover-Ersatz. |
| Deaktiviert, falls benötigt | Native `disabled`-Semantik bevorzugen; keine aktiven Hover-/Druckeffekte. `aria-disabled` verhindert die Aktion nicht selbst. Eine nötige Erklärung lesbar anbieten. |
| Laden, Fehler, Erfolg, falls vorhanden | Rückmeldung bei der Aktion anzeigen und bei Bedarf zugänglich ankündigen. Doppelauslösung während laufender Vorgänge verhindern; Fehler nicht allein durch Farbe darstellen. Keine künstlichen Ladezustände für einfache Sprunglinks. |

## Bedienung und Darstellung

- Navigation mit `<a href>`, Aktionen mit `<button type="button">`, Formularabsenden mit `type="submit"`. Native Tastaturbedienung erhalten: Tab und Enter, bei Buttons auch Leertaste. Keine klickbaren Divs als Ersatz.
- Zielgröße im Projekt mindestens 44 × 44 CSS-Pixel, mit Abstand zu Nachbarzielen. Beschriftungen müssen auf schmalen Ansichten, in Deutsch/Englisch und bei Textvergrößerung passen.
- Für normale Schrift mindestens 4,5:1, für große Schrift mindestens 3:1 Textkontrast anstreben und prüfen; notwendige Steuerungsgrenzen/Fokusindikatoren mit mindestens 3:1 gegen angrenzende Flächen prüfen. Ein farblicher Effekt darf Text nicht unlesbar machen.
- Hover enthält keine exklusiven Informationen oder Funktionen. Auf Touch bleibt alles erreichbar; ein Tippen löst die Aktion aus. Bei Dialogen Escape, Fokusbegrenzung und Rückkehr des Fokus prüfen.
- Statisches Farb-/Rahmenfeedback ist ausreichend. Bewegung nur gezielt mit `animate` umsetzen und mit `review-animations` prüfen. Bestehende Tokens verwenden, keine `transition: all`; `prefers-reduced-motion` erhält sichtbares Feedback ohne zusätzliche Bewegung. Tastaturfokus erscheint ohne Verzögerung.
- Keine neuen Bibliotheken, externen Assets, Einbettungen oder Dienste für Zustandsfeedback einführen. Rechtstextseiten und Zugangsdaten nur im konkret beauftragten Umfang bearbeiten.

## Prüfen, bevor die Änderung fertig ist

1. Alle betroffenen Elementfamilien erfassen, einschließlich Vorschauformular, ausgewählter Sprachbuttons, Galeriepunkte, Pfeile und Dialog-Schließen. Vorhandene CSS-Spezifität und spätere Überschreibungen prüfen; eine vorhandene `:hover`-Regel beweist keine sichtbare Änderung.
2. Im vorhandenen Browser Normalzustand mit echtem Maus-Hover, Hover plus gedrückt und Tastaturfokus vergleichen. Ausgewählte und deaktivierte Varianten mitprüfen. CSS-Quelltext und beobachtetes Verhalten getrennt benennen.
3. Schmale Touch-Ansicht, beide Sprachen und reduzierte Bewegung prüfen; bei Größen-/Abstandsänderungen zusätzlich Textvergrößerung. Keine neuen Browserpakete automatisch installieren.
4. Normale Links auf sinnvolle Ziele prüfen. Nutzerlinks unverfälscht übernehmen; Kurzlinks nicht ohne belegtes Ziel als Profil bezeichnen. Keine Inhalte einbetten.
5. Geänderte CSS-Versionen in der Startseite aktualisieren, damit Browser keine alten Zustände aus dem Cache zeigen. Prüfung und verbleibende Grenzen knapp berichten; Veröffentlichung nur innerhalb des vorhandenen Auftrags.

Fehlt ein Browserwerkzeug, die Änderung nur als Quellcodeprüfung ausweisen. Kein visueller Test, Gerätecheck oder vollständige Barrierefreiheitskonformität behaupten.
