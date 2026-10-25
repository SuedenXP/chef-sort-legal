# Website-Datenschutz: belegte Textkorrekturen vom 25.10.2026

Auftrag: Datenschutzerklärung prüfen und nur mit Quellen ändern. Geprüft wurde
`datenschutz-website/index.html` in Deutsch und Englisch. Keine Veröffentlichung,
kein Commit und kein Push. Die App-Erklärung unter `/datenschutz/` bleibt erhalten.

## Änderungen mit Quellen

| Stelle | Änderung | Beleg und Grenze |
| --- | --- | --- |
| Abschnitt 2, Rolle | Cloudflare als Auftragsverarbeiter für Website-Bereitstellung; eigene Verantwortlichkeit für bestimmte weitere Zwecke getrennt beschrieben. Keine unbestätigte Vertragsannahme eingefügt. | Cloudflare-DPA Abschnitt 2.3; Cloudflare Privacy Policy Abschnitt 6. |
| Abschnitt 2, Drittlandtransfer | DPF nur für davon erfasste US-Transfers; SCC und ergänzende Garantien für weitere Transfers nach DPA Abschnitt 6. | Cloudflare-DPA Abschnitte 6.1–6.4. Keine reine EU-Verarbeitung zugesichert. |
| Abschnitt 2, Aufbewahrung | Zweck und gesetzliche Pflichten als Kriterien für technische Cloudflare-Daten genannt, mit Verweis auf die Anbieterquelle. | Cloudflare Privacy Policy Abschnitt 11. Keine erfundene Tagesfrist und keine Ausdehnung unserer 13 Monate auf sämtliche Cloudflare-Daten. |
| Abschnitt 3, Sprachspeicherung | Doppelte Aussagen zu Nichtverarbeitung gekürzt; Zweck, Speicherdauer und Rechtsgrundlage bleiben bestehen. | `site-assets/language-preference.js`, `site-assets/legal-language.js`, `site-assets/language.js`, `play/play.mjs`; § 25 Abs. 2 Nr. 2 TDDDG. Nur aktive Sprachwahl schreibt in localStorage. |
| Abschnitt 5, Gmail | Direkte Quelle zu internationalen Übermittlungen ergänzt, statt nur auf Googles allgemeine Erklärung zu verweisen. | Googles Rahmenbedingungen für Datenübermittlungen. Keine unbelegte Aussage über den Kontotyp oder einen Google-AVV ergänzt. |
| Abschnitt 7, Widerspruch | Eigenständiger, hervorgehobener Hinweis auf Widerspruch aus der besonderen Situation und bedingte Fortsetzung der Verarbeitung. | Art. 21 Abs. 1 und 4 DSGVO. |
| Abschnitt 7, Rechte | Für die beschriebenen Funktionen entbehrliche pauschale Aussage zum Einwilligungswiderruf entfernt; bedingte Datenübertragbarkeit bleibt. | Art. 7 Abs. 3 und Art. 20 DSGVO; geprüfte Website-Funktionen. |
| Abschnitt 7, Aufsichtsbehörde | Deutsche Amtsbezeichnung an aktuelle offizielle Bezeichnung angepasst. Anschrift unverändert bestätigt. | Offizielle Bremer Behördenangaben und Impressum der Aufsichtsbehörde. Kein Personenname ergänzt. |

Die Änderungen sind in beiden Sprachfassungen inhaltlich gleich. Es wurden keine
Textbausteine fremder Websites übernommen. Beispielerklärungen dienten dem Vergleich,
nicht als Rechtsgrundlage.

## Prüfung der übrigen Abschnitte

- Verantwortlicher/Kontaktdaten: bestehende Nutzerangaben übernommen, kein neuer
  unabhängiger Identitäts- oder Adressnachweis behauptet.
- Browserdemo: Quelltextabgleich der JavaScript-Module. Als dauerhafte lokale
  Speicherung wurde die Sprachwahl gefunden. Keine neue Funktion eingerichtet.
