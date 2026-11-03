# Spiel-Datenschutzerklärung im Website-Entwurf

## Veröffentlichung freigegeben – 03.11.2026

Der Nutzer beauftragt nach Sichtung und den nachstehenden Korrekturen ausdrücklich
die Veröffentlichung der deutschen Endfassung und der englischen Übersetzung.
Freigegeben sind `datenschutz/index.html` und `site-assets/app-privacy.css` über
den bestehenden `main`-Deploy. Die historische Offline-Beschränkung unten ist
damit überholt. Die Bedingungsseite `/terms/` ist weiterhin ein Platzhalter;
keine Teilnahme- oder Nutzungsbedingungen wurden mit diesem Auftrag ergänzt.

Vor Veröffentlichung: lokale Browserprüfung beider Sprachen bei 320/390/768/1440
Pixeln und 200 % Grundschriftgröße, Linkziele und Bedienzustände geprüft;
14 Worker-Tests bestanden. Unity-Quellhash unverändert bestätigt.

## Trennung vom Website-Hosting – 03.11.2026

Auf weiteren ausdrücklichen Nutzerauftrag die veralteten GitHub-Angaben in
beiden Website-Sprachfassungen der Spiel-Erklärung entfernt: GitHub-Zeile aus
Empfängertabelle, GitHub-Bezug im Zertifizierungssatz und alter Hostingabschnitt.
Abschnitt 14 verweist jetzt auf die separate Website-Datenschutzerklärung mit
passendem DE/EN-Sprachparameter. Der Geltungsbereich in Abschnitt 2 benennt
die Android-App. Keine neuen Hosting-Zusicherungen ergänzt.
Quelle: bestehende `datenschutz-website/index.html`, insbesondere Abschnitt 2,
und dokumentierter Cloudflare-Betrieb in `docs/cloudflare-betrieb.md`.
Beide Zielseiten lokal mit HTTP 200 und vorhandenem Cloudflare-Hostingabschnitt
geprüft. Die Unity-Quelldatei unverändert. Keine Veröffentlichung.
Die unten dokumentierte Hosting-Abweichung beschreibt damit den vorherigen Stand.

## Nutzerentscheidung zur Endfassung – 03.11.2026

Der Nutzer erklärt den Text zur Endfassung und beauftragt ausdrücklich, sichtbare
Entwurfs-/Prüfungshinweise und interne Anwaltsfragen aus der Website-Fassung zu
entfernen. In Deutsch und Englisch umgesetzt. Stand 1. November 2026 bleibt als
Datum bestehen. Die bisher nur mit einer Anwaltsfrage gefüllte Tabellenzelle
für Kaufnachweise verweist auf Abschnitt 8; keine Aufbewahrungsfrist erfunden.
Keine Behauptung einer rechtlichen Prüfung ergänzt. Die Unity-Quelldatei und
ihre internen Arbeitsvermerke bleiben unverändert. Keine Veröffentlichung.
Die folgenden Angaben zur unveränderten Übernahme dieser Vermerke beschreiben
den vorherigen Bearbeitungsstand, nicht die aktuelle Website-Fassung.

Stand der Übernahme: 03.11.2026. Nur lokaler Entwurf, keine Veröffentlichung,
kein Commit und kein Push.

## Auftrag und Quelle

Der Nutzer hat ausdrücklich die Übernahme von
`C:\Unity Projects\RestaurantGame\Legal\privacy-policy\privacy-policy-de.md`
und einer englischen Fassung beauftragt. Quellstand im Dokument: 1. November 2026.
Im Quellordner wurde keine englische Markdown-Fassung gefunden; die englische
Fassung wurde für diesen Entwurf übersetzt. Das Unity-Projekt bleibt unverändert.

Die deutsche Fassung wurde inhaltlich übernommen; ausschließlich Markdown-Markierungen
in HTML umgewandelt und interne HTML-Arbeitskommentare entfernt. Sichtbare offene
Fragen und der Hinweis „Entwurf – nicht rechtlich geprüft“ bleiben in beiden
Sprachen sichtbar. Keine fehlenden Rechtsgrundlagen oder Aufbewahrungsfristen ergänzt.
Diese Übernahme ist keine Sach- oder Rechtsprüfung der App-Aussagen.

## Dateien und Vorschau

- Website-Entwurf: `datenschutz/index.html` (DE/EN mit bestehendem Sprachschalter).
- Tabellen und mobile Typografie: `site-assets/app-privacy.css`, nur für diese Seite.
- Quelle, englisches Markdown, vorherige HTML-Fassung, Quellhash und lokaler
  Aufbereitungscode: `.local-preview/app-privacy-2026-11-03/`.
- Deutsch: http://127.0.0.1:4180/datenschutz/?lang=de
- Englisch: http://127.0.0.1:4180/datenschutz/?lang=en

Website-Datenschutz unter `/datenschutz-website/`, Impressum, Löschseiten,
Löschseiten-Verlinkung unter der Spiel-Erklärung und `/terms/` unverändert.
Keine neue Analyse, kein Fremdskript und keine neue externe Einbettung eingerichtet.
Die in der Vorlage genannten URLs sind normale Links, keine geladenen Dienste.

## Bekannte offene Stelle der gelieferten Vorlage

Abschnitte 13 und 14 nennen noch GitHub/GitHub Pages als Website-Hosting.
Der dokumentierte Website-Betrieb läuft inzwischen über Cloudflare Workers
(siehe `docs/cloudflare-betrieb.md`). Diese Aussagen wurden im gelieferten
Text und in seiner Übersetzung nicht eigenständig ersetzt. Vor einer
Veröffentlichung muss diese Abweichung in der Vorlage abgestimmt werden.
Weitere ausdrücklich markierte Anwaltsfragen bleiben offen.

## Prüfung

- Gerenderter vollständiger deutscher Text stimmt nach Formatierungs- und
  Leerraumnormalisierung mit der gelieferten Markdown-Quelle überein.
- Gerenderter englischer Text stimmt mit dem erstellten Übersetzungs-Markdown überein.
- Beide Fassungen enthalten alle 19 nummerierten Abschnitte, die Zusammenfassung,
  zwei Tabellen und dieselben nummerierten offenen Fragen.
- Edge: 320, 390, 768 und 1440 Pixel, beide Sprachen und 200 % Grundschriftgröße,
  ohne horizontalen Überlauf; Sprachwechsel geprüft.
- Textlink-Hover, Druckzustand und Tastaturfokus geprüft. Nur lokale Ressourcen
  geladen; keine JavaScript-Fehler. Headerlogo bleibt ein reines Bild.
- Mobilansicht und Tabellen anhand gerenderter Screenshots visuell geprüft.
- Kein physischer Gerätetest, keine Rechtsfreigabe.

Prüfskript: `.local-preview/qa/check-app-privacy-draft.mjs`, Screenshots unter
`.local-preview/qa/app-privacy-*.png`. Ursprüngliche Überschrift für schmale
Displays mit kleinerer Schrift und Silbentrennung lesbarer dargestellt.
