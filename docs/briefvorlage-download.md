# Briefvorlage zum Weihnachtsmann

## Druckrand-Korrektur 27.10.2026

Auf Nutzerauftrag haben alle drei Webkopien einen weißen Druckrand erhalten.
Die vom Nutzer benannten Originaldateien bleiben unverändert; die bisherigen
Webkopien sind zusätzlich unter `.local-preview/pdf-originals-2026-10-27/` gesichert.
Die aktuelle Webfassung ist deshalb nicht mehr bytegleich mit dem Original.

Ausgabeformat A4, 210 × 297 mm. Inhalt proportional auf 90,4421 % verkleinert und
zentriert: links/rechts 10 mm, oben/unten rund 14,136 mm weißer Rand. Kein Beschnitt
oder Verzerren des ursprünglichen Seiteninhalts. Vorhandene zweite Leerseite in
jeder Vorlage beibehalten. Kein physischer Probedruck in diesem Durchgang.

| Webkopie | Neue Größe | SHA-256 |
| --- | --- | --- |
| weihnachtsbrief-kleinkinder.pdf | 1.266.561 Bytes | 037fb9b2f8ae50de29f29daba0e8fb749709bcebb4e985c30c4e6bdeea28aecc |
| weihnachtsbrief-kindergarten.pdf | 336.915 Bytes | 587506c470184c82c4ec022ea56ad1ebb4fbdbdaa394dd765feef4b2b9c7726e |
| weihnachtsbrief-schulkinder.pdf | 600.717 Bytes | d0cb85ff2e26704c77320ab0da1e18ab08b95aa90e3d387a4e08c387cba4fba6 |

Bearbeitet ausschließlich mit den bereits installierten Poppler-/Cairo-Bibliotheken
von GIMP. Kein zusätzlicher Paketdownload, kein Upload der PDFs. Cairo erzeugt eine
neue PDF-Ausgabe; vorhandene Autor-, Titel-, Betreff-, Stichwort- und Creator-Metadaten
werden soweit vorhanden übernommen, die technische Producer-Angabe ändert sich.
Alle sechs Seiten gerendert, A4-Maße und weiße Ränder geprüft. Mit vorhandenem
`pdftotext` extrahierte Texte vor/nach Bearbeitung stimmen nach Normalisierung
von Leerraum überein. Neue Dateigrößen in der Website aktualisiert.
Prüfnachweise: `.local-preview/qa/pdf-margins-2026-10-27/`, Skript
`.local-preview/pdf-print-margins.py`. Weiterhin nur lokal, nicht veröffentlicht.

## Fortschreibung 27.10.2026: drei Vorlagen

Weiterhin ausschließlich lokaler Entwurf. Der Bannerbutton „Zu den Vorlagen“
führt jetzt zu `#weihnachtsvorlagen`; drei Downloadbuttons stehen im Kasten bei
den Malbüchern. Vorherige Einzeldatei-Angaben weiter unten sind historisch.

| Vom Nutzer bereitgestellte Datei in `site-assets/downloads/` | Unveränderte Webkopie | Größe |
| --- | --- | --- |
| Grün Creme Elegant Weihnachten Kleinkinder.pdf | weihnachtsbrief-kleinkinder.pdf | 1.165.742 Bytes |
| Grün Creme Elegant Weihnachten Kindergarten.pdf | weihnachtsbrief-kindergarten.pdf | 232.736 Bytes |
| Grün Creme Elegant Weihnachten Schulkinder.pdf | weihnachtsbrief-schulkinder.pdf | 487.451 Bytes |

Originale bleiben unverändert. Webkopien sind bytegleich, mit eigenen Dateinamen
für stabile Links und Downloads. Der Worker erlaubt nur diese drei Pfade für
`download_request`, jeweils als eigene Ressource in der vorhandenen Tagesstatistik.
Der Sprung im Banner ist kein Download und wird nicht als solcher gezählt.
Die öffentliche Cloudflare-Konfiguration wurde nicht geändert oder veröffentlicht.
Der lokale Vorschau-Server liefert nur Dateien aus und zählt nichts.

Die Datenschutzfassung nennt nun drei Vorlagen. Quelle dieser begrenzten
Tatsachenänderung: Nutzerauftrag, die bereitgestellten Dateien sowie die
Download-Allowlist in `worker.mjs`. Zählverfahren und Aufbewahrung unverändert.