- Statistik: `worker.mjs` speichert Tagesdatum, Art, Ressourcenpfad und Summe in
  D1, ohne Besucher-ID. DNT/GPC und grobe Bot-/Prefetch-Filter sind implementiert.
  `wrangler.jsonc` deaktiviert Observability und definiert einen täglichen Cronlauf;
  der Code löscht Zähler älter als 13 Monate. Konfiguration und Code sind Belege
  für die vorgesehene Umsetzung, kein aktueller Kontoexport oder Nachweis jedes
  erfolgreichen Löschlaufs.
- Externe Angebote: Website-Code enthält normale Links; Demo-/Sprachmodule wurden
  auf Speicher und aktive Netzwerkübermittlung geprüft. Keine neuen Einbettungen.
- Briefvorlage: Downloadzählung ist Teil des lokalen Entwurfs. Die Erklärung
  beschreibt diese vorbereitete Fassung; die Veröffentlichung steht noch aus.
- Sechs Monate für Kontaktkorrespondenz: im früheren Prüfvermerk vom 21.10.2026 als
  vom Nutzer bestätigte Aufbewahrungsregel dokumentiert. Deshalb beibehalten.
  Das ist eine betriebliche Regel, keine gesetzlich vorgegebene Sechsmonatsfrist.
  Ihre tatsächliche laufende Einhaltung wurde in diesem Durchgang nicht beobachtet.

## Offene Nachweise, nicht als Tatsache ergänzt

- Aktuelle Cloudflare-Kontoeinstellungen, DPA-Vertragsnachweis sowie tatsächlich
  aktive Sicherheitsfunktionen/Cookies sind nicht unabhängig geprüft. Die
  bestehende Cookie-Aussage bleibt als Möglichkeit formuliert; konkrete Namen
  und Laufzeiten wurden ohne Nachweis des Einsatzes nicht ergänzt.
- Google-Kontotyp und vertragliche Voraussetzungen des betrieblichen Gmail-Einsatzes
  sind nicht nachgewiesen. Ein Anbieterlink ersetzt diese Prüfung nicht.
- Eine dokumentierte Interessenabwägung für Hosting und eigene Statistik wurde
  in diesem Durchgang nicht nachgewiesen. Die vorhandene Rechtsgrundlagenangabe
  ist keine automatische rechtliche Freigabe.
- Keine verbindliche Rechtsprüfung und keine pauschale Zusicherung vollständiger
  DSGVO-Konformität.

## Offizielle Quellen, am 25.10.2026 abgerufen

1. Cloudflare Data Processing Addendum, Version 6.4, Abschnitte 2 und 6:
   https://www.cloudflare.com/cloudflare-customer-dpa/
2. Cloudflare Privacy Policy, Abschnitte 6 und 11:
   https://www.cloudflare.com/privacypolicy/
3. Cloudflare-Cookies nach jeweiliger Funktion:
   https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/
4. Google, Rahmenbedingungen für Datenübermittlungen:
   https://policies.google.com/privacy/frameworks?hl=de
5. DSGVO, Art. 7, 13, 20 und 21, EUR-Lex:
   https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=CELEX%3A32016R0679
6. § 25 TDDDG:
   https://www.gesetze-im-internet.de/ttdsg/__25.html
7. Bremer Aufsichtsbehörde, offizielle Bezeichnung und Anschrift:
   https://www.service.bremen.de/visitenkarte/der-landesbeauftragte-fuer-datenschutz-und-informationsfreiheit-10947
   https://www.datenschutz.bremen.de/impressum-1478

Lokale Belege: `worker.mjs`, `wrangler.jsonc`, Sprachmodule und Demo unter `play/`,
`docs/website-datenschutz-pruefvermerk-2026-10-21.md`, `docs/cloudflare-betrieb.md`.
