# Website-Datenschutz: technischer Prüfvermerk

**Stand:** 21.10.2026  
**Geprüfte Website-Fassung:** Git-Commit `72ffa21` (`2026-10-19`)  
**Zweck:** Technische Tatsachen und offene Punkte für eine eigenständige Datenschutzerklärung nur für die Website festhalten. Die App-Datenschutzerklärung ist keine Grundlage für den Website-Text; aus ihr wurde auf Nutzerwunsch nur die Aufbewahrungsfrist für Support-E-Mails übernommen.

## Ergebnis der Quelltextprüfung

Die Website ist eine statische GitHub-Pages-Website. In den geprüften Website-Dateien fanden sich keine Analyse- oder Werbeskripte, keine eingebetteten YouTube- oder Social-Media-Inhalte, kein Kontakt- oder Löschformular mit eigener Datenübermittlung und kein Website-Backend. Es fanden sich auch keine Cookies, Analyse-IDs, `fetch`-/XHR-Aufrufe, `sendBeacon`, WebSockets oder Service Worker.

Die Seiten laden ihre Bilder, Schriften und Skripte von der eigenen Website. YouTube, Instagram, TikTok, Pinterest und Amazon sind gewöhnliche externe Links. Ein Besuch der jeweiligen Plattform wird erst ausgelöst, wenn jemand den Link anklickt. Der Kontaktlink öffnet das E-Mail-Programm des Besuchers; die Website versendet selbst keine Nachricht.

Die Sprachwahl erkennt zunächst die Browsersprache. Eine ausdrücklich gewählte Sprache wird lokal im Browser gespeichert (`localStorage`). Die Vorschau-Anmeldung zeigt ein Anmeldeformular; die Zugangsdaten werden clientseitig geprüft, nicht an einen Server gesendet. Der Freischaltstatus wird für die Sitzung in `sessionStorage` gehalten. Diese Anmeldung ist eine clientseitige Vorschau-Sperre, keine Server-Authentifizierung; sie soll vor dem öffentlichen Start entfernt werden. Zugangsdaten sind in diesem Vermerk nicht enthalten.

Die `/play/`-Demo hält Spielzustand und Timer während der laufenden Seite im Arbeitsspeicher. In der geprüften Fassung werden Spielfortschritt und Demo-Eingaben nicht dauerhaft gespeichert und nicht an einen Spielserver gesendet.

## Gegenprüfung anhand vorhandener Angaben

Der vorhandene App-Datenschutzentwurf enthält einen eigenen Abschnitt zu GitHub Pages. Er war ein Vergleichspunkt für die technischen Hosting-Angaben, wird aber nicht als Website-Datenschutzerklärung übernommen.

Die vorhandenen Angaben sagen, die Website setze keine Cookies und binde keine fremden Dienste ein. Das passt zu den geprüften Dateien. Eine eigenständige Website-Erklärung muss zusätzlich `localStorage` für die manuell gewählte Sprache und `sessionStorage` für die vorübergehende Vorschau-Sperre mit Zweck und Speicherdauer transparent beschreiben. Die Vorschau-Sperre soll vor dem öffentlichen Start entfernt werden; danach entfällt dieser Speicherzweck.

Der Abschnitt über „technische Protokolle unseres Servers“ beschreibt ausdrücklich Verbindungen der **App** zu unserem Google-Cloud-Server. Diese 30-Tage-Frist ist nicht die Aufbewahrungsfrist für GitHubs Website-Sicherheitsprotokolle. Der Website-Abschnitt des Entwurfs sagt zutreffend, dass GitHub keine feste Frist nennt und BrainBlooms die Protokolle nicht einsehen kann.

Support-E-Mails werden dem Entwurf zufolge sechs Monate nach Abschluss der Anfrage gelöscht, außer eine längere Aufbewahrung ist gesetzlich erforderlich. Das betrifft die Supportkorrespondenz, nicht die GitHub-Pages-Protokolle.

## GitHub Insights und Website-Besuche

`Insights → Traffic` zeigt Repository-Traffic, zum Beispiel Besuche der Repository-Seiten, vollständige Klone, Verweisquellen und beliebte Repository-Inhalte. GitHub zeigt dabei die letzten 14 Tage; die Besucher- und Klondaten werden stündlich aktualisiert. Diese Graphen messen **nicht** die Besuche von `brainblooms.de`. Dass ein Besuch der Website dort nicht erscheint, sagt nichts darüber aus, ob GitHub Pages Sicherheitsprotokolle führt.

