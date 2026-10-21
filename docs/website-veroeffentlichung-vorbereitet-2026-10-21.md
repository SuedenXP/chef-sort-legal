# Öffentlicher Website-Start: Vorbereitung

Stand: 21. Oktober 2026. Vorbereitet, nicht veröffentlicht.

- Datenschutzerklärung der Website in Deutsch/Englisch abgeschlossen: `datenschutzerklaerung-website-entwurf-de-en.md`; HTML im lokalen Entwurf unter `/datenschutz-website/`. Login-Abschnitt für die spätere öffentliche Fassung entfernt, Browserdemo aufgenommen, Sprachspeicherung konkret beschrieben, telefonische Kontaktaufnahme ergänzt.
- Eigener Website-Pfad vermeidet die Ersetzung der bestehenden App-Datenschutzadresse `/datenschutz/`. Löschseiten behalten ihren bisherigen App-Bezug. Unity-Dateien wurden nicht gelesen oder geändert.
- Impressum laut Nutzer vollständig. Keine zusätzlichen Unternehmensangaben gefordert oder erfunden. Pinterest auf ausdrücklichen Wunsch unverändert; die frühere dokumentierte Abweichung von den Markenrichtlinien wird damit nicht als behoben behauptet.
- Links zu den leeren Nutzungsbedingungen entfernt. Historischer Pfad `/terms/` bleibt als Weiterleitung zur Startseite bestehen.
- Start-Build unter `.local-preview/release-public/` enthält Website und Demo ohne Login, mit lokalen Bildern/Schriften/Skripten, aktuellem Impressum und Website-Datenschutz. Kein `noindex` auf den vier aktiven Website-Seiten; kanonische URLs gesetzt. `CNAME` erhalten. Der normale geschützte Export und der neue Start-Build sind getrennt.
- Kein Push, kein Deployment; öffentliches HTML und öffentliche Assets wurden durch die Vorbereitung nicht geändert.

## Sachliche Grundlage der redaktionellen Datenschutz-Änderungen

Der Demo-Quelltext verarbeitet Spielzustand, Züge und Timer im Arbeitsspeicher; die einzige dauerhafte Speicherung in `play.mjs` betrifft die bewusst gewählte Sprache. Die frühere Quellenprüfung des übrigen Website-Codes bleibt Grundlage der Erklärung. Keine Nutzungsanalyse oder neue Verarbeitung eingerichtet.

Die Speicherung einer ausdrücklich geänderten Sprache wird in den [FAQ der Datenschutzaufsicht Baden-Württemberg](https://www.baden-wuerttemberg.datenschutz.de/faq-zu-cookies-und-tracking-2/) als Beispiel für erforderliche Einstellungen genannt. Die finale Formulierung bezieht sich ausschließlich auf den geprüften Schlüssel `chef-sort-language` mit `de`/`en`, nicht auf beliebige Speicherungen. Rechtsgrundlage für die begrenzte Endeinrichtungs-Speicherung: [§ 25 Abs. 2 Nr. 2 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html). Die FAQ verwendet teilweise noch den früheren Gesetzesnamen TTDSG.

Hosting-Angaben: [GitHub Pages, Datenerhebung](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) und [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Keine erfundene Aufbewahrungsfrist für GitHub-Protokolle.

## Prüfung

Methode: manuelle Projektprüfung; ohne Impeccable-Engine und unabhängige Zweitprüfung.

Edge-Browseremulation der exportierten Fassung: Impressum und Website-Datenschutz bei 320/390/768/1440 CSS-Pixeln, DE/EN und 200 % Text bestanden. Sprachwechsel mit gesperrtem Browserspeicher, deutscher Fallback ohne JavaScript und sichtbarer Tastaturfokus bestanden. Keine JavaScript-Fehler oder HTTP-Fehler in diesen Abläufen.

Startseite und Demo bei 320/390/1440: ohne Anmeldung erreichbar, Bilder dekodiert, Sprachwechsel DE/EN, keine Terms-Links und keine horizontalen Überläufe. Ohne manuelle Sprachwahl kein Eintrag in localStorage/sessionStorage. Keine externen Ressourcenanfragen in diesen Szenarien. Historische `/terms/`-Adresse führt zur Startseite. Browserprüfung ohne physischen Gerätetest; keine umfassende rechtliche Freigabe.

Bestehender vollständiger Demo-Test gegen die Startfassung bestanden: 320/390/768/1440 Pixel, Deutsch/Englisch, Bildladung, 37 Züge bis zum gewonnenen Level, Zeitablauf, belegtes Brett, Tastaturbedienung und reduzierte Bewegung. Spielregeln und Brett wurden nicht geändert. Der lokale Entwurfsserver wurde gezielt neu geladen; `/datenschutz-website/` ist auch unter http://127.0.0.1:4173 erreichbar.
