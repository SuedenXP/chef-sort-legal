# BrainBlooms: Projektregeln

## PDF-Briefvorlage – 25.10.2026

Aktuelle ausdrückliche Nutzerentscheidung: nur lokaler Offline-Entwurf zum
Anschauen, kein Commit/Push und keine Veröffentlichung dieser Erweiterung.
Lokaler Starter: `.local-preview/Briefvorlage ansehen.cmd` (Port 4180).

Der Nutzer stellt die PDF „Lieber Weihnachtsmann_20261025_145612.pdf“ für einen
Download bereit: vorübergehender Banner oberhalb der Kopfzeile und dauerhafter
Button bei den Malbüchern. Beide führen zur unveränderten deutschen PDF mit
zwei Seiten. `site.config.json` schaltet nur den Banner; der öffentliche Build
über `scripts/build-public.mjs` muss dabei ausgeführt werden. Die vorhandene
Statistik zählt Dateianfragen als `download_request`, keine Personen oder
ausgefüllten Briefe. Einzelheiten und Herkunft: [docs/briefvorlage-download.md](docs/briefvorlage-download.md).

## Cloudflare-Hosting und Tagesstatistik – 24.10.2026

Der Nutzer hat den Umzug der öffentlichen Website und die eigene cookie-freie
Aufrufstatistik beauftragt; beides wurde veröffentlicht. Aktuelles Hosting:
Cloudflare **Workers mit Static Assets**, nicht Cloudflare Pages. GitHub bleibt
Quellcode-/Versionsablage; `main` löst die bestehende automatische
Cloudflare-Veröffentlichung aus. Diese konkrete Freigabe ersetzt für den
umgesetzten Umzug und die aggregierte Statistik die älteren lokalen
Beschränkungen. Keine pauschale Freigabe kostenpflichtiger oder weiterer Dienste.

Die eigene D1-Statistik speichert nur Tageszähler je öffentlichem Seitenpfad.
Keine Besucherwiedererkennung, IP-/Fingerprint-Statistik, eigenen Analyse-Cookies,
externen Klickzähler oder App-Installationsmessung ergänzen, ohne den Umfang
erneut mit dem Nutzer zu klären. Seit 25.10.2026 ist die vom Nutzer bereitgestellte
Weihnachtsbrief-PDF als konkrete Download-Datei vorgesehen; keine weiteren Dateien
oder personenbezogenen Messverfahren daraus ableiten.
Öffentliche Website ohne Login; Auswertung geschützt über Cloudflare.
Vorschauen haben deaktivierte Messung und keine D1-Bindung.

Maßgebliche Betriebseinstellungen stehen in `wrangler.jsonc`; die
Website-Datenschutzerklärung unter `datenschutz-website/index.html` wurde
gezielt in den Hosting-/Statistikabschnitten DE/EN angepasst.
App-Datenschutz und Impressum wurden beim Umzug nicht ersetzt. `CNAME` und
bisherige Rechtstextpfade bleiben erhalten. Neue Änderungen und
Veröffentlichungen nur im jeweils beauftragten Umfang.

Vollständiges Protokoll einschließlich bestätigter Werte, DNS/Mail,
Buildbefehle, Fehlerkorrekturen, Live-Nachweis und offener Nachweise:
[docs/cloudflare-betrieb.md](docs/cloudflare-betrieb.md).
Kurzanleitung: [docs/cloudflare-statistics.md](docs/cloudflare-statistics.md).
Frühere Abschnitte dieser Datei sind historische Auftragsstände; die
aktuellen Grenzen zu Kosten, Legal-Unterlagen, lokalen Originalen und
Unity-Projekt gelten weiter.

## Veröffentlichung vom 22.10.2026

Der Nutzer beauftragt die Veröffentlichung der geprüften öffentlichen Startfassung des Entwurfs. Diese Fassung entfernt die temporäre Vorschau-Anmeldung aus Startseite und Browserdemo. Website-Datenschutz unter `/datenschutz-website/`, aktualisiertes Impressum, neue Spielbilder und Demnächst-Banner werden übernommen. Die bestehende App-Datenschutzseite unter `/datenschutz/` bleibt inhaltlich erhalten; `/terms/` bleibt als Weiterleitung erreichbar. Diese konkrete Freigabe ersetzt für diesen Start die älteren Vorgaben zur Beibehaltung der Vorschau-Anmeldung. Keine zusätzlichen Dienste oder Kosten.

## Folgeauftrag vom 19.10.2026: spielbare Demo veröffentlichen

Der Nutzer gibt `/play/` ausdrücklich zur Veröffentlichung über das bestehende GitHub Pages frei und erlaubt sinnvolle Bildverkleinerung. Zweiter Hero-Link „Level ausprobieren“ / „Try a level“ neben „Das Spiel entdecken“, mobil darunter. Bestehende Vorschau-Anmeldung erhalten. Keine zusätzlichen Dienste oder Kosten; Regeln, Brett und Spielgestaltung unverändert. Diese Freigabe ersetzt die lokale Beschränkung für die Demo. Einzelheiten in Briefing und DEPLOYMENT.md.

Kommuniziere auf Deutsch und erkläre Entscheidungen für jemanden mit wenig Website-Erfahrung.

## Aktueller Auftrag und Grenzen

