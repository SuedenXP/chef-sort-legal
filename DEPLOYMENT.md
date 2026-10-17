# Geschützte Website-Vorschau

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
Die ungeklärten TikTok-/Pinterest-Outline-Symbole werden nicht veröffentlicht;
Plattformnamen und vorhandene Linkziele bleiben erhalten. Keine Fremdassets ergänzt.

CNAME, datenschutz/, impressum/, terms/, style.css und language.js unverändert.
Rechtstextseiten bleiben direkt erreichbar; Texte werden nicht durch diese
Veröffentlichung rechtlich freigegeben oder ersetzt.

## Sperre später entfernen

In index.html: den markierten preview-gate-Block löschen;
den umschließenden preview-site-Div samt schließendem Kommentar entfernen;
die beiden Verweise auf site-assets/preview-gate.css und .js löschen. Danach
diese beiden Dateien löschen und die Änderungen veröffentlichen.

## Prüfung vor dem Upload

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