## Historischer Stand der einzelnen Vorlage

Stand: 25.10.2026. Erweiterung der bestehenden Website um einen PDF-Download.

**Aktueller Freigabestand:** Auf Nutzerwunsch ausschließlich lokaler Offline-
Entwurf. Kein Commit/Push und keine Veröffentlichung dieser Erweiterung.
Vorschau über `.local-preview/Briefvorlage ansehen.cmd` oder den gestarteten
lokalen Server `http://127.0.0.1:4180/`. Dieser Vorschau-Server schreibt keine
Statistik und benötigt weder Cloudflare noch eine Internetverbindung.

## Datei und Herkunft

- Vom Nutzer ausgewählt und zum Einbau bereitgestellt:
  `C:\Users\anmel\Downloads\Lieber Weihnachtsmann_20261025_145612.pdf`.
- Öffentliche Webkopie:
  `site-assets/downloads/brief-an-den-weihnachtsmann.pdf`.
- PDF, zwei deutsche Seiten; 1.305.145 Bytes (Anzeige: 1,3 MB).
- SHA-256: `f0cf1265b4387ea8d9f0b63769e823c38ecc64d5e3de6df960ade09563392722`.
- Die Datei wird unverändert kopiert, nicht neu gezeichnet, übersetzt oder komprimiert.
- Vorhandene PDF-Metadaten nennen Canva als Creator/Producer und Suvi Virtanen
  als Autorin. Die Nutzerbereitstellung ist die Herkunftsgrundlage; eine
  gesonderte Lizenz-/Rechtekette wurde nicht vorgelegt oder als geprüft ausgegeben.
  Vorhandene Hinweise und Metadaten bleiben erhalten.
- Keine zusätzlichen Schrift-/Bildassets, Dienstbuchungen oder Kosten.

## Platzierung und Texte

Ein schmaler goldener Banner steht oberhalb der Kopfzeile. Deutscher Text:
„Post für den Weihnachtsmann – Eine Briefvorlage zum Ausdrucken.“
Link: „PDF herunterladen“.

Im Malbuchbereich steht vor den Buchcovern ein dauerhafter Downloadbereich mit
dem Titel „Ein Brief an den Weihnachtsmann“, einer kurzen Anleitung und dem
Button „Briefvorlage herunterladen“. Dateiformat, zwei Seiten, Sprache Deutsch
und Größe sind sichtbar. Die englische Oberfläche weist ausdrücklich darauf
hin, dass die PDF deutschsprachig ist; es wurde keine englische PDF erfunden.

Beide Links verwenden denselben Dateipfad und ein natives `download`-Attribut.
Der Worker liefert erfolgreiche Dateiantworten zusätzlich mit
`Content-Type: application/pdf` und
`Content-Disposition: attachment; filename="brief-an-den-weihnachtsmann.pdf"` aus.
Es gibt kein Formular, Konto, E-Mail-Gate oder zusätzliches Browser-Messskript.

## Nur den Banner abschalten

In [site.config.json](../site.config.json) ändern:

```json
{
  "christmasLetterBanner": false
}
```

Nach Übernahme in `main` und erfolgreichem Cloudflare-Build verschwindet nur der
Banner. Der Button im Malbuchbereich, die PDF und deren Downloadzählung bleiben.
Zum Wiedereinschalten den Wert auf `true` setzen und veröffentlichen.
Dies ist eine zentrale Veröffentlichungseinstellung, kein gespeicherter
Besucherzustand und keine neue Cloudflare-Dashboard-Einstellung.

[scripts/build-public.mjs](../scripts/build-public.mjs) erstellt `dist/` aus
einer expliziten öffentlichen Dateiliste und entfernt den markierten Banner
bei `false` aus dem ausgelieferten HTML. Die Quelldatei behält den vollständigen
Banner, damit er wieder eingeschaltet werden kann. Kein JavaScript erforderlich.

Der Wrangler-Buildbefehl lautet jetzt:

```sh
node scripts/build-public.mjs && node --test tests/worker.test.mjs
```