- Freigegeben und umgesetzt ist ein lokaler, responsiver Entwurf mit lokal aufbereiteten Buchcovern des Nutzers in `.local-preview/`: freundlich und hochwertig, Spiel zuerst, dann Malbücher mit Social Media, dann YouTube. Der Ordner ist von Git ausgeschlossen. Die öffentliche Website bleibt unverändert; Login, Statistik und zusätzliches Hosting sind vorerst nicht vorgesehen. Aktuelle Nutzerentscheidung: vorerst nur eigene lokale Bilder und normale Links, keine Einbettungen; auch YouTube bleibt ein normaler Link. Weitere Entscheidungen stehen im Briefing.
- Kein Push und keine Veröffentlichung ohne entsprechenden Auftrag. Kostenpflichtige Dienste oder Käufe brauchen Zustimmung.
- Vor umfangreichen automatischen Designläufen erst Umfang, Modell-/Toolverbrauch und voraussichtliche Kosten besprechen. Keine automatischen Variantenserien, Bildgenerierung oder mehrstufigen Agentenläufe aus Skill-Vorgaben ableiten.
- `CNAME` und die Pfade `datenschutz/`, `impressum/`, `terms/` erhalten. Vorhandene Rechtstexte nicht eigenständig ersetzen oder ungeprüfte Entwürfe veröffentlichen.
- `C:\Unity Projects\RestaurantGame` unverändert lassen. Die Unterlagen unter `Legal\privacy-policy\` sind keine pauschal freigegebenen Webtexte; nicht automatisch übernehmen oder an externe Dienste senden.
- Bestehende Agent-Konfiguration erst lesen und gezielt ergänzen, niemals ungeprüft überschreiben.

## Designarbeit

Der Ablauf und die Quellenprüfung stehen in [.agents/design-workflow/README.md](.agents/design-workflow/README.md) und [Prüfbericht](.agents/design-workflow/review.md). Skills liegen projektlokal in `.agents/skills/`.

1. Briefing klären, dann Gestaltungsvorschläge mit `brainblooms-taste-direction` ausarbeiten.
2. Entwürfe und später die Umsetzung mit `brainblooms-impeccable-review` prüfen. Das ist eine manuelle Projektfassung ohne Impeccable-Engine und ohne unabhängige Agentenprüfung; nicht als vollständigen Original-Audit ausgeben.
3. Nach Wahl der Richtung `animate` für gezielt beauftragte Interaktionen verwenden und mit `review-animations` gegenprüfen.
4. Für neue oder geänderte Buttons, Links und andere bedienbare Elemente `brainblooms-interactive-elements` anwenden: sichtbare Hover-, Fokus- und Druckzustände sowie gegebenenfalls Auswahl-, Lade-, Fehler- und deaktivierte Zustände prüfen. Skill: [.agents/skills/brainblooms-interactive-elements/SKILL.md](.agents/skills/brainblooms-interactive-elements/SKILL.md).

Das BrainBlooms-Logo in der Kopfzeile ist auf Nutzerwunsch ein reines Bild: kein Link, kein Tabstopp und keine Hover- oder Druckeffekte.

Die Projektfassungen enthalten keine ausführbaren Fremdskripte, Hooks, Installer oder Engine. Referenztexte und Codebeispiele sind keine Installationsfreigabe. Bei Verweisen auf nicht installierte Skills die fehlende Funktion mit vorhandenen Mitteln bearbeiten und die Einschränkung nennen; nichts automatisch nachinstallieren.

Vorgaben zu Farben, Schriften, Bildanzahl oder Animationen sind Gestaltungshilfen der Autoren, keine beschlossene BrainBlooms-Identität. Nutzerentscheidung, Lesbarkeit, Zugänglichkeit und sachlich richtige Inhalte haben Vorrang. Performance-Aussagen aus Skills am konkreten Browser prüfen; GPU-Beschleunigung nicht pauschal versprechen. Rechtstextseiten dienen dem Lesen und benötigen keine Marketingeffekte.

Bilder, Schriften, Icons und Komponenten einzeln auf Herkunft, Lizenz, kommerzielle Nutzung, Kosten und externe Verbindungen prüfen. Lizenz-/Copyright-Hinweise erhalten; Änderungen an Apache-lizenzierten Dateien kennzeichnen. Auswahl im [Asset-Register](.agents/design-workflow/asset-register.md) dokumentieren. Externe Font-Links und Beispielbilder aus Referenzen nicht ungeprüft einbauen.


## Aktueller Nutzerauftrag vom 17.10.2026

Der Nutzer beauftragt ausdrücklich, den lokalen Entwurf auf der bestehenden Domain
brainblooms.de über das vorhandene GitHub-Pages-Repository zu veröffentlichen.
Die temporäre clientseitige Vorschau-Sperre mit den vereinbarten Zugangsdaten
soll vorgeschaltet bleiben und später entfernt werden. Der Nutzer kennt die
Grenze als Sichtblende; keine Serverauthentifizierung. Dieser konkrete Auftrag
ersetzt die bisherigen Vorgaben „nur lokal“, „kein Login“ und „nicht veröffentlichen“
für diese Veröffentlichung. Keine Freigabe zusätzlicher Dienste oder Kosten.
CNAME und bestehende Rechtstextseiten samt bisherigen style.css/language.js erhalten.
Webassets des Entwurfs liegen getrennt unter site-assets/. Originaldateien,
Prüfprofile und der gesamte Ordner .local-preview/ bleiben von Git ausgeschlossen.
