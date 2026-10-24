# Cloudflare-Hosting und Tagesstatistik

Stand: 24.10.2026. Vollständiges Einstellungs- und Umzugsprotokoll:
[Cloudflare-Betrieb](cloudflare-betrieb.md).

## Aufbau

Worker `brainblooms` liefert die öffentlichen Dateien über das ASSETS-Binding aus
und schreibt die eigenen Tageszähler über STATS_DB in die bestehende D1-Datenbank
`brainblooms-stats`. Die Datenbank-ID ist ein öffentlicher Ressourcenbezeichner,
kein API-Schlüssel. Der EU-Standort ist in den Datenbankeinstellungen zu prüfen.
Die Konfiguration erhält beide Domains und die bisherige workers.dev-Testadresse.

Der Zähler verwendet weder Cookies noch ein Browser-Messskript, localStorage oder
Fingerprinting. In `daily_stats` stehen nur Tag (Europe/Berlin), Zählerart,
kanonischer öffentlicher Seitenpfad und Summe. IP-Adressen, vollständige
User-Agents, Referer, Querystrings und einzelne Aufrufereignisse werden nicht
in dieser Statistik gespeichert. Cloudflares eigene technische Verarbeitung
ist davon getrennt.

Gezählt werden erfolgreiche HTML-Dokumentanfragen auf einer festen Seitenliste.
DNT/GPC, erkennbare Vorababrufe, offensichtliche Bots, Testhosts, Assets,
Redirects und Fehler werden ausgeschlossen. Die Summen sind **Anfragen, keine
eindeutigen Personen**. Wiederholtes Laden kann mehrfach zählen. Nicht erkannte
Bots, Browser-Caches und Speicherfehler begrenzen die Genauigkeit.

Die Website bietet derzeit keine eigenen Download-Dateien an. Google Play ist
ein Demnächst-Banner. Deshalb ist keine Downloadzählung aktiviert. Externe
Store-/Amazon-/Social-Links bleiben normale Links ohne Klicktracking.
Für spätere eigene Dateien muss der exakte Pfad sowohl in DOWNLOADS als auch
in assets.run_worker_first ergänzt werden. Eine gezählte 200/206-Dateianfrage
belegt weder einen vollständigen Download noch eine Installation.

## Deployment

Cloudflare Workers Builds:
- Build command bleibt:
  `mkdir -p dist && cp -R index.html style.css language.js site-assets play datenschutz datenschutz-website impressum terms daten-loeschen delete-data dist/`
- Empfohlener Deploy command: `npx wrangler@4.152.0 deploy`.
  Der bisherige Befehl mit passenden --name-, --assets- und
  --compatibility-date-Werten funktioniert ebenfalls; Wrangler liest die
  Konfigurationsdatei automatisch.
- Vor jedem Wrangler-Deploy führt build.command automatisch
  `node --test tests/worker.test.mjs` aus. Ein fehlgeschlagener Test verhindert
  die Veröffentlichung.
- Der Build-Token muss auf diesen Worker und die bestehende D1-Bindung zugreifen
  können. Keine Tokenwerte in Code, Chat oder Repository speichern.
- Branch-Preview-Builds sind tatsächlich aktiv und mit `npx wrangler preview`
  erfolgreich getestet. `previews.vars.STATS_ENABLED = "false"` und eine leere
  `previews.d1_databases`-Liste halten Vorschauen von der Produktionsstatistik
  fern. Das top-level `preview_urls: false` betrifft die älteren Versions-URLs,
  nicht diese separat eingerichteten Branch-Previews.

Die GitHub-Prüfung verwendet einen Standardrunner des bestehenden öffentlichen
Repositorys, lesende Berechtigungen und keine Secrets. Sie führt denselben
Testlauf und einen Wrangler-Dry-Run aus. Sie veröffentlicht weder Website noch
Datenbankänderungen.

Das Schema unter cloudflare/schema.sql entspricht der bereits manuell
angelegten Tabelle und kann bei Bedarf erneut ausgeführt werden.

## Aktivierung, Aufbewahrung und Auswertung

`vars.STATS_ENABLED` ist auf `"true"` gesetzt. Zum Abschalten im Repository auf
`"false"` ändern und deployen. Dashboard-Änderungen an dieser Variable würden
beim nächsten Deploy von der versionierten Konfiguration überschrieben.
Auch die Bereinigung ist bei ausgeschaltetem Zähler deaktiviert; Abschalten
allein löscht keine gespeicherten Summen.

