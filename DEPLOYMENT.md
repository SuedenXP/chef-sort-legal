# Website-Betrieb und Veröffentlichung

## Datenschutzerklärungen im Footer – 31.10.2026

Auf ausdrücklichen Nutzerauftrag werden im Footer zwei getrennte Links angeboten:
„Datenschutzerklärung Website“ und „Datenschutzerklärung Spiel“
(EN: „Website privacy“ und „Game privacy“). Sie führen auf
`/datenschutz-website/?lang=de` beziehungsweise `/datenschutz/?lang=de`;
bei englischer Seitensprache erhalten die Ziele `?lang=en`.
Auch der Impressumslink übernimmt die gewählte Sprache. Die vorhandenen
Rechtstextseiten werten den Sprachparameter bereits aus.

Vor Veröffentlichung: beide Datenschutzlinks in DE/EN im lokalen Edge geöffnet,
einschließlich gesperrtem Browserspeicher und widersprechender gespeicherter Sprache.
390/1440 Pixel, 200 Prozent Schriftgröße sowie Hover, Druckfeedback und
Tastaturfokus erfolgreich geprüft; 14 bestehende Worker-Tests bestanden.
Die Veröffentlichung nutzt den bestehenden `main`-Deploy auf Cloudflare.

## Aktueller Stand: Weihnachtsbriefe und Entwurfsabgleich – 31.10.2026

