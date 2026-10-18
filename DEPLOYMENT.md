# Geschützte Website-Vorschau

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