Die Website-Datenschutzerklärung wurde in den Abschnitten Hosting und
Statistik (DE/EN) angepasst und veröffentlicht. App-Datenschutz, Impressum und sonstige Abschnitte
bleiben inhaltlich erhalten. Die Angaben wurden anhand des Programmcodes und
der unten genannten Anbieterquellen geprüft; dies ist keine anwaltliche
Rechtsprüfung. Cloudflare-Konto-/Auftragsverarbeitungseinstellungen sind vom
Kontoinhaber zu kontrollieren.

Täglich um 03:00 UTC entfernt ein Scheduled Handler Summen, deren Tag mehr als
13 Monate zurückliegt. Bei einem Plattform-/Datenbankausfall erfolgt die
Bereinigung erst nach einem späteren erfolgreichen Lauf.

Auswertung ausschließlich nach Anmeldung in Cloudflare -> D1 -> Console:
```sql
SELECT day, metric, resource, count
FROM daily_stats
ORDER BY day DESC, metric, resource;
```

Tagessummen:
```sql
SELECT day, SUM(count) AS page_requests
FROM daily_stats
WHERE metric = 'page_request'
GROUP BY day
ORDER BY day DESC;
```

Es gibt keine öffentliche Statistik-API und keinen im HTML versteckten Zähler.

## Live-Prüfung und Grenzen

Nach erfolgreichem Deployment beide Domains, /play/, Rechtstextpfade,
Sprachwechsel und STATS_DB-Binding kontrollieren. Vorher und nach einem echten
Seitenaufruf die passende D1-Zeile vergleichen. HEAD, Assets, Opt-out- und
Testhost-Anfragen dürfen nicht zählen. Browser-Reload kann eine 304-Antwort
auslösen und wird dann nicht gezählt; bei Bedarf einen frischen Browseraufruf
verwenden. Den öffentlichen Live-Nachweis kann nur der Kontoinhaber anhand
der geschützten D1-Auswertung bestätigen.

Bei einem D1-Schreibfehler bleibt die ursprüngliche Website-Antwort erhalten.
Ein ausgeschöpftes Worker-Tageskontingent kann dennoch Dokumentanfragen mit
429 ablehnen; Code kann eine Plattformsperre nicht umgehen. Gratisverbrauch
im Cloudflare-Dashboard überwachen. Assets wie Bilder und CSS laufen direkt
über das Asset-Hosting.

Rückweg: in Cloudflare -> Worker -> Deployments die vorherige erfolgreiche
Veröffentlichung wiederherstellen und Domain-Bindungen prüfen. Bei vollständiger
Rückkehr zu GitHub Pages zunächst Worker-Domain-Bindungen entfernen und die
gesicherten Web-DNS-Einträge zurücksetzen. Keine Mail-Einträge ändern.

## Quellen und Prüfung

- https://developers.cloudflare.com/workers/static-assets/binding/
- https://developers.cloudflare.com/workers/wrangler/configuration/
- https://developers.cloudflare.com/d1/configuration/data-location/
- https://www.cloudflare.com/cloudflare-customer-dpa/
- https://www.cloudflare.com/privacypolicy/
- https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/
- https://www.gesetze-im-internet.de/ttdsg/__25.html

9 Tests mit 38 Assertions in isoliertem V8 mit simuliertem URL-Konstruktor und
HTTP-Objekten bestanden. Reale Node-/Wrangler-Ergebnisse werden getrennt über
den GitHub-Check und den Cloudflare-Build ausgewiesen. Inzwischen bestätigt:
alle 9 Node-Tests und Wrangler-Dry-Run erfolgreich; Branch-Preview und
Produktionsbuild von PR #2 erfolgreich. Der Nutzer-Screenshot aus der D1-Konsole
zeigt `2026-10-24 | / | 8` und bestätigt echte Startseiten-Schreibzugriffe.
Ein separater /play/-Zähler- und planmäßiger Bereinigungsnachweis steht aus.

Quellcodeprüfung der geänderten Rechtstextlinks: vorhandene 44px-Linkflächen,
Hover-/Druckzustände und globaler focus-visible-Rahmen greifen weiterhin.
Keine CSS-/Layoutänderung. Browser-/Gerätetest und visuelle Prüfung wurden
hier mangels Browserwerkzeug nicht durchgeführt.