Der bisherige vorbereitende Kopierbefehl im Cloudflare-Dashboard kann bestehen
bleiben. Der neue Wrangler-Build erstellt danach die maßgebliche Fassung.
Bei einer Änderung des Banner-Schalters dürfen nicht nur rohe Quelldateien
ohne diesen Build-Schritt hochgeladen werden.

Die lokale Entwurfsquelle unter `.local-preview/public/` hat dieselben
Downloadstellen, dieselbe PDF und dasselbe Download-Stylesheet erhalten.
Die zentrale Abschaltung gilt für den gebauten Export, nicht automatisch für
eine direkt ohne Build geöffnete alte Entwurfsquelle.

## Downloadzählung

Der genaue PDF-Pfad ist in `DOWNLOADS` in [worker.mjs](../worker.mjs) und in
`assets.run_worker_first` in [wrangler.jsonc](../wrangler.jsonc) aufgenommen.
Erfolgreiche GET-Dateianfragen (Status 200 oder 206) zählen als
`download_request` in der bestehenden Tabelle `daily_stats`.

Es gelten weiterhin DNT/GPC, der grobe Bot-/Prefetch-Ausschluss und die
13-monatige Aufbewahrung. Vorschauen haben keine Produktionsdatenbank und
zählen nicht. Es werden weder Linkquelle (Banner/Button) noch Querystrings,
IP-Adressen, ausgefüllte Briefe oder persönliche Angaben in der Statistik
gespeichert. Beide Downloadstellen erhöhen denselben Dateizähler.

Die Zahlen sind Dateianfragen, keine eindeutigen Personen und kein Nachweis
eines vollständig gespeicherten oder gedruckten Dokuments. Wiederholte und
teilweise Abrufe können mehrfach zählen. Browsercache und Filter können
Anfragen auslassen. Bei deaktivierter Statistik oder D1-Fehlern bleibt der
Download verfügbar; eine Worker-Quotenüberschreitung ist davon getrennt.

In Cloudflare -> D1 -> brainblooms-stats -> Console:

```sql
SELECT day, resource, count
FROM daily_stats
WHERE metric = 'download_request'
ORDER BY day DESC, resource;
```

Die Beschreibung in der Website-Datenschutzerklärung wurde für diese konkrete
Dateianfragezählung in DE/EN aktualisiert. Sonstige Verarbeitungszwecke und die
App-Datenschutzerklärung bleiben erhalten.

## Prüfung

Lokaler Test mit installiertem Edge und tatsächlichem lokalem Cloudflare-Worker:
320/390/768/1440 CSS-Pixel, Deutsch/Englisch, kein seitlicher Überlauf;
390 Pixel mit 200 Prozent Schriftgröße ebenfalls ohne seitlichen Überlauf.
Neue Links mindestens 44 x 44 Pixel. Tastaturfokus sichtbar; Hover-/Druckzustände
unterscheidbar. Keine neuen externen Seitenressourcen und keine JS-Fehler
in den geprüften Ansichten. Der Download funktioniert auch ohne Seiten-JavaScript.

Ein echter Browserklick speichert die PDF mit unverändertem Inhalt; SHA-256
entspricht dem Original. Der lokale Dateiserver beantwortete eine getestete
Range-Anfrage mit zulässigem vollständigem Status 200; der Worker berücksichtigt
auch echte 206-Antworten. Banner-off-Build enthält keinen Banner, aber weiterhin
den dauerhaften Download-Button und die PDF.

Alle 13 automatisierten Worker-Tests bestehen. Sie decken Downloadklassifikation, ausgeschlossene
Anfragen, Dateikopf und unveränderte Bytes, Fehlerantworten und nur einen
aggregierten Datenbankeintrag ohne URL-Abfrageparameter ab.

Zusätzlich wurde der tatsächliche lokale Worker mit lokaler D1-Datenbank
geprüft: ein normaler GET-Download und ein weiterer mit DNT=1 liefern beide
die unveränderte PDF; in der lokalen Datenbank entsteht genau ein
`download_request` für den PDF-Pfad. Die produktive D1-Datenbank wurde dafür
nicht verwendet oder verändert.

Kein physischer Gerätetest, keine vollständige WCAG-/anwaltliche Prüfung.
Lokale Screenshots und Detailergebnisse liegen ausgeschlossen unter
`.local-preview/qa/letter-*`; Original in Downloads bleibt unverändert.
