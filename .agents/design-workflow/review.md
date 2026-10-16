# Quellen-, Lizenz- und Installationsprüfung

Prüfdatum: 16.10.2026. Geprüft wurden die öffentlichen Originalquellen der drei vom Nutzer genannten Sammlungen. Die Installationsrevisionen sind feste Commits, keine beweglichen Branch-Verweise. Die vollständigen IDs und Datei-Prüfsummen stehen in [skills-lock.json](skills-lock.json).

## Auswahl und Originalbestand

### Leonxlnx/taste-skill

- Quelle: [Originalbaum](https://github.com/Leonxlnx/taste-skill/tree/f624f37a8c650b9cc550253104925efe4c8de246), Commit vom 14.10.2026, 15:00:49 UTC.
- [LICENSE](https://github.com/Leonxlnx/taste-skill/blob/f624f37a8c650b9cc550253104925efe4c8de246/LICENSE): MIT, Copyright (c) 2026 Leonxlnx. Lokale Kopie beim Skill erhalten.
- Konkrete Auswahl: aktueller `design-taste-frontend` als Grundlage für `brainblooms-taste-direction`. Vier Originalreferenzen zu Text, Layout, Typografie und Farben übernommen. Eigener deutscher Einstieg grenzt den Ablauf auf Briefing und Gestaltungsrichtungen ein.
- Andere vorhandene Skills: `design-taste-frontend-v1`, `design-taste-frontend-v2-experimental`, `redesign-existing-projects`, `image-to-code`, `gpt-taste`, `high-end-visual-design`, `minimalist-ui`, `industrial-brutalist-ui`, `stitch-design-taste`, `full-output-enforcement`, `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`. Nicht installiert: Altvarianten, vorgeprägte Stilrichtungen, erzwungene Ausgabe-/Redesign-Abläufe und Bildgenerierung passen nicht zur offenen Gestaltungsentscheidung bzw. würden den Verbrauch ausweiten.
- Ausführbare Bestandteile: Root-Installer `install.sh` legt standardmäßig globale Symlinks an; `skill.sh` ist ein Shell-Register. Der aktuelle Hauptskill enthält `draw.mjs`, `assets.mjs`, `lint.mjs`, `inspect.mjs` und `lib/{cdp,probe,rules}.mjs`; zusätzlich `assets/base.js` und Test-Shellcode. Die Datei-/Import-/Seiteneffektprüfung ergab u. a. Netzwerkabfragen/Asset-Downloads, lokale Dateiausgabe, Browserstart und einen lokalen HTTP-Server. `draw.mjs` verwendet standardmäßig auch eine Historie im Benutzerverzeichnis. Diese Komponenten wurden nicht installiert oder ausgeführt; auch die Vorlagen und die Design-Library wurden nicht übernommen.
- Der Vollablauf schreibt einen weitreichenden Hausstil und mehrere Browser-/Korrekturrunden vor. Laut Original-README benötigt er grob 30–45 Minuten und einige hunderttausend Tokens. Diese Angaben gelten nicht als Budgetzusage für unsere Adaption.
- Die Textreferenzen erwähnen externe Fonts, Skripte und feste Stilregeln. Die lokale SKILL.md kennzeichnet diese Verweise ausdrücklich als nicht aktivierte Originalfunktionen. Keine Schrift, kein Bild und kein sonstiges Asset wurde daraus freigegeben.

### pbakaus/impeccable

- Quelle: [Originalbaum](https://github.com/pbakaus/impeccable/tree/6af45ac9a5eb8792f033d3242f52e99812fd91fa), Commit vom 16.10.2026, 07:19:47 UTC; Skill-/Paketversion 4.6.0.
- [LICENSE](https://github.com/pbakaus/impeccable/blob/6af45ac9a5eb8792f033d3242f52e99812fd91fa/LICENSE): Apache-2.0, Copyright 2025 Paul Bakaus. [NOTICE.md](https://github.com/pbakaus/impeccable/blob/6af45ac9a5eb8792f033d3242f52e99812fd91fa/NOTICE.md) verweist auf MIT-lizenzierte Plattformreferenzen von ehmo. Beide Dateien unverändert erhalten; die genannten iOS-/Android-Referenzen selbst sind nicht installiert.
- Die aktuelle Sammlung enthält einen zentralen Skill `impeccable` mit Playbooks, statt nur einer Sammlung einzelner Audit-/Critique-Skills. Es gibt mehrere providerbezogene Kopien. Als Codex-Quelle wurde `.agents/skills/impeccable/` verwendet.
- Auswahl: `brainblooms-impeccable-review` mit eigenem Einstieg, einem ausdrücklich gekennzeichneten Auszug aus `reference/critique.md` (kognitive Belastung, Heuristiken, Nutzungsperspektiven) und einer gekennzeichneten Bearbeitung von `reference/audit.md` (technische Dimensionen, manuelle Integritätsprüfung). Die Änderungshinweise stehen direkt in den betroffenen Dateien.
- Ausführbare Bestandteile: Shell-/CMD-Launcher, npm-Shim, optionale plattformspezifische Engine-Pakete, Rust-CLI/Engine, Browser-Skripte/Bundles, Build-/Release-/Testskripte und Hook-Funktionen. Der geprüfte Launcher-/Shim-Code kann eine versionierte Engine aus GitHub Releases in einen Benutzer-Cache laden, eine SHA-256-Sidecar prüfen und die Engine ausführen. Das ist eine eigene Code-/Binärinstallation, die für die manuelle Vorbereitung nicht nötig ist.
- `package.json`, Codex-SKILL.md, die beiden ausgewählten Playbooks sowie Launcher-/Shim-Quellen wurden geprüft. Original-Critique enthält Engine-Aufrufe, Browser-Overlay, Speicherung und Agenten-Orchestrierung. Diese Ablaufteile sind aus der Projektfassung entfernt. Kein Launcher, keine Engine, keine Hook- oder Agent-Konfiguration wurde installiert und kein Browsercode injiziert. Die übrige Engine und ihre Abhängigkeiten wurden nicht vollständig sicherheitsgeprüft und sind ausdrücklich nicht freigegeben.
- Einschränkung: manuelle Prüfung ohne Originaldetektor und unabhängige Zweitbewertung. Ergebnisse dürfen nicht als vollständiger Impeccable-Audit oder nachgewiesene WCAG-Konformität bezeichnet werden.

### emilkowalski/skills

- Quelle: [Originalbaum](https://github.com/emilkowalski/skills/tree/2d228630ba1446365f614a108cb8252f1feda202), Commit vom 11.10.2026, 13:58:32 UTC.
- [LICENSE](https://github.com/emilkowalski/skills/blob/2d228630ba1446365f614a108cb8252f1feda202/LICENSE): MIT, Copyright (c) 2026 Emil Kowalski. Kopie in beiden installierten Skill-Ordnern erhalten.
- Installiert: `animate` mit `RECIPES.md` und `review-animations` mit `STANDARDS.md`. Alle vier Originaltexte vollständig gelesen. Die Referenzen sind unverändert; bei den Einstiegen wurden der englische Begrüßungs-/Warteblock entfernt und deutsche Projektgrenzen/Quellenhinweise ergänzt. Bei `review-animations` wurde außerdem das anbieterspezifische Frontmatter `disable-model-invocation` entfernt; es ist nicht Teil der verwendeten Codex-Validierung. Keine ausdrückliche Aufrufbeschränkung für das Projekt wurde eingeführt.
- Weitere vorhandene Skills: `animate-expo`, `animation-performance`, `animation-vocabulary`, `apple-design`, `ask-sonner`, `break-ui`, `emil-design-eng`, `find-animation-opportunities`, `improve-animations`, `mobile-native`, `pick-ui-library`, `prototype`, `write-swift`. Nicht installiert: native Plattformen, zusätzliche Stilvorgaben, Bibliotheksauswahl, Variantenwerkzeuge und überlappende Gesamtprüfungen sind vorerst nicht erforderlich. `animation-performance` kann bei einem konkreten Performanceproblem später gezielt geprüft/ergänzt werden.
- Die vollständige GitHub-Dateiliste enthält keine ausführbaren Skriptdateien, Paketinstaller oder Hooks. Die ausgewählten Ordner enthalten ausschließlich Markdown. CSS-/JS-/JSX-Codeblöcke und Bibliotheksnamen sind Beispiele, keine installierten Komponenten. Verweise auf nicht installierte Skills lösen keine Nachinstallation aus.
- Technische Pauschalaussagen zu GPU-Beschleunigung und einzelne starre Bewegungsregeln werden lokal als Heuristiken behandelt; tatsächliches Browser-Verhalten und Zugänglichkeit müssen später geprüft werden.

## Installation und Nachvollziehbarkeit

Vor Beginn meldete Git keine lokalen Änderungen. In Projektwurzel und den geprüften übergeordneten Orten lag keine AGENTS.md; `.agents/` oder `.codex/` waren im Projekt nicht vorhanden. Es wurde eine neue AGENTS.md angelegt und keine bestehende Konfiguration überschrieben.

Downloads erfolgten zunächst in einen temporären Prüfbereich außerhalb des Projektbaums. Das umfangreiche Impeccable-Gesamtarchiv wurde nicht verwendet; für Impeccable und Emil wurden anschließend gezielt Dateien anhand fester Commits geladen. Ihre heruntergeladenen Quelldateien wurden gegen die Git-Blob-SHAs der revisionierten GitHub-Dateibäume geprüft. Taste wurde aus dem Commit-ZIP übernommen. Es wurden keine Original-Installer oder Paketmanager ausgeführt. Die Python-Hilfen von skill-installer/skill-creator konnten wegen der nicht ausführbaren Windows-Python-Aliase nicht verwendet werden; Kopieren und Strukturprüfung erfolgten mit eigenem lokalem Node-Code ohne zusätzliche Pakete.

[upstream-inventory.json](upstream-inventory.json) enthält die gefundenen Skill-Manifeste und ausführbaren Kandidaten einschließlich providerbezogener Duplikate und Testdateien. Diese Inventur ist keine Behauptung einer vollständigen Sicherheitsprüfung sämtlicher nicht installierter Quellen. Die konkrete Installation enthält ausschließlich Markdown und Lizenztexte, keine Fremdprogramme.

Neue Dateien: AGENTS.md, vier Skill-Ordner mit insgesamt 17 Dateien, diese Workflow-Dokumentation samt Asset-Register, Quelleninventur, Lockdatei und [Validierungsergebnis](validation.json). Die Lockdatei ordnet jede installierte Datei ihrem Ursprung und ihrer Bearbeitung zu. Normale Codebeispiele in Markdown wurden nicht ausgeführt.

Die Prüfung umfasst die Skill-Struktur, lokale Markdown-Links, Datei-Prüfsummen, unveränderte Originalkopien, Vollständigkeit der Lizenzdateien sowie den Vergleich aller sieben vorher vorhandenen Website-Dateien mit Git HEAD. Keine Website-, Design-, Animations- oder Browserprüfung wurde als bereits erledigt behauptet. Kein Redesign, kein Push, keine Veröffentlichung und keine Änderung am Unity-Projekt.

## Lizenz- und Kostenfolgen

Die konkreten Original-Lizenztexte sind maßgeblich. MIT erlaubt auch kommerzielle Nutzung unter Erhalt von Copyright-/Lizenzhinweisen bei Kopien und wesentlichen Teilen. Apache-2.0 verlangt bei Weitergabe insbesondere Lizenzbeilage, Erhalt einschlägiger Hinweise und Kennzeichnung geänderter Dateien; NOTICE wurde erhalten. Beide Lizenzen gewähren keine allgemeine Rechtefreigabe für fremde Medien oder Marken und enthalten Haftungsausschlüsse.

Für diese Skill-Auswahl wurden keine Lizenzgebühren, Käufe oder Abos ausgelöst. Modell-/Codex-Kontingent wird durch die Nutzung beansprucht; ein konkreter Europreis hängt vom vorhandenen Tarif und künftigem Umfang ab. Kommerzielle Bild-/Fontangebote, Bildgenerierung, externe APIs und neue Web-Komponenten wurden nicht aktiviert. Vor ihrer Auswahl sind Rechte, Kosten und externe Datenübertragung separat zu prüfen; siehe [Asset-Register](asset-register.md).
