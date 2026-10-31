# BrainBlooms: Cloudflare-Betrieb und Einstellungsprotokoll

Stand: **24.10.2026**, Zeitzone für die Projektkommunikation: Europe/Berlin.
Dieser Bericht dokumentiert den gemeinsam durchgeführten Umzug und den letzten
belegten Stand. Er ist kein automatischer Export aller Cloudflare-Kontoeinstellungen.

## Fortschreibung vom 25.10.2026: Briefvorlage

Diese Erweiterung ist auf ausdrücklichen Nutzerwunsch ausschließlich als lokaler
Offline-Entwurf vorbereitet, nicht veröffentlicht. Die folgenden Änderungen
beschreiben den vorbereiteten Entwurf, nicht den öffentlichen Betriebsstand.

Die folgenden Abschnitte bleiben das Einstellungsprotokoll vom 24.10.2026.
Neu hinzugekommen sind eine konkrete deutsche PDF-Briefvorlage, ein abschaltbarer
Banner und ein dauerhafter Download-Button bei den Malbüchern. Damit sind die
älteren Angaben „keine eigenen Downloads“ seit dieser Erweiterung überholt.
Dateianfragen werden als `download_request` gezählt. `site.config.json` enthält
den zentralen Banner-Schalter; der Wrangler-Build führt jetzt
`node scripts/build-public.mjs && node --test tests/worker.test.mjs` aus.
Der vorhandene Dashboard-Kopierbefehl kann unverändert bleiben. Keine neue
Cloudflare-Datenbank, kein zusätzlicher Dienst und keine Tarifänderung.
Vollständige Beschreibung: [Briefvorlage-Download](briefvorlage-download.md).

## 1. Ergebnis und Nachweise

- Website, Browserdemo und Rechtstextseiten laufen über **Cloudflare Workers mit Static Assets**.
  Cloudflare Pages wurde besprochen, aber nicht als Hostingprodukt eingerichtet.