PR [#3](https://github.com/SuedenXP/chef-sort-legal/pull/3) veröffentlichte
Banner, drei einseitige PDFs, getrennte Downloadanfragen-Zählung und die
Datenschutzerklärung DE/EN. Der Nutzer meldete danach eine Abweichung zwischen
Entwurf und Website: Weihnachtsfarben, Karten-Innenlayout, Stern, Umschlagsprite,
Tanne und Animation waren vom lokalen Server nachträglich eingefügt worden.
PR [#4](https://github.com/SuedenXP/chef-sort-legal/pull/4) übernahm diese
Gestaltung in die versionierten öffentlichen Dateien und synchronisierte die
Offline-Vorschau. Der Banner bleibt gemäß Nutzerentscheidung aktiv.

Produktionscommit der visuellen Korrektur:
`4f6df30d4ce6a463dafc600c50d9fdfe2ff873f6`. GitHub-Workercheck erfolgreich;
14 Worker-Tests bestanden. Live-Browserprüfung bei 320/390/768/1440 px in DE/EN,
mit 200-%-Text, Banner-Sprung, drei Downloads sowie Hover-, Druck- und
Fokuszuständen bestanden. Live-HTML, Datenschutzhinweis, Downloadantworten und
CSS-/PNG-/JS-Assets wurden mit erfolgreichen Antworten geprüft. Kontrollabrufe
verwendeten DNT=1 beziehungsweise HEAD und sollten die Zähler nicht erhöhen.

Details: [Weihnachtsbrief-Download](docs/briefvorlage-download.md) und
[Cloudflare-Betrieb](docs/cloudflare-betrieb.md).

## PDF-Briefvorlage und temporärer Banner – 25.10.2026

**Nur lokaler Offline-Entwurf auf Nutzerwunsch; nicht veröffentlicht.**
Aufruf über `.local-preview/Briefvorlage ansehen.cmd`, lokale Adresse
`http://127.0.0.1:4180/`. Öffentliche Website bleibt unverändert.

Nutzer stellt seine gewählte deutsche Weihnachtsbrief-PDF als Download bereit.
Unveränderte Webkopie unter `site-assets/downloads/brief-an-den-weihnachtsmann.pdf`,
zwei Seiten, 1.305.145 Bytes. Temporärer goldener Banner oberhalb der Kopfzeile,
dauerhafter Downloadbereich bei den Malbüchern; beide Links führen zur selben
Datei. Deutsch/Englisch kennzeichnen die PDF als deutschsprachig.

`site.config.json` -> `christmasLetterBanner: false` entfernt beim nächsten
öffentlichen Build ausschließlich den Banner. `scripts/build-public.mjs`
erstellt die öffentliche Fassung; Wrangler führt diesen Build und die
Worker-Tests vor der Veröffentlichung aus. Bisheriger Dashboard-Kopierbefehl
kann bleiben. PDF-Header erzwingt einen Dateidownload; vorhandene D1-Statistik
zählt erfolgreiche Dateianfragen getrennt als `download_request`.
Website-Datenschutzhinweis für diese Zählung in DE/EN gezielt aktualisiert.

Herkunft, Abschaltung, SQL-Auswertung und Prüfung:
[docs/briefvorlage-download.md](docs/briefvorlage-download.md).

## Cloudflare-Hosting und Statistik – 24.10.2026

Die öffentliche Website wurde auf Nutzerauftrag von GitHub Pages zu
**Cloudflare Workers mit Static Assets** umgezogen. Beide Domains sind am
Worker `brainblooms` angebunden, DNS wird über Cloudflare verwaltet, Domain
und vorhandene Domain-Maildienste bleiben bei IONOS. Free-Tarif, keine
kostenpflichtige Zusatzbuchung. GitHub Pages wurde als Altbestand nicht deaktiviert.

Die cookie-freie eigene Aufrufstatistik schreibt Tageszähler in D1
(`brainblooms-stats`, `daily_stats`). Keine eindeutigen Besucher, keine eigenen
aktuellen Downloads, kein externer Klick-/Installationszähler.
Nutzer-Screenshot bestätigt am 24.10.2026 die Zeile `/ = 8`.
Website-Datenschutz wurde in den Hosting-/Statistikabschnitten DE/EN aktualisiert.

PR [#2](https://github.com/SuedenXP/chef-sort-legal/pull/2) wurde übernommen;
Produktionscommit `b091ec8d34cf906e5b583148ae6f947f91c8c7b5`.
9 echte Node-Tests, Wrangler-Dry-Run, Branch-Preview und Produktionsbuild
erfolgreich. Vorschauen haben keine D1-Bindung und zählen keine Aufrufe.

**Aktueller vollständiger Betrieb:** [Cloudflare-Einstellungen und Umzugsprotokoll](docs/cloudflare-betrieb.md).
**Auswertung und Technik:** [Tagesstatistik](docs/cloudflare-statistics.md).
Die folgenden älteren Einträge beschreiben frühere Veröffentlichungsstände;
ihre GitHub-Pages-/Vorschauangaben sind keine aktuelle Hostinganleitung.

## Öffentlicher Website-Start – 22.10.2026

Auf ausdrücklichen Nutzerauftrag wird die geprüfte Startfassung unter brainblooms.de veröffentlicht: ohne Vorschau-Anmeldung, mit eigenständiger Website-Datenschutzerklärung unter `/datenschutz-website/`, gekürztem Anbieterblock im Impressum, neuen Spielbildern DE/EN und überlagertem Demnächst-Banner am Google-Play-Badge. Das Badge hat weiterhin keinen Download-Link. Die bisherige App-Datenschutzseite bleibt inhaltlich erhalten; die leere Nutzungsbedingungen-Seite wird durch eine Weiterleitung zur Startseite ersetzt.

Vor Upload bestanden: Browserprüfung bei 320/390/768/1440 Pixeln, DE/EN, Rechtsseiten mit 200 Prozent Schriftgröße und Tastaturbedienung, sechs Fächermotive mit Großansichten und automatischem Umlauf, Badge-Banner ohne Link sowie komplette Demo-Gewinnrunde, Zeitablauf, Platzmangel und Tastaturspiel. Kein physischer Gerätetest oder vollständiger Rechts-/WCAG-Audit. Neue Webbilder sind proportional verkleinerte Kopien eigener Nutzerdateien; Originale und lokale Prüfprofile bleiben ausgeschlossen. Keine zusätzlichen Dienste oder Kosten.

## Öffentlichen Website-Start vorbereitet – 21.10.2026

Aktueller Nutzerauftrag: Website-Datenschutz abschließen, leere Nutzungsbedingungen aus der Navigation nehmen und die Veröffentlichung vorbereiten. Impressum ist vom Nutzer als vollständig bestätigt; Pinterest bleibt ausdrücklich unverändert. Noch kein Push oder öffentlicher Start.

Die eigenständige Website-Erklärung liegt unter `/datenschutz-website/`, Textquelle `docs/datenschutzerklaerung-website-entwurf-de-en.md`. Sie beschreibt GitHub Pages, die ausschließlich manuell gespeicherte Sprache, die flüchtige Browserdemo, Kontakt und Betroffenenrechte. Die bisherigen App-Verweise unter `/datenschutz/` bleiben erhalten; die mobile App ist nicht Gegenstand der Website-Erklärung. Leere `/terms/`-Verweise sind entfernt; die historische Adresse führt in der vorbereiteten Fassung zur Startseite.

Lokaler vollständiger Start-Build: `node .local-preview/qa/export-public.mjs --prepare-launch`. Ziel: `.local-preview/release-public/` (von Git ausgeschlossen). Dieser Modus exportiert auch Impressum und Website-Datenschutz, entfernt den Login aus Startseite und Demo sowie dessen zwei Dateien aus dem Build und setzt kanonische URLs. Die Suchmaschinensperre entfällt auf Startseite, Demo, Impressum und Website-Datenschutz. Die geschützte aktuelle öffentliche Fassung wird dabei nicht verändert; der normale Export ohne Flag bleibt separat.

Prüfansicht nach Start von `node .local-preview/qa/release-server.mjs`: http://127.0.0.1:4180 . Der Prüfserver sendet nur lokal `X-Robots-Tag: noindex, nofollow`; dieser Serverheader wird nicht mit veröffentlicht.

Erst bei ausdrücklichem Veröffentlichungsauftrag den geprüften Build in die bestehenden Website-Pfade übernehmen, Unterschiede kontrollieren und über das vorhandene GitHub-Pages-Repository veröffentlichen. `.local-preview/`, Originalbilder und Prüfdaten nicht hochladen. Keine neuen Dienste oder Kosten.

## Einzelner Play-Button und YouTube-Fächer – 19.10.2026

Auf Nutzerauftrag wird der abgenommene Entwurf veröffentlicht: „Level ausprobieren“ / „Try a level“ führt als einziger Hero-Button im bisherigen grünen Entdecken-Design zu `/play/`. Das Play-Symbol zeigt nach rechts. Der bisherige zusätzliche Play-Button entfällt.

Der YouTube-Bereich zeigt das vorhandene Bild und drei neue eigene Vorschaubilder als Fächer. Vier auswählbare Punkte zeigen das aktuelle Bild; der aktive breite Balken füllt sich über vier Sekunden bis zum automatischen Wechsel. Pause außerhalb des sichtbaren Bereichs, bei Hover, Tastaturfokus, Touch, verborgenem Dokument oder offenem Dialog. Bei reduzierter Bewegung kein automatischer Wechsel und statischer Auswahlbalken. Pfeile und Punkte bleiben bedienbar. Der vorhandene YouTube-Beispielvideo-Link bleibt unverändert; keine Einbettung und kein Video-Autoplay. Neue Bilder liegen als JPEG in 640 und 1280 Pixeln Breite vor; Originale bleiben lokal.

Die exportierte Fassung wurde vor Upload in Edge bei 320/390/768/1440 Pixeln, DE/EN, 200 Prozent Text, mit Anmeldung, Pfeil-/Punktwahl, Fortschrittsfüllung und Pause/Fortsetzung geprüft. Play-Link samt Übernahme der Anmeldung, Hover, Druck, Tastatur und reduzierte Bewegung geprüft. Bestehende externe Links, Löschlinks, Vorschau-Zugangsdaten, CNAME und Rechtstextseiten unverändert verglichen. Keine physische Handyprüfung oder vollständige WCAG-Prüfung. Neue Dateien: `site-assets/youtube-fan.css`, `site-assets/youtube-fan.js` und acht JPEG-Webversionen unter `site-assets/images/youtube-*`. Keine neuen Dienste oder Kosten.

## Konto- und Datenlöschseiten – 19.10.2026

Auf ausdrücklichen Folgeauftrag des Nutzers werden `/daten-loeschen/` und `/delete-data/` veröffentlicht. Der Nutzer beauftragt die Veröffentlichung nach Rückfrage auch ohne bestätigte Anwaltsfreigabe. Dies ist keine dokumentierte Rechtsfreigabe. Die vorhandene Vorschau-Anmeldung der Startseite bleibt bestehen; die Löschseiten sind wie die übrigen Rechtsseiten direkt ohne Anmeldung erreichbar.

Die Seiten zeigen den Löschweg im Spiel in einer hervorgehobenen Box und danach die E-Mail-Alternative. Zur Kontozuordnung wird eine zehnstellige Spieler-ID oder Google-Play-Bestellnummer benötigt. Löschumfang und Fristen werden ausschließlich über die bestehende Datenschutzerklärung verlinkt. Deren Artikel bleibt unverändert; ergänzt wird ein gesonderter Link zu den Löschseiten. Der Sprachparameter `?lang=de/en` wird von `site-assets/legal-language.js` ausgewertet. Footer-Verweise sind in beiden Sprachen ergänzt. Keine neuen Dienste oder externen Ressourcen.

Gezielter Export: `.local-preview/qa/publish-deletion-pages.mjs`; spätere Startseitenexporte erhalten bereits veröffentlichte Löschlinks. Exportierte Dateifassung in Edge bei 320/390/768/1440 Pixeln in DE/EN geprüft, einschließlich 200 Prozent Text, E-Mail-Betreff, Sprach-/Datenschutzlinks, ohne JavaScript und Hover-/Druck-/Fokuszuständen. Bestehender Datenschutzartikel, CNAME, Impressum, Terms und Vorschau-Anmeldung unverändert geprüft. Kein physischer Handytest und keine Rechtsfreigabe.

## Spielbares Level 7 unter /play/ – 19.10.2026

Ausdrücklicher Nutzerauftrag: abgenommenen Chef-Sort-Prototyp veröffentlichen und Spielbilder sinnvoll verkleinern. Veröffentlichung über das vorhandene GitHub-Pages-Repository; keine zusätzlichen Dienste oder Kosten. „Level ausprobieren“ / „Try a level“ steht als zweiter Hero-Button neben „Das Spiel entdecken“, auf schmalen Displays darunter. Die bisherige Anmeldung bleibt erhalten und wird beim Seitenwechsel im selben Tab übernommen.

Öffentliche Dateien: `play/index.html`, `play/play.css`, `play/play.mjs`, `play/rules.mjs`, `play/level-07.mjs`, 18 Item-WebPs und zwei Regal-PNGs unter `play/img/`. Gemeinsame CSS-, Sprach-, Icon- und Gate-Dateien aus `../site-assets/`. `noindex, nofollow` auch auf der Demo. Kein zusätzliches Speichern oder externe Ressourcen. Die nur lokal verfügbare QA-Schnittstelle wird auf brainblooms.de nicht eingerichtet.

Export: `.local-preview/qa/export-public.mjs` exportiert jetzt auch `/play/`, schreibt gemeinsame Pfade um und versieht direkte CSS-/JS-/MJS-Verweise mit Inhaltsversionen. Das alte versteckte `#preview-lock`-Hilfselement wird beim Export entfernt; die veröffentlichte Gate-Datei benötigt es nicht. Bei späterer Entfernung der Sperre auch `play/index.html` berücksichtigen. Originale, PNG-Ausgangskopien, Export-/Prüfskripte und Browserprofile bleiben lokal und von Git ausgeschlossen.

Bildoptimierung: 18 Items mit browserinternem WebP-Encoder auf höchster Qualität, weiterhin 256 × 512 Pixel, Transparenz pixelgenau erhalten. Item-Dateien 2.910.454 → 2.061.510 Bytes; einschließlich unveränderter Regal-PNGs 2.945.746 → 2.096.802 Bytes (28,8 % weniger). Kein neuer Zuschnitt oder neues Motiv. Herkunft unverändert, Nachweise lokal in `qa/play-images.json` und `qa/play-image-optimization.json`.

Vor Upload bestanden: Edge headless 320/390/768/1440 px, DE/EN, Bildladung, Ebenen, Anmeldung, Touch-Drag, Gewinnfolge (37 Züge), Zeitablauf, Kein Platz mehr, Neustart, Tastatur und reduzierte Bewegung; gegen optimierten Entwurf und Export. Zusätzlich Hero-Button auf Größe/Überlauf, Hover, Druck, sichtbaren Tastaturfokus und 200 % Text geprüft; Anmeldung von Startseite übernommen und an jeder Breite komplette Gewinnrunde über echte Enter-Eingaben. Schmale Spielansicht und mobiler Einstieg visuell betrachtet. Kein physischer Handy- oder Screenreadertest, kein vollständiger WCAG-Audit. Regeln, Brett und Layout bleiben erhalten. CNAME, Rechtsseiten, Root-style.css/Root-language.js und beide Gate-Dateien beim Export per SHA-256 unverändert geprüft.

## Kopfzeilenlogo ohne Interaktion, 18.10.2026

Auf Nutzerauftrag ist das BrainBlooms-Logo oben auf Startseite und Rechtsseiten
ein reines Bild: kein Link, Tabstopp, Hover- oder Druckeffekt. Bildbeschreibung
und bestehende Gestaltung erhalten. CSS-Effekte der Wortmarke sind auf der
Startseite auf den bestehenden Fußbereich-Link begrenzt. Der Tastaturfokus des
Sprungs zum Seitenanfang geht zum ersten Navigationslink statt zum Logo.
Entwurf und Website-Dateifassung separat angepasst. Edge-Prüfung für vier Seiten:
keine Navigation/visuelle Änderung bei Hover oder Druck, kein Logo-Tabstopp,
Bildbeschreibung vorhanden und Fokusrückkehr zum Navigationslink bestanden.
Laufende zusätzliche Logo-/Layoutänderungen werden dabei nicht mitveröffentlicht.

## Vier Hover-Bildelemente, 18.10.2026

Auf Nutzerauftrag kippen Sortierbild, Restaurantbild, Dreierkombination und
kleine Gegenstandskarte beim Hover jeweils um zwei Grad und heben sich drei
Pixel. Bestehendes Tempo: 160 ms, vorhandenes --ease-out, nur transform.
CSS-Transitions erlauben unmittelbares Umkehren beim Verlassen; keine Schleife.
Nur Maus mit feinem Zeiger, keine Kippbewegung bei reduzierter Bewegung.
Dekorative Elemente erhalten keine Klickfunktion. Tastaturfokus bleibt unmittelbar.
In Edge per echter Mausbewegung gegen lokale Website-Fassung (4188) und Entwurf
(4173) geprüft: alle vier Bewegungen und Rückkehr, Reduced Motion, Tastaturfokus,
Großansicht/Escape/Fokusrückkehr, emulierter Touch und kein mobiler Überlauf.
Andere laufende Entwurfs-/Logoänderungen separat erhalten und nicht mitveröffentlicht.
Prüfergebnisse lokal: .local-preview/qa/hero-hover-{draft,public}.json.

## Vollständige Buttonprüfung und Social-Abgleich, 18.10.2026

Auf erneuten Nutzerauftrag nach brainblooms-interactive-elements geprüft und
repariert: Pinterest verwendet jetzt exakt denselben bestehenden SVG-Pfeil wie
Instagram und TikTok, statt des abweichenden Textzeichens. Alle drei rechten
Social-Beschriftungen verwenden dieselbe fette Schrift (700), Größe und Farbe;
Icons haben identisches Markup, Abmessungen und Strichstärke. Linkziel bleibt
https://pin.it/5O5hcjmCQ. Keine neuen Assets oder externen Einbettungen.

Fehlendes bzw. nicht unterscheidbares Feedback bei Wortmarken, Bildlinks,
Seitensprüngen, Textlinks, Navigation und ausgewählten Sprachbuttons der
Rechtsseiten ergänzt. Galeriepunkte erhalten etwas Abstand und einen
kontrastierenden Rand. Keine zusätzliche Bewegung. Auf den Rechtsseiten nur
CSS-Versionen und gemeinsame Bedienzustände geändert; article-Blöcke wortgleich.

Methode: manuelle Projektprüfung; ohne Impeccable-Engine und unabhängige Zweitprüfung.
71 tatsächlich bedienbare Elemente in Edge headless einzeln auf sichtbaren Hover,
Hover plus Druck, Tastaturfokus und Zielgröße geprüft: Startseite, Anmeldung,
Buch-/Spielgroßansicht, Impressum, Datenschutz und Terms. Keine verbleibenden
Fehler in diesen Prüfungen. Namen, Button-Typen, normale Textkontraste, 44-Pixel-
Zielgrößen und Überläufe bei 320/390/1440 Pixeln, DE/EN und 200 % Text geprüft.
Social-Schrift und SVG-Gleichheit im Browser verifiziert; mobile Aufnahme
visuell kontrolliert. Tastaturtests für Sprachwahl, alle vier Galeriepunkte,
alle Buchrückseiten, Dialogpfeile, Tab, Escape und Fokusrückkehr bestanden.
Native Dialoge können Tab an die Browserleiste übergeben; beim Weiter-Tabben
kehrt der Fokus in den Dialog zurück, Hintergrundlinks werden übersprungen.
Reduzierte Bewegung, emulierte Touchbedienung und deaktivierter Vorschau-Button
gegengeprüft. Kein physischer Geräte-, Screenreader- oder vollständiger WCAG-Test.

Prüfergebnisse bleiben lokal in .local-preview/qa/all-buttons-audit.json und
button-quality.json. Gemeinsame Entwurfs-CSS synchronisiert; zusätzliche lokale
Google-Play-Vorbereitung separat erhalten. CNAME, Root-style.css, Root-language.js
und Zugangsdaten unverändert. Bestehendes GitHub-Pages-Hosting, keine neuen Kosten.

## Aktualisierung: Bedienzustände und Pinterest, 18.10.2026

Nutzerlink https://pin.it/5O5hcjmCQ als normalen Pinterest-Link eingebaut,
in Deutsch und Englisch beschriftet. Kurzlinkziel extern nicht zuverlässig
abrufbar; deshalb keine Profiladresse oder Profilkennung daraus abgeleitet.
Bestehende eigene Symbole und Herkunftshinweise erhalten.

Hover für „Das Spiel entdecken“ mit gleicher CSS-Spezifität wie die spätere
Spielgestaltung ergänzt. Bildpfeile, Galeriepunkte, ausgewählte Sprachschalter,
Buchansichten, Dialog-Schließen und Vorschauformular erhalten sichtbares Feedback.
Neue Zustände wechseln ohne zusätzliche Animation; Hover nur bei Mausbedienung,
Druckfeedback auch bei Touch, ausgewählte und deaktivierte Zustände berücksichtigt.
Lokale Entwurfsquelle synchronisiert, CSS-Cacheversionen aktualisiert.

Methode: manuelle Projektprüfung; ohne Impeccable-Engine und unabhängige Zweitprüfung.
Edge headless: echte Mausbewegung und Druck mit gleichzeitigem Hover für die
vorhandenen Hauptseiten-Buttonfamilien; Dialog-Hover, Tastaturfokus, reduzierte
Bewegung sowie emulierte Touch-Eingabe bei 320/390 Pixeln in DE/EN bestanden.
Keine horizontalen Überläufe, JavaScript-Fehler oder externen Ressourcenabrufe
in den geprüften Hauptseitenabläufen. Desktopaufnahme visuell kontrolliert.
Kein physischer Geräte- oder vollständiger Barrierefreiheitstest.
Prüfskript lokal: .local-preview/qa/check-interactive-elements.mjs.

Neuer Projekt-Skill: .agents/skills/brainblooms-interactive-elements/SKILL.md,
in AGENTS.md für künftige Änderungen verknüpft. Frontmatter und Inhalt manuell
geprüft; der Skill-Creator-Validator kann wegen fehlendem Python-Modul yaml
nicht ausgeführt werden. Keine Abhängigkeiten nachinstalliert.

Nutzerauftrag: 17.10.2026, lokalen Entwurf mit temporärer Anmeldung auf
https://brainblooms.de veröffentlichen. Bestehendes Repository und Hosting verwenden.

Die Anmeldung ist eine clientseitige Sichtblende. Quellcode, Zugangsdaten und
Bildadressen bleiben technisch auslesbar; keine vertraulichen Inhalte hochladen.
Freigabe im Sitzungsspeicher des Tabs, bei blockiertem Speicher ohne Speicherung.
Keine Konten, Datenübertragung der Eingaben, Statistik oder zusätzlichen Dienste.
Startseite enthält noindex/nofollow. Das ist keine Garantie gegen Suchmaschinen.

## Dateien und Rechte

index.html und site-assets/ enthalten die Website. Originalbilder, lokale
Prüfberichte, Entwurfs-Nebenseiten und die unbenutzte große PNG-Datei werden
nicht übernommen. Schriftlizenz unter site-assets/fonts/TitanOne-OFL.txt erhalten.
Eigene bereitgestellte Buchcover, Spielbilder, Logo und Videobild sowie der
bereits akzeptierte generierte Hintergrund werden im vorhandenen Stand verwendet.
Herkunftsnachweise im bestehenden Asset-Register; dies ist keine Rechtsprüfung.
Aktualisierung vom 18.10.2026: Auf Nutzerhinweis zu den online fehlenden Icons
werden die ausdrücklich beauftragten eigenen TikTok-/Pinterest-Outline-Zeichnungen
aus dem lokalen Entwurf übernommen. Quellenhinweise in den SVG-Kommentaren bleiben
erhalten. Dies sind keine offiziellen Markenassets und keine dokumentierte
Markenfreigabe. Die geprüften Pinterest-Richtlinien untersagen Outline-Varianten;
die Veröffentlichung der gewünschten Eigenzeichnung ist daher nicht als
richtlinienkonforme Badge-Nutzung dokumentiert. TikTok verweist ebenfalls auf
Markennutzungsbedingungen; keine Lizenz- oder Rechtefreiheit behauptet.
Keine kopierten Fremdpfade oder externen Ressourcen. Bestätigte Profilziele bleiben
erhalten, bei Pinterest bis zur Angabe eines Profils weiterhin „Link folgt“.
Die Exportregel, die pauschal den älteren Social-Block ohne Symbole beibehielt,
wurde korrigiert. Keine neuen Dienst- oder Lizenzkosten.

CNAME, datenschutz/, impressum/, terms/, style.css und language.js unverändert.
Rechtstextseiten bleiben direkt erreichbar; Texte werden nicht durch diese
Veröffentlichung rechtlich freigegeben oder ersetzt.

## Sperre später entfernen

In index.html: den markierten preview-gate-Block löschen;
den umschließenden preview-site-Div samt schließendem Kommentar entfernen;
die beiden Verweise auf site-assets/preview-gate.css und .js löschen. Danach
diese beiden Dateien löschen und die Änderungen veröffentlichen.

## Prüfung vor dem Upload

App-Identität und Logoabstand, 18.10.2026: Auf Nutzerauftrag wird das in Unity
tatsächlich für Android zugewiesene AppIcon_ChefSort_Shelf_v02.png verwendet.
Unity bleibt unverändert; die Originalkopie liegt nur lokal. Öffentliche PNGs
unter site-assets/images/chef-sort-app-icon-{16,32,48,128,180,512}.png, ICO mit
16/32/48 unter site-assets/favicon.ico. Startseite und Rechtsseiten erhalten
Browser-/Touch-Icon-Verweise. Teilen-Metadaten der Startseite verwenden das
quadratische 512-Pixel-Motiv; keine garantierte Darstellung bei einzelnen
Social-Diensten, deren Cache und Ausschnitt eigene Regeln haben.

Im Spieleinstieg steht das App-Symbol neben Chef Sort, beschriftet mit
Für Android / For Android. Der Spielschriftzug ist auf breiten Bildschirmen
gegenüber der ersten Verschiebung nochmals gleich weit nach rechts versetzt;
Mobilformat behält seine Anordnung. Geprüft bei 320/390/768/1024/1440/1866,
DE/EN und 200 % Text; Bilder und ICO im Browser dekodiert, schmale und breite
Desktopaufnahmen visuell kontrolliert. Bestehende eigene Spielgrafik,
keine neue Bildgenerierung, Fremdlizenz, Bibliothek oder Dienstkosten.
Rechtsseiten erhalten nur andere Icon-Verweise; Rechtstexte bleiben wortgleich.

Spracherkennung und Rechtsseitendesign vom 18.10.2026, auf Nutzerauftrag online:
Startseite und alle drei Rechtsseiten laden language-preference.js vor dem
Textaufbau. Eine gültige gespeicherte manuelle Auswahl hat Vorrang; andernfalls
führt die bevorzugte Browsersprache de/de-* zu Deutsch, alle anderen zu Englisch.
Die Erkennung schreibt keine Cookies oder lokalen Speichereinträge. Nur eine
bewusste manuelle Sprachwahl wird wie bisher optional in localStorage gespeichert.
Bei gesperrtem Speicher funktionieren Erkennung und manueller Wechsel weiterhin.
Ohne JavaScript bleibt die deutsche HTML-Fassung erhalten.

Impressum, Datenschutz und Terms verwenden das vorhandene Logo sowie lokale
legal.css/legal-language.js unter site-assets/. Ihre originalen article-Blöcke
einschließlich Platzhaltern, Warnhinweisen und Textlinks wurden wortgleich
erhalten. Die Pfade bleiben unverändert und ohne Anmeldung erreichbar.
Root-style.css, Root-language.js, CNAME und Login-Dateien bleiben unverändert.
Keine neuen Bilder, Fremdschriften, Bibliotheken oder Anbieter; bestehende
Titan-One-OFL-Lizenz erhalten. Rechtstexte bleiben ausdrücklich vorläufig.

Vor Upload geprüft: 48 Initialsprachfälle über vier Seiten, gespeicherte/ungültige
Wahl, gesperrter Speicher, manuelle Auswahl, Neuladen, seitenübergreifende Wahl,
früher englischer Text und No-JS-Fallback. Rechtsseiten bei 320/390/768/1440,
Deutsch/Englisch und 200 % Text, sichtbarer Fokus und Tastaturauswahl geprüft.
Browseremulation mit Edge; kein physischer Geräte- oder vollständiger Rechtsaudit.

Aktualisierung vom 18.10.2026 auf ausdrücklichen Nutzerauftrag:

- Spieleinstieg mit kräftigerem Küchenhintergrund und sichtbaren Dreiergruppen.
  KI-Bildentwurf aus eigenen Referenzen; Original und Prompts bleiben lokal.
  Öffentliche Web-JPEGs: chef-sort-pantry-trios-v2-1200.jpg (97.235 Bytes) und
  chef-sort-pantry-trios-v2-1983.jpg (206.573 Bytes), unter site-assets/images/.
  Keine zusätzlichen Schriftdateien, Fremdkomponenten oder Einbettungen.
- Original-Spielaufnahmen mit anklickbarer Großansicht und dezentem Druckeffekt;
  Original-Tassenausschnitte als Dreierkombination. Reduzierte Bewegung erhalten.
- Galerie mit kompakter Überschrift statt zusätzlicher großer Zwischenüberschrift.
- Navigation: Holzzüge / Wooden Trains. Desktop-Logo etwa 80 % der Kopfzeilenhöhe,
  Sprungbuttons etwa 70 %, gleichmäßig mit ihrem ursprünglichen Seitenverhältnis
  vergrößert. Auf schmalen Displays flexible Anordnung.
- Anmeldung, Zugangsdaten, CNAME und Rechtstextdateien bleiben unverändert.
  Alle CSS-/JS-Verweise bekommen aktuelle Versionsparameter gegen alte Caches.

Exportierte Website hinter der Anmeldung in Edge-Browseremulation geprüft:
320/390/768/1440 Pixel, Deutsch/Englisch, 200 % Text, Bildladung, Slider,
Touch-/Maus-Vergrößerung, Escape, Fokusrückgabe und reduzierte Bewegung.
Kein physischer Handytest und keine vollständige Rechts- oder WCAG-Prüfung.

Kopfzeilen-Aktualisierung auf Nutzerauftrag vom 17.10.2026: kombinierter
BrainBlooms-Schriftzug (cremefarbenes Schild, bunte Buchstaben, kleine Blätter)
als lokale PNG-Datei unter site-assets/images/brainblooms-wordmark-combined-v1.png.
Webfassung 720 × 159 Pixel, transparenter Außenbereich. KI-Entwurf aus den zuvor
erstellten eigenen Varianten, keine zusätzliche Schrift oder Fremdkomponente.
Goldene Sprungbuttons zu Spiel, Malbüchern und YouTube. Vorschau-Hinweis und
Sperrknopf entfernt; die bestehende Anmeldung und Sitzung bleiben erhalten.
Die Entfernung des Sperrknopfs erfordert die angepasste preview-gate.js;
Versionsparameter verhindern das Laden einer alten Skriptfassung.
Kopfzeile und Bilder bei 320/390/768/1440 Pixeln, DE/EN und 200 % Textgröße
in Edge-Browseremulation geprüft und Handy-/Desktopaufnahme visuell angesehen.

Aktualisierung vom 17.10.2026 auf ausdrücklichen Nutzerauftrag: Der aktuelle
Entwurf wurde erneut in die öffentliche Fassung übernommen. Spielgalerie und
Fächer sind zu einem Slider zusammengeführt; automatischer Wechsel nach vier
Sekunden mit animierter Fortschrittsanzeige. Sichtbare Bildzähler entfallen.
Die bisherige Vorschau-Sperre bleibt unverändert. Geänderte Slider-Dateien
erhalten Versionsparameter gegen vermischte Browser-Cache-Stände.
Geprüft wurde die exportierte Fassung hinter der Sperre in Edge-Browseremulation:
320/390/768/1440 Pixel, DE/EN, Bilddateien, Touch-Wischen, Vergrößerung,
reduzierte Bewegung und 200 % Text. Kein physischer Handytest.

Manuelle Projektprüfung mit brainblooms-impeccable-review; ohne Engine oder
unabhängige Zweitprüfung. Edge headless bei 1440/390/320 Pixeln: zunächst nur
Anmeldung, ungültige/gültige Zugangsdaten, Freigabe nach Neuladen, erneutes Sperren,
200 % Text ohne horizontalen Überlauf, ohne JavaScript verdeckte Inhalte und
Anmeldung bei gesperrtem Sitzungsspeicher bestanden. Danach Anmeldung per
Enter-Taste, DE/EN-Wechsel, sämtliche img-Dateien erfolgreich dekodiert,
Buchrückseiten, Buch- und Spielgroßansichten bestanden. Keine JS-Fehler oder
externen Ressourcenanfragen in diesen Abläufen. Mobile Gesamtansicht manuell
betrachtet. Sechs bestehende Serverprüfungen bestanden. Kein physischer
Geräte- oder Screenreadertest. Direkt erreichbare Rechtstextseiten bleiben erhalten.


## Abgleich und Veroeffentlichung am 18.10.2026

Entwurf und oeffentliche Fassung zusammengefuehrt: Pinterest-Ziel https://pin.it/5O5hcjmCQ dauerhaft im Entwurf; Textlinks in kraeftiger Schrift mit einheitlichem vorhandenem Verlinkungspfeil. Aktuelle Headergrafik mit weisser Kontur, passive Logoanzeige und bereits veroeffentlichte Hover-/Fokus-/Druckzustaende erhalten. Chef-Sort-Logo, mobile Kopfzeilenreihenfolge, App-Symbol unter dem Banner und linke Ausrichtung wie freigegeben. Offizielle unveraenderte Google-Play-Badges lokal gehostet, DE/EN, mit Demnaechst-Hinweis ohne Downloadlink.

Methode: manuelle Projektpruefung ohne Impeccable-Engine oder unabhaengige Zweitpruefung. Edge-Browseremulation: 320/390/768/1440 Pixel, DE/EN, 200 Prozent Text, geladene Bilder und keine externen Ressourcen. 67 bedienbare Elemente auf Hover, Druck, Fokus und Mindestgroesse geprueft; Slider, Vier-Sekunden-Fortschritt, Touch-Wischen, Dialoge, Tastatur und Vorschau-Sperre bestanden. Screenshots von Handy- und Desktopansicht betrachtet. CNAME, Rechtsseiten, alte root-CSS/JS und Sperrlogik unveraendert. Kein physischer Handytest. CSS-/JS-Versionen beim Export aus Dateiinhalt erzeugt.


## Weitere freigegebene Entwurfsfassung vom 18.10.2026

Chef-Sort-Banner weiter rechts und tiefer; rote Original-Dosen als Match, blaue Original-Geraete rechts und gruene Originalgruppe waagerecht dazwischen. Gruene Karte mit vorhandenem dezentem Maus-Hovereffekt; reduzierte Bewegung und Touch ruhig. Vollstaendige Itemuebersicht als fuenftes quadratisches Faechermotiv mit passender Pfeilposition und bestehender Vergroesserung. Weisse Aussenkonturen der Sprungbuttons; Desktop-Mittellinie mit Logo gemeinsam ausgerichtet, bewusste Ueberlappung in den Spielbereich wiederhergestellt. Mobile untere Navigationszeile ueberlappt ebenfalls.

Exportierte Fassung hinter bestehender Sperre geprueft: 320/390/768/1440 Pixel, DE/EN, 200 Prozent Text, fuenf Faechereintraege und Punkte, volle quadratische Darstellung, Vergroesserung/Escape und automatischer Umlauf 5 zu 1. Tastatur, Dialogfokus, Mindestgroessen, Textkontrast und erhaltene Pinterest-/Linkgestaltung bestanden. Desktop-Screenshot angesehen; weitere mobile Sicht- und Hoverpruefungen dokumentiert in den lokalen Pruefberichten. CNAME, Rechtsseiten und Sperrlogik per SHA-256 unveraendert. Keine neuen Dienste, Fremdassets oder Kosten. Kein physischer Handytest.
