# Asset- und Komponentenregister

Stand 16.10.2026: In der lokalen Vorschau sind drei eigene SVG-Pfeile und unveränderte Originalicons von Instagram und YouTube eingebunden. Keine externen Fontdateien, Laufzeitpakete oder Einbettungen. Der frühere Player-Eintrag dokumentiert einen überholten Stand. Bestehende oder im Unity-Projekt enthaltene Bilder sind durch diese Vorbereitung nicht pauschal freigegeben.

Bei jeder späteren Auswahl eine Zeile ergänzen:

| Datei/Komponente und Version | Originalquelle, Urheber | Lizenz + Nachweis | Kommerzielle Nutzung/Bearbeitung/Web-Einbettung | Kosten | Externe Verbindungen | Benötigte Hinweise | Freigabestand |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `.local-preview/public/icons/arrow-up-right.svg`, `arrow-down.svg`, `arrow-up.svg`; Stand 16.10.2026 | Eigene einfache SVG-Geometrie, im Projekt erstellt | Kein fremder Icon-Code, keine Fremdlizenz übernommen | Projektinterne Verwendung und Anpassung vorgesehen | Keine zusätzlichen Dienst-/Lizenzkosten | Keine | Herkunft in diesem Register; kein fremder Copyright-Hinweis enthalten | Lokal eingebunden, keine Veröffentlichung |
| `instagram-black.svg`; Original `Instagram_Glyph_Black.svg` aus `IG_brand_asset_pack_2023.zip` | Meta, [offizielle Markenressourcen](https://www.meta.com/brand/resources/instagram/instagram-brand/), Download geprüft 16.10.2026 | Meta-Markenrichtlinien, keine Open-Source-Lizenz; HTML-Quellenkopie und SHA-256 lokal gesichert | Unveränderte schwarze Glyphe am eigenen Instagram-Profillink, mit Abstand und neben dem Plattformnamen; keine Partnerschaft behauptet | Kein Kauf/zusätzlicher Dienst | Datei lokal ausgeliefert; Plattformkontakt erst beim Linkaufruf | Markenrechte bleiben bei Meta; Originaldatei unverändert, weitere Nutzungen separat prüfen | Lokal eingesetzt; keine pauschale Freigabe für andere Medien |
| `youtube-red.png`; Original `yt_icon_red_digital.png` aus `youtube-icon.zip` | YouTube/Google, [Iconrichtlinien](https://brand.youtube/youtube-icon/) und [Kanalwerbung](https://brand.youtube/promoting-your-channel/), geprüft 16.10.2026 | YouTube-Markenrichtlinien, keine Open-Source-Lizenz; Quellenkopien und SHA-256 lokal gesichert | Unverändertes Icon neben @BrainBlooms als Kanallink; ursprünglicher Freiraum erhalten, keine Filter/Animationen am Markenzeichen | Kein Kauf/zusätzlicher Dienst | Datei lokal ausgeliefert; Plattformkontakt erst beim Linkaufruf | Markenrechte bleiben beim Anbieter; kein selbst gezeichnetes Ersatzlogo | Lokal eingesetzt; keine Veröffentlichung |
| YouTube-Player für R9Y5QX8LZ1w; nur lokale Vorschau | Video vom Nutzer geliefert; Einbettung gemäß [YouTube-Hilfe](https://support.google.com/youtube/answer/171780?hl=de), geprüft 16.10.2026 | YouTube-API-Bedingungen und Entwicklerrichtlinien gelten; kein Download/Weitervertrieb der Videodatei | Standard-iframe, erweiterter Datenschutzmodus; keine Entfernung des Anbieterbrandings | Kein kostenpflichtiges Plugin oder Dienst eingerichtet | Erst nach Klick zu youtube-nocookie.com; danach weitere Verbindungen innerhalb des Anbieterplayers möglich; keine externen Thumbnails vor Klick | Hinweis zu Datenübertragung und Link zu Google-Datenschutz; öffentliche Rechtsinformationen/Einwilligung noch abzustimmen | Technisch lokal vorbereitet; keine öffentliche Rechtsfreigabe und tatsächliche Anbieterwiedergabe noch unbestätigt |

Lizenznachweise mit Datum/Revision sichern. Bei Fonts die konkrete Familie, Schnitte und Dateien prüfen; eine kostenlose Anzeige/Downloadmöglichkeit ist keine Web-Lizenz. Bei Bildern auch Persönlichkeits-/Markenrechte und Bearbeitungsbedingungen berücksichtigen. Bei Komponenten direkte und mitgelieferte Abhängigkeiten prüfen. Credits an der von der jeweiligen Lizenz geforderten Stelle erhalten. Extern geladene Fonts/Medien zusätzlich auf Datenschutz und Datenübertragung prüfen, bevor sie eingebunden werden.


Aktualisierung 16.10.2026: YouTube-iframe nach Nutzerentscheidung aus der lokalen Vorschau entfernt. Vorerst nur eigene lokale Bilder und normale Links; der fruehere Player-Eintrag dokumentiert den historischen Stand.


Aktualisierung 16.10.2026, Designumsetzung: ausschliesslich eigener HTML/CSS-Code
und Systemschriften, beschriftete Farbplatzhalter statt Bilddateien. Keine Bilder,
Logos, Schriften oder Komponenten aus den recherchierten Websites uebernommen.
Keine zusaetzlichen Dienst-/Lizenzkosten; vorhandenes Codex-Kontingent genutzt.


## Pfeile, Revision playful-curved-v2 (16.10.2026)

Auf Nutzerwunsch sind die drei eigenen SVG-Pfeile kraeftiger (3,2 statt 1,75
Einheiten), mit gebogenem Schaft, runden Enden und weicher, markanter Spitze
ueberarbeitet. Richtung und Linkziele bleiben erhalten. In den Links bleiben
sie 20 Pixel bei Standardschrift; in der Uebersicht werden sie zur Betrachtung
groesser gezeigt. HTML aus lokalen SVG-Quellen neu geschrieben, Hashes aktualisiert.
Keine Fremdassets, neuen Lizenzpflichten, Dienstkosten oder Bewegungseffekte.


## Kreisschalter und externer Pfeil (16.10.2026)

Zwei feste, oben mittige Kreisschalter fuehren per normalen Ankerlinks zum
Seitenanfang und Seitenende. 48-Pixel-Bedienflaechen bei Standardschrift,
DE/EN-Beschriftungen fuer Hilfstechniken und Tooltip. Eigener Platz oberhalb
des Headers sowie Scrollabstand an Sprungzielen. Der bisherige Nach-oben-Textlink
im Fussbereich ist entfernt. Die akzeptierte geschwungene Aufwaertsform bleibt
unveraendert. Externer Pfeil: klare Diagonale mit rechtwinkliger offener Spitze,
weiterhin kraeftig und mit runden Enden (clear-diagonal-v3). Keine Animation.

20 Edge-Browserszenarien bestanden, darunter native Spruenge per Tastatur und
Touch/Maus bei 390/1440 Pixeln, Zentrierung ohne Scrollbalken, mobile Darstellung
und 200 Prozent Textgroesse. Screenshots 390 DE und EN 200 Prozent betrachtet.
Keine neuen Fremdassets, Kosten oder Veraenderungen der oeffentlichen Website.


## Effekte lokal umgesetzt (16.10.2026)

Auf Nutzerauftrag sind die vorgemerkten Effekte jetzt eingebaut: Cover heben sich
bei Maus-Hover leicht, die YouTube-Vorschau zoomt dezent innerhalb ihres Rahmens,
externe Pfeile bewegen sich kurz und Buttons geben Druckfeedback. Gemeinsame
CSS-Transitions mit 140/160/180 ms und kleiner Pointer-Ergaenzung fuer Touch.
Kein automatischer Bewegungslauf. Tastaturfokus sofort; bei reduzierter Bewegung
bleiben Position und Groesse ruhig. Plattformlogos unveraendert. 20 bestehende
Browser-Szenarien und drei gezielte Bewegungs-Testgruppen bestanden, inklusive
Abbruch der Touch-Eingabe. Siehe .local-preview/qa/motion-review.md.
Keine neuen Bibliotheken, Fremdassets, Lizenzpflichten oder Dienstkosten.


## Gelieferte Buchcover (16.10.2026)

| Lokale Webdateien | Quelle / Auswahl | Rechte / Kosten / Verbindungen | Stand |
| --- | --- | --- | --- |
| books/farm-de-{front,back}[-thumb].jpg | Nutzerdatei Vorne und Hinten v2_RGB.png; Mein bunter Bauernhof; B0HKRVNMDD | Selbst erstellt laut Nutzer; lokaler Zuschnitt/Verkleinerung beauftragt. Keine neuen Dienstkosten oder externen Ladeverbindungen. | Lokal eingebaut |
| books/animals-de-{front,back}[-thumb].jpg | Nutzerdatei cover_artwork_v01 gesamt.png; Hoppla! Da fehlt etwas! - Tiere; B0HL6QCTC6 | Wie oben | Lokal eingebaut |
| books/farm-en-{front,back}[-thumb].jpg | Nutzerdatei GesamtCover_rgb_v01.png; My Colorful Farm; B0HN29BR28 | Wie oben | Lokal eingebaut |
| books/fall-en-{front,back}[-thumb].jpg | Nutzerdatei cover_artwork_v03_en_rgb_v02_barcode.png; My Colorful Fall; B0HKL1ZL3P | Wie oben | Lokal eingebaut |

Sichtbare Texte, Motive und Barcodefelder erhalten; Original-PNGs nicht veraendert.
Keine neue Fremd-Lizenz oder Fontdatei eingebaut; separate Nachweise zu den im
Cover verwendeten Illustrationen/Schriften fehlen weiterhin. Dies ist keine
pauschale Rechtsfreigabe fuer eine spaetere Veroeffentlichung. Einzelne Schnittdaten
und SHA-256: .local-preview/qa/books/crops.json; Pruefbericht: dortige README.md.


## Reduzierte Buch-Grossansicht (16.10.2026)

Auf Nutzerwunsch keine sichtbare Titel-/Kopfzeile und kein unterer Link zur
vollen Bildgroesse mehr. Oben rechts eigenes, kraeftiges und leicht gebogenes
SVG-X im Stil der Pfeile; 44-Pixel-Bedienflaeche, beim Scrollen erreichbar,
DE/EN-Beschriftung fuer Hilfstechniken. Der Dialogtitel bleibt nur unsichtbar
fuer die zugaengliche Benennung erhalten. Seitlicher Pfeil passend zu Vorder-
oder Rueckseite, Escape und Fokusrueckkehr bleiben funktionsfaehig.
Vier Buchpruefgruppen bestanden, jetzt einschliesslich Touch-Schliessen am X
nach Scrollen bei 320/390 Pixeln und 200 Prozent Textgroesse. Screenshot
books-dialog-desktop.png visuell kontrolliert. Kein echter Handytest.
close.svg ist eigene Projektgeometrie ohne neue Fremdlizenz oder Dienstkosten.

## TikTok Outline auf Nutzerwunsch (16.10.2026)

- Datei: `.local-preview/public/icons/tiktok-outline.svg`; eigene SVG-Pfadzeichnung, kein kopierter Fremdpfad und kein offizielles TikTok-Asset. Transparent, ungefuellt, abgerundete Linien; inline am bestehenden Profil-Link eingebunden, ohne neue externe Verbindungen oder Abhaengigkeiten.
- Verwendung: ausschliesslich Kennzeichnung des Links zu `https://www.tiktok.com/@brain.blooms`, neben dem Namen TikTok. Keine Partnerschaftsaussage. Keine neuen Dienst- oder Lizenzkosten.
- Eine eigene Zeichnung beseitigt keine Markenrechte und ist keine dokumentierte Freigabe von TikTok fuer eine veraenderte Logodarstellung. Diese Frage bleibt vor Veroeffentlichung gesondert zu beurteilen; keine Rechtsfreigabe behaupten. Nutzer hat ausdruecklich eine eigene Outline-Fassung beauftragt.

## Pinterest Outline auf Nutzerwunsch (16.10.2026)

- Datei: `.local-preview/public/icons/pinterest-outline.svg`; eigene SVG-Zeichnung mit Kreis und P, kein kopierter Fremdpfad und kein offizielles Pinterest-Asset. Gleiche Strichstaerke und Groesse wie das TikTok-Outline-Icon, transparent und inline eingebunden. Keine externen Abrufe, Fremdkomponenten oder neuen Kosten.
- Profiladresse fehlt weiterhin: Anzeige neben Pinterest mit Status Link folgt, kein funktionsloser Link.
- Die offizielle Pinterest-Richtlinie verlangt unveraenderte bereitgestellte Badges und untersagt Outline-Varianten: https://business.pinterest.com/en-gb/brand-guidelines/ . Diese ausdruecklich beauftragte Eigenzeichnung ist deshalb nicht als richtlinienkonformes offizielles Badge oder als fuer die Veroeffentlichung rechtlich freigegeben dokumentiert. Markenrechte bleiben bei Pinterest. Vor Veroeffentlichung ist diese Abweichung zu klaeren oder das offizielle Badge zu verwenden.

## Eigenes YouTube-Vorschaubild (16.10.2026)

Vom Nutzer fuer den Videolink ausgewaehlt: `art/pictures/Video 25 v3.jpg`, 1920 x 1080 Pixel, 276059 Byte. Unveraenderte lokale Kopie unter `.local-preview/public/images/youtube-video-25.jpg`. Bereits kleines JPEG, daher keine erneute verlustbehaftete Kompression. Vollstaendige Darstellung im Format 16:9 ohne Zuschnitt, responsiv, lazy loading und DE/EN-Alternativtext. Bestehender normaler Link zu https://youtu.be/R9Y5QX8LZ1w bleibt; keine YouTube-Einbettung, externen Bildabrufe oder neuen Kosten. Nutzerbereitstellung ist keine unabhaengige Pruefung aller im Foto sichtbaren fremden Marken oder Rechte.

## Spielaufnahmen Kitchen Sort (17.10.2026)

- Nutzer liefert zwoelf PNGs unter `art/pictures/Kitchen Sort/`. Auswahl fuer den vorhandenen Aufbau: `de/en-01-hero.png` im Einstieg, `de/en-02-sorting.png` und `de/en-04-burger-restaurant.png` in der Galerie. Die uebrigen Aufnahmen bleiben als unverbautes Material erhalten. Keine daraus abgeleiteten Versprechen zu Spielmechanik, Preisen oder Veroeffentlichung.
- Originale unveraendert; SHA256, Groessen und Webvarianten in `.local-preview/qa/game-images.json`. Reproduzierbare lokale Skalierung mit Windows System.Drawing in `prepare-game.ps1`, keine Fremdskripte oder Bildgenerierung. Webkopien: 540 und 1080 Pixel breit als JPEG Qualitaet 88, ohne Zuschnitt, Textretusche oder hinzugefuegte Inhalte. Beide Sprachfassungen zusammen 2528147 Byte fuer alle zwoelf Varianten; Browser waehlt pro Aufnahme eine passende Variante.
- Inline Sprachwechsel aktualisiert Bildquelle, srcset und Alternativtext. Ohne JavaScript deutsche Aufnahmen. Hochformat vollstaendig, keine automatische Animation, Galerie lazy loading. Keine neuen Dienste, Kosten, externen Medienabrufe oder Lizenzkaeufe.
- Quelle: vom Nutzer bereitgestellte eigene Spielaufnahmen; keine separate Lizenzdokumentation fuer enthaltene Spielgrafiken/Schriften vorgelegt. Deren Freigaben werden nicht durch den Einbau als bewiesen behauptet. Kein Zugriff auf Unity oder juristische Unterlagen, keine Veroeffentlichung.

Aktualisierung nach weiteren Spielangaben: `03-gravity` ersetzt `02-sorting` in der sichtbaren Galerie (mehr Abwechslung zum Einstieg). Neuer Manifeststand und Webkopien durch dasselbe lokale Aufbereitungsskript; aeltere 02-Webkopien bleiben unbenutzt im Vorschauordner. Alle drei sichtbaren Bilder als regulaere Bildlinks mit progressiver nativer Dialog-Grossansicht, X aus vorhandenem Original-SVG, Escape und Fokusrueckkehr. Keine neue Fremdkomponente, Animation, Lizenz oder externer Dienst. 06-Lieferkettenansicht weist im gelieferten Screenshot bereits abgeschnittene UI auf; Original nicht retuschiert und vorerst nicht eingebaut. 05-Ladebildschirm fuer aktive Spielpraesentation nicht ausgewaehlt.

Weitere vom Nutzer benannte Bildquelle: `art/pictures/Kitchen Sort/kitchen_belt_item_shelf_overview_v2.png` (2850 x 2850, 4938744 Byte). Lokale Motivuebersicht visuell betrachtet und fuer die offene Designplanung erfasst. Keine Aenderung der Originaldatei, kein Webeinbau, kein externer Upload oder Bildgenerierung. Quelle laut Projektzusammenhang eigene bereitgestellte Spielgrafik; keine zusaetzliche Lizenzdokumentation vorgelegt. Geplante Verwendung als Grundlage fuer wenige grosse Objektmotive, keine Behauptung einer fertigen Spielaufnahme.

## Ersetzte Spielaufnahmen aktualisiert (17.10.2026)

Nutzer hat DE/EN 01-hero, 02-sorting und 03-gravity ersetzt. Webvarianten mit 540/1080 Pixeln erneut lokal aufbereitet, ohne Zuschnitt oder Veraenderung der Originale. Vorheriger SHA256-Vergleich bestaetigt geaenderte 01/03-Dateien und unveraenderte 04-Dateien; 02 jetzt ebenfalls wieder im Aufbereitungsskript enthalten, damit keine veralteten Reserve-Webkopien verbleiben. Aktuelle Quelldaten und Hashes aller acht aufbereiteten Originale stehen in `.local-preview/qa/game-images.json`. Sichtbare Auswahl bleibt 01/03/04, aktuelle Gestaltung unveraendert. Bild- und Sprachpruefung bei vier Breiten sowie Grossansicht/X/Escape/Fokusrueckkehr bestanden, aktualisierte Hero-/Regal-Webkopien visuell kontrolliert. Keine neuen Kosten, Fremdassets oder Veroeffentlichung.

## Zusaetzlicher Bannerentwurf (17.10.2026)

Nutzer beauftragt Beginn zusaetzlicher Inhalte nach Banner-/Galerieplanung. Ein eigener, separat reviewbarer HTML/CSS-Banner unter `.local-preview/public/banner.html` und `banner-en.html`, erzeugt durch `qa/write-banner.mjs`, Gestaltung in `public/banner.css`. Native Komposition aus vorhandenen Aufnahmen 01/04, zwei Motivgruppen der eigenen Gegenstandsuebersicht (SVG-Ansichtsausschnitte) und selbst geschriebenem Text. Keine Bilder, Texte, Logos oder Codes von Royal Match/Candy Crush uebernommen. Keine generierten Rasterbilder oder neuen Dienste.

Systemschrift fuer Lesetext; Georgia/Times als lokaler System-Fallback fuer den vorlaeufigen Schriftzug, keine Fontdateien beschafft oder eingebettet. Darstellung in Marineblau, Creme und Gold als einzelner Entwurf, keine Variantenserie. DE/EN-Inhalte und getrennte responsive Anordnung: Desktop nebeneinander, Handy untereinander.

`prepare-banner-assets.ps1` erstellt eine 1600-Pixel-JPEG-Webkopie der Gegenstandsuebersicht (Qualitaet 90, vollstaendig und proportional). Quelle bleibt unveraendert, SHA256 und Dateigroessen in `qa/banner-assets.json`. Ausschnitte erfolgen nur im SVG-ViewBox der Darstellung; Originale bleiben erhalten. Urspruengliche PNG-Vorschaukopie unbenutzt und nicht mehr vom Server freigegeben. Bestehende Herkunfts-/Rechtegrenzen der Spielgrafiken gelten weiterhin; kein neuer Lizenzvertrag und keine Kosten.

Banner ist separat, Hauptentwurf und oeffentliche Website nicht ersetzt. Keine automatische Bildfolge in diesem Schritt: nur Bannerinhalt. Lokale Browserpruefung DE/EN bei 320/390/768/1440 Pixeln, 200 Prozent Textgroesse, keine externen Ressourcenaufrufe und kein horizontaler Seitenueberlauf. Mobile und Desktopaufnahmen visuell geprueft; kein physisches Handy und keine unabhaengige Lizenzpruefung.

## Verspielte Bannerschrift Titan One (17.10.2026)

Nutzer wuenscht die Schrift aus dem Spiel fuer den oberen Spieltitel. Im Unity-Projekt vorhandene Datei `Assets/Fonts/TitanOne-Regular.ttf` und zugehoerige `Assets/Fonts/OFL.txt` ausschliesslich gelesen und unveraendert nach `.local-preview/public/fonts/TitanOne-Regular.ttf` und `TitanOne-OFL.txt` kopiert. Quelle bleibt unveraendert. Schriftname laut Unity-Importer Titan One; Verwendung in jeder einzelnen Spielansicht nicht gesondert nachgewiesen. Standard-TMP-Einstellung verweist noch auf LiberationSans und ist kein Nachweis fuer die sichtbare Spielschrift.

Copyright (c) 2011 Rodrigo Fuenzalida, Reserved Font Name Titan; SIL Open Font License 1.1 erlaubt kommerzielle Nutzung und Web-Einbettung mit erhaltenen Copyright-/Lizenzhinweisen. Originalquelle abgeglichen: https://raw.githubusercontent.com/google/fonts/main/ofl/titanone/OFL.txt . Keine Aenderung oder Konvertierung der 52708-Byte-TTF, kein Fontdienst, keine Lizenzkosten. Gesetzte Bannertitel Chef Sort und Restaurant Rush nutzen font-weight 400 passend zur vorhandenen Schrift; Lesetext bleibt Systemschrift. Zuvor verwendete Georgia-Titelgestaltung ersetzt.

Lokale Fontdatei und Lizenz sind vom Vorschau-Server erreichbar. Browserpruefung bestaetigt tatsaechlich geladenen Font bei 320/390/768/1440 Pixeln, DE/EN, 200 Prozent Textgroesse ohne horizontalen Ueberlauf und keine externen Ressourcen. Keine Veroeffentlichung; Unity nicht veraendert.

## Original-Spiellogo im Banner (17.10.2026)

Auf Nutzerauftrag ersetzt das separate Spiellogo den vorlaeufigen Text-Schriftzug im Banner. Quelle: `C:/Unity Projects/RestaurantGame/Assets/Project/Art/UI/Startup/StartupTitleBanner_v04.png`, 2172 x 724 Pixel, 2194081 Byte. Echte Alpha-Transparenz anhand Pixelwerten und Format32bppArgb bestaetigt; keine Screenshot-Freistellung und keine Bildgenerierung.

Unveraenderte Originaldatei ausschliesslich gelesen. `qa/prepare-game-logo.ps1` erzeugt transparente PNG-Webkopien mit 600/1200 Pixeln Breite, proportional und ohne Zuschnitt, Umfaerbung oder Retusche. Herkunft, SHA256, Groessen und Quellenintegritaet in `qa/game-logo.json`. Einbau als normales Bild mit Alternativtext, dimensions, srcset und responsive sizes in beiden Sprachfassungen. Keine externen Abrufe, neuen Fonts, Fremdkomponenten oder Kosten. Titan-One-Datei und Lizenz bleiben erhalten, werden im Banner nach Ersatz des Titels nicht mehr geladen.

Quelle ist die vom Nutzer fuer die eigene Website freigegebene Grafik aus seinem Spielprojekt; keine zusaetzlichen Rechte aus fremden Spiel-Websites abgeleitet. Alle bisher genannten Grenzen zur Dokumentation der enthaltenen Grafiken/Schriften bleiben bestehen. Keine neue Lizenzvereinbarung behauptet. DE/EN-Banner bei vier Breiten und 200 Prozent Textgroesse geprueft, transparentes Logo in schmaler Aufnahme visuell kontrolliert. Unity und oeffentliche Website unveraendert.

## Titan One fuer alle Spieltexte (17.10.2026)

Auf ausdruecklichen Nutzerwunsch jetzt alle Texte innerhalb des Banner-Spielbereichs sowie `.game-section`, `.gallery-section` und `#game-dialog` der lokalen Hauptvorschau in der vorhandenen Titan One. Schrift wird erneut lokal geladen, originale TTF und OFL unveraendert. Spiellogo bleibt Originalgrafik. Keine neue Schriftbeschaffung oder Lizenzkosten. Gemeinsame Navigation und Entwurfshinweise, Malbuecher, YouTube, Kontakt und Rechtstexte behalten Systemschrift.

Zeilenhoehen und Laufweite der Spielueberschriften angepasst; font-synthesis none verhindert kuenstliche Fettung der vorhandenen Regular-Schrift. Banner in DE/EN bei vier Breiten und 200 Prozent Textgroesse ohne horizontalen Ueberlauf, schmale Ansicht visuell geprueft. Keine neuen Animationen oder externen Verbindungen, keine Aenderung am Unity-Projekt und keine Veroeffentlichung.

## Integration des Spielbereichs mit Bildfolge und Bildstapel (17.10.2026)

Ausdruecklicher Nutzerauftrag zum Umbau nach Abnahme des Banner-Grundaufbaus. Bereits erfasste lokale Quellen: Original-Logo-Webkopien, Titan One samt OFL, Gegenstandsuebersicht-Webkopie und DE/EN-Spielaufnahmen 01-04. Keine neuen Bilder, Schriften, Icons, Bibliotheken, Fremdlizenzen, Dienstverbindungen oder Kosten.

Eigene Implementierung: `.local-preview/qa/game-sections.mjs` erzeugt Banner, vier erklaerte Spieleinblicke und vierteiligen manuellen Bildstapel; eingebunden in den vorhandenen HTML-Generator. `public/game-showcase.css` enthaelt auf den Spielbereich begrenzte Banner-/Galeriestile. `public/game-showcase.js` steuert Bildwechsel, Pause, Positionspunkte, Tastatur und passive Touchgesten. Bestehender Bilddialog ueber `game-images.js` wiederverwendet; 1080-Pixel-Grossansicht auch bei kleinen Vorschaubildern, keine Originaldateien veraendert.

Animation: vorhandene 180-ms-Dauer und bestehende ease-out-Kurve, ausschliesslich transform/opacity. Manueller Tastaturwechsel ohne Animation, reduzierte Bewegung ohne Uebergaenge oder automatischen Start. Keine pauschalen GPU-/FPS-Versprechen. Autoplay nur auf ausdruecklichen Wunsch fuer die obere Bildfolge; manuelle untere Galerie.

Pruefungen: 20 responsive/Sprach-/Tastaturfaelle bestanden; gezielte automatische Weiterschaltung, manueller Stopp, Bildstapel, 1080-Pixel-Dialog, Escape, englische Bildbeschriftung, reduzierte Bewegung, synthetische horizontale Wischgesten bei 320/390 Pixeln und deutsche Inhalte ohne JavaScript bestanden. Vier Buch-Pruefgruppen und sechs Serverpruefungen bestanden. Desktop-/Handyaufnahmen visuell betrachtet. Browseremulation, kein echter Geraetetest. Keine Veroeffentlichung.

## Generierter Pantry-Hintergrund (17.10.2026)

Nutzer verlangt ausdruecklich ein erzeugtes Rasterbild fuer den zu cleanen Spielbanner-Hintergrund mit der eigenen Gegenstandsuebersicht als Referenz. Genau ein Aufruf des eingebauten image_gen-Tools, keine CLI/API-Ausweichloesung, keine Variantenserie und keine anderen Spielbilder als Bildquelle. Referenz: `art/pictures/Kitchen Sort/kitchen_belt_item_shelf_overview_v2.png`. Generierung betrifft nur ein dekoratives Hintergrundmotiv; Logo, Texte und echte Spielaufnahmen werden nicht mitgeneriert oder ersetzt.

Originalausgabe: `C:/Users/anmel/.codex/generated_images/01a1445f-bd2a-7f93-ad06-7f1b9199cba0/exec-06f7bcae-8372-4184-8a02-3d72117d46e7.png`. Projektkopie: `.local-preview/art/chef-sort-pantry-background-v1.png`, 1983 x 793 Pixel, 2216957 Byte. Vollstaendiger verwendeter Prompt: `.local-preview/qa/background-generation-prompt.txt`. Keine Royal-Match-/Candy-Crush-Grafik in diesem Aufruf.

Eigene lokale Optimierung mit `prepare-generated-background.ps1`: JPEG 1983 x 793 (296230 Byte) und 1200 x 480 (126078 Byte), Qualitaet 88. Metadaten und SHA256 in `qa/generated-background.json`. Im Banner und in der Hauptvorschau als lokale Hintergrunddatei eingebaut, dunkle halbtransparente Flaeche fuer Lesbarkeit; vorheriger CSS-Farbverlauf und kuenstliches Regalbrett ersetzt. Mobil kleineres Bild mit ruhigem mittleren Ausschnitt. Keine neue Animation oder externe Verbindung beim Laden.

Generiertes Dekorationsmotiv, keine Behauptung einer echten Spielaufnahme oder exklusiver Schutzrechte. Enthaltene Referenzgrafik ist vom Nutzer bereitgestellt; eine separate Lizenzdokumentation der urspruenglichen Spielgrafiken ist weiterhin nicht vorhanden. Kein Fremdasset-Paket oder Font gekauft. Ein Bildgenerierungsaufruf verbraucht das verfuegbare Bild-/Codex-Kontingent; exakter Tarif-/Euroverbrauch ist hier nicht einsehbar, keine neue kostenpflichtige API oder Dienstbuchung gestartet.

20 bestehende Layout-/Sprach-/Tastaturpruefungen und acht Banner-Sprach-/Breitenkombinationen einschliesslich Textvergroesserung bestanden, Desktop und Handy visuell kontrolliert. Google-Play-Hinweis besitzt eigenen dunklen Hintergrund fuer Lesbarkeit ueber der Holzflaeche. Oeffentliche Website und Unity unveraendert; keine Veroeffentlichung.

## Spieloberflaechen-Stil per CSS (17.10.2026)

Eigene Datei `.local-preview/public/game-ui.css` nach Nutzerwunsch fuer mehr Mobile-Game-Charakter. Lokale CSS-Konturen, Schatten, farbige Kanten und plastische Bedienelemente; keine neue Bildgenerierung, Fremdgrafik oder Komponente. In Hauptgenerator und separatem Banner eingebunden; generierter Hintergrund selbst unveraendert. Bestehende Kosten-/Lizenzhinweise bleiben erhalten, keine neuen Lizenz- oder Dienstkosten.

20 Websitepruefungen, acht Banner-/Sprachkombinationen mit 200 Prozent Textgroesse sowie gezielte Timer-, Pause-, Touch-/Scroll-, Fokus- und Dialogpruefungen bestanden. Gesamtansicht visuell kontrolliert. Keine weiteren automatischen Animationen. Oeffentliche Website und Unity unveraendert.

Kleine Ausschnittkorrektur auf Nutzerwunsch: beide Motivkarten im Banner rechts um 20 Quellpixel gekuerzt (SVG-ViewBox 530 statt 550 Pixel breit, Hoehe 350); Seitenverhaeltnis der Anzeige entsprechend 53/35. Der schmale Rest des angrenzenden Regalfachs rechts ist entfernt. Hauptvorschau und separater Banner aktualisiert, acht Bannerpruefungen bestanden und Desktopaufnahme visuell kontrolliert. Originalgrafik unveraendert, keine Bildgenerierung oder neuen Kosten.

Lokale Bildwechsler-Korrektur nach bereits erfolgter Veroeffentlichung: auf Nutzerwunsch Start/Pause-Taste entfernt und vorhandene Pfeile direkt an die Bildraender verlegt, obere Bildfolge automatisch mit temporaerer Pause durch Hover/Fokus/Beruehrung. Untere Galerie manuell. Nur `.local-preview/`-Implementierung geaendert, keine neue Grafik oder Lizenz. 20 Layout-/Tastaturpruefungen und gezielte Timer-, Fokus-Pause/Fortsetzen-, Pfeilposition-, Touch-/Scroll-, Sprach-/Dialog- und No-JS-Pruefungen bestanden. Schmale Gesamtansicht visuell kontrolliert. Veroeffentlichte `index.html` und `site-assets/` unveraendert; erneute Veroeffentlichung nur auf Nutzerauftrag.

Aktiver Positionsbalken auf Nutzerwunsch als animierte Vier-Sekunden-Anzeige umgesetzt: eigener dekorativer Span, transform scaleX, lineare Web Animations API als gemeinsame Uhr fuer Fuelleffekt und Bildwechsel. Keine Bibliothek, neue Assets, Bildgenerierung oder Kosten. Anhalten/Fortsetzen erhaelt den verbleibenden Fortschritt; manuelles Umschalten setzt zurueck. Bei reduzierter Bewegung statischer Positionsindikator. 20 responsive Prueffaelle bestanden; gezielte Browserpruefung von 4000-ms-Dauer, Zwischenstand und eingefrorenem Fortschritt bei Hover sowie vorhandene Fokus-/Touch-/Dialogfunktionen bestanden. Nur lokaler Entwurf geaendert.

Zusammenfuehrung des Bildfaechers in den Slider: gleiche vier Originalaufnahmen werden nur noch einmal im gemeinsamen Spielgalerie-Element praesentiert, separate untere Galerie entfernt. Ein Index fuer Erklaerung, Frontbild, Fan-Tiefen, Punkt und Vier-Sekunden-Fortschritt. Sichtbare Zaehler entfernt, sr-only-Positionsangabe fuer Hilfstechniken bleibt. Keine neue Grafik, Schrift, Fremdkomponente oder Kosten. 20 Layout-/Sprach-/Tastaturpruefungen und gezielte Fortschritt-/Automatik-/Fokus-/Pfeilposition-/Touch-/Dialog-/No-JS-Pruefung bestanden. Desktop/Handy visuell kontrolliert. Ausschliesslich lokale Vorschau, keine Aenderung an index.html des Repositorys oder site-assets/.


## BrainBlooms wordmark v1 - 17.10.2026

Nutzerwahl: bunter, verspielter Schriftzug mit dezenten Farbklecksen. Ein einzelner Entwurf mit integriertem image_gen-Werkzeug, transparenter Hintergrund; keine Referenzlogos, Fremdschriftdateien oder externen Verbindungen. Original unter .local-preview/art/brainblooms-wordmark-v1-original.png; Webfassung images/brainblooms-wordmark-v1.png (720 x 157, PNG mit Alpha), lokal und in vorbereiteten site-assets/. Nur transparenter Rand beschnitten und fuer Web verkleinert. Prompt: .local-preview/qa/brainblooms-wordmark-v1-prompt.txt. Keine neue gekaufte Lizenz oder Dienstgebuehr; vorhandenes Generierungskontingent beansprucht. KI-generierte Gestaltung; keine Zusage ausschliesslicher Rechte oder Markenfreigabe. Noch nicht erneut veroeffentlicht. Navigationsbuttons verwenden vorhandene lokale Titan One/OFL-Schrift, keine neuen Komponenten.


## Weitere BrainBlooms-Schriftzugvorschlaege - 17.10.2026

Auf ausdruecklichen Nutzerauftrag je eine weitere Richtung mit integriertem image_gen erzeugt: cremefarbenes Schild mit tiefgruenem Schriftzug und Blaettern (.local-preview/art/brainblooms-wordmark-cream-v1.png); dunkelgruenes Studioschild mit Goldrand (.local-preview/art/brainblooms-wordmark-studio-v1.png). Beide PNG mit transparentem Aussenbereich, Originalausgabe unveraendert erhalten. Text und Schreibweise visuell kontrolliert. Prompts unter .local-preview/qa/brainblooms-wordmark-cream-prompt.txt und brainblooms-wordmark-studio-prompt.txt. Keine Fremdreferenzen, Schriftdateien oder Komponenten eingebunden, vorhandenes Generierungskontingent genutzt, keine Dienste gekauft. Wie beim ersten KI-Entwurf keine Zusage exklusiver Rechte oder Markenfreigabe. Nur lokale Vergleichsentwuerfe; kein Austausch des eingebauten Schriftzugs und keine Veroeffentlichung.


## Kombinierter BrainBlooms-Schriftzug - 17.10.2026

Auf Nutzerauftrag ein kombinierter Bildentwurf mittels integriertem image_gen: cremefarbenes Schild, dezenter Goldrand und Blaetter der ersten Variante mit dem bunten plastischen Schriftzug der Farbvariante. Beide vom Nutzer erneut angehaengten eigenen KI-Entwuerfe als Referenzen genutzt. Ergebnis .local-preview/art/brainblooms-wordmark-combined-v1.png; Prompt .local-preview/qa/brainblooms-wordmark-combined-prompt.txt. Originalausgabe mit transparentem Aussenbereich erhalten; Schreibweise visuell kontrolliert. Vorhandenes Generierungskontingent genutzt, kein Kauf, keine Fremdassets oder externe Website-Aufrufe ergaenzt. Nur lokaler Vorschlag, nicht eingebaut oder veroeffentlicht. Rechtehinweise der vorigen KI-Entwuerfe gelten weiterhin.


Nutzerfreigabe und Veroeffentlichung des kombinierten Schriftzugs: 17.10.2026, Revision 46c443b. Web-PNG 720 x 159 Pixel, 235779 Bytes, nur transparente Aussenraender gekuerzt und fuer Web skaliert. Original und Prompt weiterhin lokal erhalten. Kopfzeile ohne Vorschau-Hinweis/Sperrknopf, Anmeldung erhalten. Edge-Emulation 320/390/768/1440, DE/EN und 200 Prozent Text bestanden, mobile/Desktop-Aufnahmen manuell betrachtet. Slider-/Touch-/Dialogpruefungen bestanden; kein physischer Geraetetest.
