# Cloudflare-Hosting und eigene Tageszähler

Stand: 24.10.2026. Vorbereitete Umsetzung, Messung absichtlich noch deaktiviert.

## Vorhandene Einrichtung

- Cloudflare Worker: `brainblooms`
- Domains: `brainblooms.de`, `www.brainblooms.de`
- Testadresse: `brainblooms.brainblooms-official.workers.dev`
- D1: `brainblooms-stats`, Tabelle `daily_stats`
- Die D1-Datenbank-ID aus der Nutzeransicht ist in `wrangler.jsonc` eingetragen.
  Sie ist keine Zugangsdatenfreigabe; Zugang erfolgt über Cloudflare-Berechtigungen.
- Der gewünschte EU-Standort muss in den D1-Einstellungen bestätigt werden.
- CNAME und die bisherigen Rechtstexte bleiben in diesem Änderungsvorschlag erhalten.
- `.local-preview/`, Originale, Projektunterlagen und Worker-Dateien werden nicht in
  den öffentlichen Asset-Ordner kopiert.

## Was die Messung leisten kann

Der Worker liefert die Website über `ASSETS` aus. Erst bei
`STATS_ENABLED = "true"` zählt er erfolgreiche HTML-Dokumentanfragen auf einer
festen Liste öffentlicher Seiten. Speicherung: Kalendertag in Europe/Berlin,
Zählerart, kanonischer Seitenpfad, Summe. Keine einzelnen Ereignisdatensätze.

Kein Cookie, Browser-Skript, localStorage, Fingerprint, IP- oder Referer-Speicherung
durch den Zähler. Querystrings und beliebige unbekannte Pfade gelangen nicht in D1.
DNT und GPC führen zum Ausschluss aus der eigenen Zählung. Der User-Agent wird
flüchtig auf offensichtliche Bot-Bezeichnungen geprüft und nicht gespeichert.
Cloudflares technische Verarbeitung ist davon getrennt und muss in den
Datenschutzinformationen berücksichtigt werden.

Die Zahlen sind **Anfragen, keine eindeutigen Personen**. Erneutes Laden zählt
erneut. Nicht erkannte Bots können enthalten sein; Browser-Cache, fehlgeschlagene
Speicherzugriffe und Opt-outs können zu Unterzählung führen.
Redirects und Fehler werden nicht gezählt. Eine gecachte 304-Antwort zählt nicht.

Aktuell bietet die Website keine eigenen Download-Dateien an. Google Play ist
ein Demnächst-Banner. Daher bleibt die Download-Liste leer. Für spätere eigene
Downloads: exakten Dateipfad in `DOWNLOADS` und `assets.run_worker_first` ergänzen.
Dann werden erfolgreiche GET-Dateianfragen (200/206) gezählt; Teilanfragen oder
Wiederholungen können mehrfach zählen. Dies beweist keinen vollständigen
Download und keine Installation. App-Installationen werden im Store ausgewertet.
Externe Amazon-/YouTube-/Social-Links bleiben gewöhnliche Links ohne Klicktracking.

## Veröffentlichung und Aktivierung

1. Änderungen zunächst in einem Branch prüfen. Lokales Testkommando:
   `node --test tests/worker.test.mjs`.
2. Öffentliche Dateien wie bisher in `dist/` kopieren:
   ```sh
   mkdir -p dist && cp -R index.html style.css language.js site-assets play datenschutz datenschutz-website impressum terms daten-loeschen delete-data dist/
   ```
3. In Cloudflare Workers Builds den Deploy-Befehl auf
   `npx wrangler@4.152.0 deploy` setzen. Die Konfigurationsdatei liefert Worker,
   Bindings und Domains. Nicht erneut nur Assets ohne Worker veröffentlichen.
   Den Produktionsbranch erst nach Prüfung übernehmen.
4. Der Build-Token benötigt neben Worker-Schreibrechten Leserechte für D1-Metadaten,
   um die vorhandene Datenbank binden zu können. Bei Berechtigungsfehlern den
   automatisch angelegten Token prüfen; keine Tokenwerte ins Repository schreiben.
5. Zuerst deaktiviert ausliefern. Beide Domains, /play/, Rechtstextpfade und
   Sprachwechsel prüfen. In Bindings muss `STATS_DB` erscheinen.
6. Die öffentliche Website-Datenschutzerklärung nennt noch GitHub Pages als Hosting.
   Diese Angabe muss wegen des bereits durchgeführten Umzugs korrigiert werden.
   Hosting, Cloudflare-Auftragsverarbeitung/internationale Verarbeitung, eigene
   Statistik und Aufbewahrung müssen vor Aktivierung geprüft und verständlich
   beschrieben werden. Bestehende Rechtstexte werden hier nicht eigenständig
   ersetzt oder als geprüft ausgegeben.
7. Erst danach `vars.STATS_ENABLED` auf `"true"` ändern und veröffentlichen.
   Die Variable ist bewusst versioniert; Änderungen nur im Dashboard würden
   beim nächsten Deploy von der Konfiguration überschrieben.
8. Einen echten Seitenaufruf testen und die Änderung in D1 prüfen. Testadresse,
   HEAD-Anfragen, statische Dateien und Opt-out-Anfragen dürfen nicht zählen.
   Ein D1-Ausfall darf die Antwort der Website nicht verändern.

## Auswertung ohne öffentliche Statistikseite

Cloudflare-Anmeldung schützt den Zugriff auf die D1-Konsole.
Es gibt keine öffentliche Lese-API und keinen versteckten HTML-Zähler.

In D1 -> Console:
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

Optional nach festgelegter Aufbewahrungsfrist manuell bereinigen, beispielsweise:
```sql
DELETE FROM daily_stats
WHERE day < date('now', '-13 months');
```

Die 13 Monate sind ein Vorschlag, keine schon vereinbarte Frist.
Eine automatische Löschung ist nicht eingerichtet.

## Kosten, Fehler und Rückweg

Bilder, CSS und JavaScript werden direkt als Assets ausgeliefert; nur die
aufgeführten Dokumentpfade laufen zuerst durch den Worker.
Bei D1-Fehlern wird die Zählung ausgelassen und die Website-Antwort bleibt erhalten.
Bei ausgeschöpftem Worker-Tageskontingent können jedoch gerade diese
Dokumentanfragen mit 429 scheitern. Fehlerbehandlung im Code kann eine
Plattformsperre nicht umgehen. Gratisverbrauch im Dashboard überwachen.

Die Zählung lässt sich mit `STATS_ENABLED = "false"` abschalten.
Bei Plattform-/Quotenproblemen in Cloudflare -> Worker -> Deployments auf die
vorherige erfolgreiche Veröffentlichung mit ausschließlich statischen Assets
zurückrollen und die Domain-Bindungen prüfen. Alternativ kann nach Entfernen der
Worker-Custom-Domain-Bindungen DNS auf die gesicherten GitHub-Pages-Ziele
zurückgestellt werden. Keine Mail-Einträge verändern.

## Validierung dieser Vorbereitung

35 Prüfungen der JavaScript-Logik in isolierter V8-Umgebung bestanden:
Tageswechsel/Sommerzeit, Pfadnormalisierung, Opt-out, Bots, Prefetch,
Statuscodes, ausschließlich aggregierte Datenbankparameter, deaktivierte
Messung, fehlendes Binding und Datenbankfehler. Request-/Response-Objekte und
URL-Konstruktor wurden dabei simuliert. Die beigefügten Node-Tests decken
dieselben Fälle ab; sie wurden hier nicht mit Node ausgeführt.
Wrangler-Build, echte D1-Integration und Live-Zählung stehen noch aus.
