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