Die Quelltextprüfung fand keinen Website-Besucherzähler. GitHub Pages protokolliert laut GitHub IP-Adressen zu Sicherheitszwecken; diese Protokolle sind für BrainBlooms nicht als Website-Statistik verfügbar. Für sichtbare Website-Besucherzahlen müsste eine zusätzliche Messlösung gewählt werden. Das wäre eine neue Datenverarbeitung und müsste vor einer Einführung technisch und rechtlich geprüft sowie im Datenschutzentwurf abgebildet werden. Es wurde keine Messlösung eingerichtet.

**Nutzerentscheidung:** Es wird kein Besucherzähler und kein zusätzlicher Analysedienst eingebaut. Die Website bleibt ohne eigene Besucherstatistik.

## Was noch offen ist

1. **Verantwortliche Stelle:** Impressum und Datenschutzerklärung enthalten noch Platzhalter für den vollständigen rechtlichen Namen und die ladungsfähige Anschrift. Die zuständige Aufsichtsbehörde hängt vom tatsächlichen Sitz ab.
2. **Browser-Speicherungen:** Die Website-Erklärung muss die gewählte Sprache (`localStorage`) und die Vorschau-Freischaltung (`sessionStorage`) samt Zweck und Speicherdauer aufführen. Eine Datenschutzbehörde nennt eine vom Nutzer ausgewählte Sprache als Beispiel für eine erforderliche Browser-Speicherung, wenn die Standardeinstellung geändert wurde. Vor Veröffentlichung muss geprüft werden, dass die Umsetzung genau diesem begrenzten Zweck entspricht; außerdem soll die Vorschau-Sperre entfernt sein.
3. **GitHub-Konto und Hosting:** Der Traffic-Graph des konkreten Kontos kann nur in der angemeldeten GitHub-Ansicht geprüft werden. Er ist Repository-Statistik, keine Website-Statistik. GitHubs Sicherheitsprotokolle und deren Fristen sind für BrainBlooms nicht einsehbar; GitHub nennt auf der Pages-Informationsseite keine feste Speicherfrist.
4. **Besucherzahlen:** Nutzerentscheidung: kein Besucherzähler und kein zusätzlicher Analysedienst. Die Website bleibt ohne eigene Besucherstatistik.
5. **Veröffentlichte Seite:** Die derzeitige Website-Seite `/datenschutz/` ist im geprüften Quellstand noch eine vorläufige Internal-Test-Information. Sie muss erst durch die eigenständige Website-Fassung ersetzt werden, wenn die markierten Unternehmensangaben ergänzt und der Text fertiggestellt sind.
6. **Live- und Geräteprüfung:** Dieser Vermerk beruht auf Quelltext und Anbieterunterlagen. Die geschützte Live-Seite und tatsächliche Browser-Netzwerkanfragen wurden in diesem Durchgang nicht unabhängig beobachtet. Vor dem öffentlichen Start sollten die fertige Seite und tatsächliche Netzwerkanfragen in einem normalen Browser noch einmal abgeglichen werden.
7. **Englische Fassung:** Im geprüften Datenschutzordner liegt keine englische Fassung. Die englische Website-Erklärung ist deshalb Teil des eigenständigen Website-Entwurfs.

## Quellen

- Technischer Website-Quellstand: BrainBlooms-Repository, Commit `72ffa21`.
- Vorhandener App-Datenschutzentwurf: `C:\Unity Projects\RestaurantGame\Legal\privacy-policy\privacy-policy-de.md`; nur für den Vergleich der Hosting-Angaben und zur Übernahme der vom Nutzer bestätigten Support-E-Mail-Aufbewahrungsfrist herangezogen. Keine App-Daten oder App-Abschnitte wurden in die Website-Fassung übernommen.
- [GitHub: Viewing traffic to a repository](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository)
- [GitHub Pages: What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [Baden-Württemberg Datenschutzaufsicht: FAQ zu Cookies und Tracking, Nr. 1.3](https://www.baden-wuerttemberg.datenschutz.de/faq-zu-cookies-und-tracking-2/)
- [§ 25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html)