- GitHub-Repository: [SuedenXP/chef-sort-legal](https://github.com/SuedenXP/chef-sort-legal).
  Produktionszweig: `main`.
- Öffentliche Adressen: https://brainblooms.de und https://www.brainblooms.de .
  Beide sind als eigene Produktionsdomains am selben Worker angebunden.
- Testadresse: https://brainblooms.brainblooms-official.workers.dev .
- Worker: `brainblooms`. D1-Datenbank: `brainblooms-stats`.
- Domainverwaltung/Registrierung und die vorhandenen Domain-Maildienste bleiben bei IONOS.
  Es gab keinen Registrartransfer und keinen Umzug der Postfächer.
- Cloudflare-Tarif: **Free**. Es wurde kein kostenpflichtiges Upgrade beauftragt.
  Kostenpflichtige Tarife oder zusätzliche Dienste bleiben zustimmungspflichtig.
- Die eigene Statistik ist aktiv, ohne Cookies oder Browser-Messskript.
  Es werden Aufrufanfragen gezählt, keine eindeutigen Personen.
- Umsetzung über [PR #2](https://github.com/SuedenXP/chef-sort-legal/pull/2).
  Produktionscommit: [b091ec8](https://github.com/SuedenXP/chef-sort-legal/commit/b091ec8d34cf906e5b583148ae6f947f91c8c7b5).
- GitHub meldet für diesen Commit erfolgreichen Worker-Build und erfolgreiche
  Prüfungen; auch die weiterhin vorhandene GitHub-Pages-Veröffentlichung war erfolgreich.
- Der Nutzer bestätigte Website, beide Adressen, Demo und E-Mail-Test im Verlauf.
  Das abschließende Funktionieren der Website wurde vor dem Statistik-Update bestätigt.
- Live-D1-Nachweis nach dem Statistik-Update: Nutzer-Screenshot zeigt
  `2026-10-24 | / | 8`. Damit ist die Speicherung von Startseitenaufrufen belegt.
  Eine gespeicherte `/play/`-Zeile und eine echte planmäßige Löschung wurden
  nicht separat durch einen Screenshot nachgewiesen.

Die Zahlen und Einstellungen sind Momentaufnahmen, keine fortlaufenden Messwerte.

## 2. Wie Änderungen künftig veröffentlicht werden

Normaler Ablauf: Website-Dateien bearbeiten -> in `main` übernehmen ->
Cloudflare Workers Builds veröffentlicht automatisch. Für normale Text-, Bild-
und Codeänderungen ist kein zusätzlicher Dashboard-Schritt vorgesehen.
Tests laufen vor jedem Wrangler-Deploy. Fehlgeschlagene Builds müssen geprüft werden.

Dashboard-Arbeit ist insbesondere bei Domains/DNS, Tokenrechten, Tarif-/Dienständerungen
oder Buildfehlern erforderlich. Die versionierte [wrangler.jsonc](../wrangler.jsonc)
ist die maßgebliche Quelle für Worker-Einstellungen. Dort definierte Werte nicht
nur im Dashboard ändern, weil der nächste Deploy sie wieder überschreiben kann.

GitHub Pages wurde nicht deaktiviert. Die Domain zeigt jetzt auf den Worker,
nicht mehr auf GitHub Pages. Die frühere Pages-Konfiguration und CNAME-Datei
bleiben für die Historie und einen möglichen Rückweg erhalten.

## 3. Domain und Nameserver

Bei IONOS wurden die Standard-Nameserver durch diese beiden ersetzt:

| Funktion | Wert |
| --- | --- |
| Cloudflare-Nameserver 1 | `gemma.ns.cloudflare.com` |
| Cloudflare-Nameserver 2 | `keenan.ns.cloudflare.com` |
| Alter IONOS-Nameserver | `ns1046.ui-dns.biz` |
| Alter IONOS-Nameserver | `ns1062.ui-dns.com` |
| Alter IONOS-Nameserver | `ns1104.ui-dns.org` |
| Alter IONOS-Nameserver | `ns1126.ui-dns.de` |

IONOS bestätigte die Änderung; Cloudflare meldete anschließend aktive Verarbeitung.
Die IONOS-DNS-Oberfläche zeigte danach „DNS-Einstellungen sind inaktiv“.
Das ist bei externen Nameservern erwartbar: laufende DNS-Änderungen erfolgen
in Cloudflare, nicht in der nun inaktiven IONOS-Zone.

**DNSSEC: nicht abschließend nachgewiesen.** Nach dem Wechsel zeigte IONOS nur,
dass die dortige Funktion Standard-Nameserver voraussetzt. Daraus wurde weder
„DNSSEC aus“ noch „alle alten DS-Einträge entfernt“ abgeleitet. Ein öffentlicher
Prüfversuch war technisch nicht möglich. Cloudflare-Aktivierung allein ersetzt
diesen Nachweis nicht. DNSSEC später gesondert prüfen; keine pauschale Freigabe
zum Zurücksetzen der Domain oder Nameserver.

## 4. DNS: erhaltene Mail- und Hilfseinträge

Der automatische Cloudflare-Import war unvollständig: die beiden DKIM-CNAMEs
wurden manuell ergänzt. Die folgenden Werte wurden mit der IONOS-Ansicht
abgeglichen. Die unveränderten Einträge wurden nach dem späteren Domainbinden
nicht nochmals vollständig als DNS-Export erfasst.

| Typ | Name | Ziel/Inhalt | Proxy / Priorität |
| --- | --- | --- | --- |
| MX | `@` | `mx00.ionos.de` | DNS only; Priorität 10 |
| MX | `@` | `mx01.ionos.de` | DNS only; Priorität 10 |
| TXT | `@` | `v=spf1 include:_spf-eu.ionos.com ~all` | DNS only; Wert vom Nutzer bestätigt |
| CNAME | `autodiscover` | `adsredir.ionos.info` | DNS only |
| CNAME | `_dmarc` | `dmarc.ionos.de` | DNS only |
| CNAME | `_domainconnect` | `_domainconnect.ionos.com` | DNS only |
| CNAME | `s1-ionos._domainkey` | `s1.dkim.ionos.com` | DNS only; manuell ergänzt |
| CNAME | `s2-ionos._domainkey` | `s2.dkim.ionos.com` | DNS only; manuell ergänzt |

Mail-/Verifikationseinträge nicht auf „Proxied“ umstellen. Die TTL-Auswahl war
in den Screenshots teilweise verkürzt; keine nicht belegte Minuten-/Sekundenzahl
daraus ableiten. Für die früheren proxied Webeinträge war TTL „Auto“ sichtbar.

Zum eigentlichen Hostingwechsel wurden **nur** diese bisherigen Webeinträge entfernt:

| Typ | Name | Bisheriges Ziel |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `suedenxp.github.io` |

Danach wurden `brainblooms.de` und `www.brainblooms.de` unter Worker -> Domains
als **Production** hinzugefügt. Cloudflare verwaltet die zugehörigen Web-DNS-Ziele.
Das konkrete automatisch erzeugte DNS-Ziel ist im Verlauf nicht als abschließender
Export dokumentiert; keine feste Worker-IP oder CNAME-Adresse erfinden.

Es wurde **keine www-Weiterleitungsregel** eingerichtet. Beide Hostnamen liefern
denselben Worker aus. Die vorhandenen kanonischen URLs verweisen auf die Hauptdomain.

E-Mail-Nachweis: Der Nutzer bestätigte nach der Umstellung „testmail geht“.
Eine unabhängige Prüfung aller SPF-/DKIM-/DMARC-Header wurde nicht durchgeführt.
Die Kontaktadresse auf der Website blieb unverändert; der Domain-Mailtest
ist nicht mit einer Änderung der veröffentlichten Kontaktadresse gleichzusetzen.

## 5. SSL/TLS und sichtbare Sicherheitseinstellungen

| Einstellung | Letzter belegter Stand |
| --- | --- |
| SSL/TLS encryption mode | Von `Full` auf **`Full (Strict)`** geändert |
| Funktionstest danach | Nutzer bestätigte Website, www und Demo als funktionierend |
| Automatic SSL/TLS | Nicht als Modus ausgewählt; manuell Full (Strict) |
| Automatic key exchange | Im gezeigten Dialog aus; nicht geändert |
| Post-quantum hybrid (Compliance) | Im gezeigten Dialog nicht angehakt; nicht geändert |
| FIPS (Compliance) | Im gezeigten Dialog nicht angehakt; nicht geändert |
| Client-side security | Im gezeigten Quickstart aus; nicht aktiviert |
| Bot Fight Mode | Im gezeigten Quickstart aus; nicht aktiviert |
| Leaked credentials mitigation | „Activate“ sichtbar; nicht aktiviert |
| Always Use HTTPS / HSTS | Keine belegte Änderung; aktueller Status nicht erhoben |
| Origin-Firewall auf Cloudflare-IP-Adressen beschränken | Beim damaligen GitHub-Hosting übersprungen; keine Firewalländerung durchgeführt |

Full (Strict) betrifft die Verbindung zu einem vorgelagerten Ursprung.
Nach dem Umzug liegt die Website direkt auf Workers Static Assets; es gibt
keinen separat von uns betriebenen GitHub-Ursprungsserver für diese Domains.

Die SSL/TLS-Verbindungszahlen im Dashboard sind technische Anfragen,
keine eindeutigen Besucher und nicht identisch mit der eigenen Tagesstatistik.

## 6. Konto, Bot-Vorgaben und nicht bestätigte Auswahl

- Ein vorhandenes Cloudflare-Konto wurde verwendet.
- E-Mail-Bestätigung wurde wegen des Dashboard-Banners empfohlen.
  Die abschließende Bestätigung wurde nicht separat belegt.
- Zwei-Faktor-Anmeldung wurde empfohlen, aber nicht als aktiviert nachgewiesen.
- Beim Domain-Onboarding wurden folgende **Empfehlungen** gegeben:
  Anzeigen-Monetarisierung aus, Suchmaschinen erlauben, KI-Agenten nach
  gewünschter Sichtbarkeit erlauben, KI-Training auf Wunsch blockieren,
  Bot Preference Sync zur robots.txt-Synchronisierung.
- Der Screenshot vor dem Fortfahren zeigte Search/Agent/Training jeweils Allow
  und Bot Preference Sync an. Die endgültige Auswahl nach der Empfehlung wurde
  nicht erneut gezeigt. **Training blockiert ist daher nicht bestätigt.**
- Bot-/robots.txt-Vorgaben sind keine Garantie, dass alle Crawler sie beachten.
- Keine Identitätsdaten, Passwörter oder API-Tokenwerte in dieser Dokumentation.

## 7. Git-Verbindung und Cloudflare-Builds

| Einstellung | Belegter Stand |
| --- | --- |
| Repository | `SuedenXP/chef-sort-legal` |
| Projekt-/Workername | `brainblooms` |
| Production branch | `main` |
| Root directory / Path | `/` |
| Disable builds | Im Screenshot aus; automatische Builds später nachgewiesen |
| Protect with Cloudflare Access | Beim Anlegen aus; öffentliche Seiten bleiben ohne Anmeldung |
| Enable Preview builds | Tatsächlich aktiv: Vorschau-Builds von PR #2 wurden automatisch ausgeführt |
| Include paths | `*` im Screenshot |
| Exclude paths | `node_modules/**, .git/` im Screenshot |
| Build variables / secrets | Keine zusätzlichen Buildvariablen eingerichtet |
| Build cache | Im Screenshot an |
| Deploy Hooks | Im Screenshot keine |
| API token | Automatischer Build-Token; Name im ersten Log `brainblooms build token` |
| Tokenproblem | Einmal „Configured API token unavailable“ angezeigt; Neuanlage empfohlen; spätere Deploys erfolgreich |
| Exakte Tokenrechte / Ablaufdatum | Nicht als finaler Export erhoben; keine Tokenwerte gespeichert |

Tatsächlich in den erfolgreichen anfänglichen Produktionslogs verwendeter Deploy-Befehl:

```sh
npx wrangler@4 deploy --name brainblooms --assets ./dist --compatibility-date 2026-10-19
```

Empfohlene vereinfachte, versionsgebundene Form:

```sh
npx wrangler@4.152.0 deploy
```

Eine spätere manuelle Änderung dieses Dashboard-Felds wurde nicht belegt.
Daher die Empfehlung nicht als schon bestätigten Dashboard-Istwert ausgeben.

Build-Befehl für die öffentlichen Dateien:

```sh
mkdir -p dist && cp -R index.html style.css language.js site-assets play datenschutz datenschutz-website impressum terms daten-loeschen delete-data dist/
```

Damit werden Website, Demo, benötigte Assets und Rechtstextpfade übernommen.
Projektunterlagen, Tests, Workerquelltext, Originalbilder und lokale Vorschau
werden nicht in `dist/` kopiert. Die Repository-Datei `CNAME` bleibt erhalten,
wird aber nicht als Worker-Asset benötigt.

## 8. Versionierte Worker-Einstellungen

Quelle: [wrangler.jsonc](../wrangler.jsonc), im Produktionscommit zurückgelesen.

| Einstellung | Wert |
| --- | --- |
| `name` | `brainblooms` |
| `main` | `worker.mjs` |
| `compatibility_date` | `2026-10-19` – Laufzeitkompatibilität, nicht das Datum des Umzugs |
| `send_metrics` | `false` – Wrangler-Telemetrie abgeschaltet; keine Aussage über Cloudflares technische Verarbeitung |
| `workers_dev` | `true` |
| `preview_urls` | `false` für die älteren Versions-Preview-URLs; separate neue Branch-Previews sind eingerichtet |
| `assets.directory` | `./dist` |
| `assets.binding` | `ASSETS` |
| `vars.STATS_ENABLED` | `"true"` als Zeichenfolge |
| `d1_databases[0].binding` | `STATS_DB` |
| `d1_databases[0].database_name` | `brainblooms-stats` |
| `d1_databases[0].database_id` | `2d268058-8d1a-47f2-9809-3756e1ea238e` |
| `routes` | `brainblooms.de` und `www.brainblooms.de`, jeweils `custom_domain: true` |
| `observability.enabled` | `false` |
| `build.command` | `node --test tests/worker.test.mjs` |
| `triggers.crons` | `0 3 * * *` – täglich 03:00 UTC, also 04:00 MEZ / 05:00 MESZ |
| `previews.vars.STATS_ENABLED` | `"false"` |
| `previews.d1_databases` | Leere Liste: keine Produktionsdatenbank in Branch-Previews |

`assets.run_worker_first` nennt nur Dokumentpfade:
`/`, `/index.html` sowie jeweils den Pfad ohne Slash, mit Slash und mit
`/index.html` für `play`, `impressum`, `datenschutz-website`, `datenschutz`,
`terms`, `daten-loeschen` und `delete-data`.
Bilder, CSS, JavaScript und Schriften laufen direkt über das Asset-Hosting.

Weitere sichtbare Worker-Einstellungen beim Einrichten:
Logs, Traces und Issues aus; keine Exports oder Bindings an andere Dienste;
Placement „Default“; **Worker-Runtime-Cache „Disabled“**.
Letzteres ist nicht mit dem Buildcache oder Cloudflares allgemeinem CDN-Cache
gleichzusetzen. Keine Queues, R2-Buckets, E-Mail-Routen oder zusätzlichen Dienste
wurden für den Zähler eingerichtet. Der später im Code ergänzte Cron ist
gegenüber dem früheren Screenshot „No cron triggers configured“ der neuere Stand.

## 9. Datenbank und Auswertung

| Punkt | Stand |
| --- | --- |
| Datenbank | `brainblooms-stats` |
| Schema | [cloudflare/schema.sql](../cloudflare/schema.sql) |
| Tabelle | `daily_stats` |
| Primärschlüssel | `(day, metric, resource)` |
| Zeitzone für Tageszuordnung | `Europe/Berlin`, einschließlich Sommer-/Winterzeit |
| Standort | EU-Jurisdiktion beim Erstellen empfohlen; abschließender Einstellungsnachweis fehlt |
| Zugriff | D1-Konsole nach Cloudflare-Anmeldung; keine öffentliche Statistik-API |
| Aufbewahrung | 13 Monate; tägliche SQL-Bereinigung im Scheduled Handler |
| Live-Nachweis | `2026-10-24 | / | 8` im Nutzer-Screenshot |

Datenbank wurde im Dashboard erstellt; Tabelle über die Console angelegt.
Die Abfrage wurde erfolgreich bestätigt. Die Bindung ließ sich anfangs nicht
anlegen, weil ein reines Static-Assets-Projekt keine D1-Bindung aufnehmen konnte.
Die endgültige Lösung ist `worker.mjs` mit ASSETS und STATS_DB in Wrangler.

Aktuelle Tabellendefinition:

```sql
CREATE TABLE IF NOT EXISTS daily_stats (
  day TEXT NOT NULL,
  metric TEXT NOT NULL,
  resource TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, metric, resource)
);
```

Alle Summen anzeigen:

```sql
SELECT day, metric, resource, count
FROM daily_stats
ORDER BY day DESC, metric, resource;
```

Aufrufe je Tag zusammenfassen:

```sql
SELECT day, SUM(count) AS page_requests
FROM daily_stats
WHERE metric = 'page_request'
GROUP BY day
ORDER BY day DESC;
```

Seitensummen über den gespeicherten Zeitraum:

```sql
SELECT resource, SUM(count) AS page_requests
FROM daily_stats
WHERE metric = 'page_request'
GROUP BY resource
ORDER BY page_requests DESC;
```

Die SQL-Konsole ist Verwaltung, keine öffentlich eingebettete Anzeige.

## 10. Was gezählt wird und was nicht

**Gezählt:** erfolgreiche GET-Anfragen mit HTML-Antwortstatus 200 und
Dokumentanforderung auf den beiden Produktionshosts für bekannte öffentliche
Seiten. Die Ressource wird auf einen festen kanonischen Pfad normalisiert.
Ein atomarer SQL-Upsert erhöht die zugehörige Tageszeile.

**Ausgeschlossen:** andere Hosts, HEAD/POST, statische Asset-Anfragen,
unbekannte Seitenpfade, Redirects, 304-/Fehlerantworten, erkennbare Vorababrufe,
offensichtliche Bots und DNT-/GPC-Anfragen mit Wert 1.
Die Bot-Erkennung ist ein grober User-Agent-Filter, kein vollständiger Schutz.

**Eigene gespeicherte Daten:** Tag, Zählerart, öffentlicher Seitenpfad, Summe.
Keine IP-Adressen, vollständigen User-Agents, Referer, Querystrings,
Besucherkennungen oder einzelnen Ereignisdatensätze in der eigenen Statistik.
Der User-Agent wird zum groben Bot-Ausschluss flüchtig geprüft.
Die unvermeidliche technische Verarbeitung durch Cloudflare ist separat zu betrachten.

**Keine eindeutigen Besucher:** Ein neuer Aufruf derselben Person kann erneut
zählen. Aus dem bestehenden Schema kann SQL DISTINCT keine fehlende
Besucheridentität rekonstruieren. Besucherwiedererkennung über Cookies oder
IP-/Browsermerkmale wurde nur besprochen und **nicht eingebaut**.
Ein Hash ist nicht automatisch anonym; keine solche Erkennung nachträglich
ohne geklärten Auftrag und Datenschutzprüfung ergänzen.

**Historischer Stand vom 24.10.2026, vor den Weihnachtsbrief-PDFs:** Es gab
keine eigenen Download-Dateien; `DOWNLOADS` war leer. Externe
Amazon-/Social-/YouTube-Links blieben normale Links ohne Klickstatistik oder
Installationszählung.

Seit 31.10.2026 zählt der Worker erfolgreiche Anfragen für genau drei
Briefvorlagen getrennt als `download_request`; diese Pfade sind zusätzlich in
`assets.run_worker_first` eingetragen. Status 200/206 bezeichnet Dateianfragen,
keine eindeutigen Personen und keinen Nachweis eines vollständig gespeicherten
Dokuments. Details und Abfrage: [Download-Protokoll](briefvorlage-download.md).

Browser-Caches, Opt-outs, Bots, Datenbankfehler und Wiederholungen begrenzen die
Genauigkeit. Eine sichtbare 8 ist keine Aussage „acht Personen“.

## 11. Datenschutz und Seitenumfang

Veröffentlicht wurde die gezielte Anpassung der Website-Erklärung unter
`/datenschutz-website/`, jeweils Deutsch und Englisch:

- Abschnitt 2: Cloudflare-Hosting, technische Anfragedaten, Anbieterquellen und
  internationale Verarbeitung statt der veralteten GitHub-Pages-Hostingangabe.
- Abschnitt 6: eigene aggregierte Messung, Grenzen, DNT/GPC, Aufbewahrung,
  externe Links und Abgrenzung zu möglichen Cloudflare-Sicherheitscookies.

Der eigene Zähler setzt keine Cookies und benötigt kein Browser-Messskript.
Daraus wurde keine allgemeine Garantie abgeleitet, dass Cloudflare niemals
Sicherheitscookies setzt oder jede Website-Analyse einwilligungsfrei wäre.
Anbieterverarbeitung und Konto-/Vertragsangaben müssen weiterhin zutreffen.

App-Datenschutz unter `/datenschutz/` und Impressum wurden dabei nicht ersetzt.
`/terms/` bleibt die vorhandene Weiterleitung. Kein neuer Login für die
öffentliche Website; keine Einbettungen, keine Werbeprofile, kein Cookiebanner
durch den eigenen Zähler ergänzt.

Die frühere Markdown-Textquelle
`docs/datenschutzerklaerung-website-entwurf-de-en.md` ist historischer Entwurfsstand
und wurde bei diesem Umzug nicht zur aktuellen Cloudflare-Textquelle gemacht.
Für die veröffentlichte Fassung ist `datenschutz-website/index.html` maßgeblich.

Quellenprüfung anhand von Cloudflare-Anbieterinformationen und Implementierung;
keine anwaltliche Freigabe oder vollständige WCAG-Konformität behauptet.

## 12. Tests, GitHub-Prüfung und Fehlerkorrekturen

Dateien: [worker.mjs](../worker.mjs), [Tests](../tests/worker.test.mjs),
[Workflow](../.github/workflows/cloudflare-checks.yml).

- 9 Tests: Berliner Tageswechsel/Sommerzeit, Pfadnormalisierung,
  Opt-out-/Bot-/Prefetch-Ausschluss, Statuscodes und Methoden, nur aggregierte
  DB-Parameter, deaktivierte Messung, fehlende/ausfallende Datenbank,
  einmaliges Schreiben und Bereinigung.
- Zuerst 38 Assertions mit simulierten HTTP-/URL-Objekten in isoliertem V8.
  Danach echter Node-Testlauf in GitHub Actions: 9 bestanden, 0 fehlgeschlagen.
- Wrangler 4.152.0 Dry-Run erfolgreich; ASSETS, STATS_DB und STATS_ENABLED erkannt.
- Erfolgreiche Cloudflare-Branch-Vorschau, danach erfolgreicher Produktionsbuild.
- Erfolgreiches D1-Schreiben durch Nutzer-Screenshot belegt.
- Linkzustände anhand der vorhandenen legal.css geprüft: Hover, gedrückt,
  focus-visible und vorhandene Linkflächen. Kein neuer visueller Browser- oder
  physischer Gerätetest für diese Textänderungen. Frühere Website-Tests sind
  separat in DEPLOYMENT.md dokumentiert.
- Der damalige Web-Lesezugriff des Assistenten auf die Live-Domain scheiterte
  technisch. Keine eigene vollständige Live-Browserprüfung daraus ableiten.

Workflow-Einstellungen: Standardrunner `ubuntu-24.04`, Timeout 5 Minuten,
`contents: read`, Checkout auf festem Commit
`34e114876b0b11c390a56381ad16ebd13914f8d5`,
`persist-credentials: false`, keine hinterlegten Nutzer-Secrets,
`WRANGLER_SEND_METRICS=false`.
Er kopiert die öffentlichen Dateien und führt
`npx --yes wrangler@4.152.0 deploy --dry-run` aus. Er veröffentlicht nicht selbst.
Er wird für passende Änderungen an Worker, Konfiguration, Tests, Schema,
Website-Datenschutz oder dem Workflow auf PRs und main ausgelöst.
Unabhängig davon laufen die Worker-Tests vor jedem Wrangler-Deploy.

Behobene Einrichtungsfehler:

| Fehler | Korrektur |
| --- | --- |
| Rootdomain mit `www.` im Onboarding | `brainblooms.de` ohne Subdomain verwendet |
| DKIM beim DNS-Import übersehen | Beide DKIM-CNAMEs manuell ergänzt |
| Mail-/Hilfs-CNAMEs zunächst Proxied | Auf DNS only gestellt |
| Nameserverübernahme ausstehend | Auf Cloudflare-Aktivierung gewartet |
| `compatibility_date` fehlte | Auf 2026-10-19 gesetzt |
| API-Token als unavailable angezeigt | Neuanlage empfohlen; spätere Deploys erfolgreich |
| D1-Binding bei rein statischem Worker nicht möglich | Eigentlichen Worker-Code und Wrangler-Konfiguration ergänzt |
| `wrangler preview`: previews-Block fehlt | previews mit deaktivierter Messung und leerer D1-Liste ergänzt |
| Lokaler Dateizugriff des Assistenten defekt | Direkte GitHub-Verbindung verwendet; kein manueller Codekopierweg nötig |

Die erste Vermutung „kein Schreibzugriff möglich“ war falsch:
Der direkte GitHub-Zugang hatte Schreibrechte. Die Umsetzung erfolgte im Branch
`cloudflare/aggregate-statistics`, dann über PR #2 nach main.
Die wesentlichen Zwischenstände waren ed565af, 0e7e21a und e32f36d;
der zusammengeführte Produktionsstand ist b091ec8.

## 13. Kosten, Grenzen, Schutz lokaler Daten

Kein eigener gemieteter Server, kein eigener dauerhaft laufender Rechner,
keine R2-/Analytics-/zusätzliche Hostingbuchung für den Zähler.
Kostenkontrolle bezieht sich auf den bestehenden Cloudflare-Free-Tarif;
keine pauschale Zusicherung unbegrenzter kostenloser Nutzung.

Die Einrichtung zeigte 100.000 Worker-Anfragen pro Tag als Gratisgrenze.
Die tatsächlich geltenden Kontingente und Konditionen müssen bei späteren
Änderungen im Konto geprüft werden; kein automatisches kostenpflichtiges Upgrade.

D1-Schreibfehler werden im Zähler abgefangen und verändern die Website-Antwort
nicht. Eine plattformseitig ausgeschöpfte Worker-Quote kann Dokumentanfragen
dennoch mit 429 ablehnen. Die Programmfehlerbehandlung verhindert diese
Plattformsperre nicht. Bei ausgefallener Bereinigung werden alte Summen
beim nächsten erfolgreichen Lauf gelöscht.

In .gitignore ergänzt: `/dist/`, `/.wrangler/`, `/.dev.vars`,
`/.dev.vars.*`, `/.env`, `/.env.*`. Bestehende Ausschlüsse für
`.local-preview/` und Originalcover bleiben erhalten.
Keine Änderungen am Unity-Projekt, keine Übernahme lokaler Legal-Unterlagen.

## 14. Betrieb und Rückweg

**Statistik abschalten:** In Wrangler `vars.STATS_ENABLED` auf `"false"` setzen
und veröffentlichen. Dann werden keine neuen eigenen Summen geschrieben.
Der Scheduled Handler ist ebenfalls deaktiviert; vorhandene Daten deshalb
bei gewünschter Löschung gesondert in D1 verwalten. Abschalten allein löscht
keine bereits gespeicherten Summen.

**Cloudflare-Rollback:** In Worker -> Deployments einen bekannten funktionierenden
Produktionsstand wiederherstellen. Bindings, Domainzuordnung und Cron danach prüfen.
D1-Daten/Schema werden durch Worker-Rollbacks nicht automatisch zurückgesetzt.

**Vollständig zurück zu GitHub Pages:** zuerst den Stand und gültiges HTTPS dort
prüfen; dann die beiden Worker-Custom-Domain-Bindungen entfernen und die
gesicherten vier A-Einträge sowie www-CNAME wiederherstellen.
E-Mail-Einträge unangetastet lassen. Ein Nameserverrückwechsel zu IONOS ist für
einen reinen Hostingrückweg nicht zwingend; bei einem DNS-Rückwechsel sämtliche
aktuellen Einträge und DNSSEC vorher gesondert abgleichen.
Das ist ein dokumentierter Rückweg, kein Auftrag ihn jetzt auszuführen.

## 15. Noch zu bestätigende Punkte

- DNSSEC-/DS-Status nach dem Nameserverwechsel.
- Tatsächliche EU-Jurisdiktion in den D1-Einstellungen.
- Abschließende E-Mail-Verifikation und Zwei-Faktor-Anmeldung im Cloudflare-Konto.
- Tatsächliche finale KI-Crawler-/Training-/Bot-Preference-Sync-Auswahl.
- Vollständiger aktueller DNS-/TTL-Export nach dem Worker-Domainbinden.
- Tokenumfang und Ablaufdatum, ohne Tokenwert zu dokumentieren.
- Cloudflare-Konto-/Auftragsverarbeitungseinstellungen und genaue dienstbezogene
  Anbieter-Speicherfristen.
- Separater Nachweis einer /play/-Zählerzeile und eines echten Bereinigungslaufs.

Diese Punkte sind offene Nachweise, keine pauschale Aussage, dass etwas falsch
eingestellt sei. Keine Einstellungen wurden allein zur Dokumentation verändert.

## Weiterführende Unterlagen

- [Technische Statistik-Anleitung](cloudflare-statistics.md)
- [Veröffentlichungshistorie](../DEPLOYMENT.md)
- [Projektregeln und aktueller Auftrag](../AGENTS.md)
- [Aktuelle Worker-Konfiguration](../wrangler.jsonc)
