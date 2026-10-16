# Design-Workflow für BrainBlooms

Stand: 16.10.2026. Die Vorbereitung ist abgeschlossen; ein neues Design ist noch nicht beschlossen.

## Installierte Auswahl

| Sammlung | Projektlokaler Skill | Revision | Umfang |
| --- | --- | --- | --- |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill/tree/f624f37a8c650b9cc550253104925efe4c8de246) | `brainblooms-taste-direction` | `f624f37a8c650b9cc550253104925efe4c8de246` | Eigener Einstieg, vier unveränderte Fachreferenzen; ohne Skripte/Library/Assets |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable/tree/6af45ac9a5eb8792f033d3242f52e99812fd91fa) | `brainblooms-impeccable-review` | `6af45ac9a5eb8792f033d3242f52e99812fd91fa` | Manuelle Adaption von Kritik und Audit; ohne Engine/Launcher/Hooks/Agenten |
| [emilkowalski/skills](https://github.com/emilkowalski/skills/tree/2d228630ba1446365f614a108cb8252f1feda202) | `animate`, `review-animations` | `2d228630ba1446365f614a108cb8252f1feda202` | Originalregeln und Referenzen; Einstiege für Codex/Deutsch gezielt angepasst |

Taste und Impeccable sind bewusst eingeschränkte Projektadaptionen, keine unveränderten Vollinstallationen.
Alle Dateien samt Herkunft, Änderungen und SHA-256 stehen in [skills-lock.json](skills-lock.json).
Auswahl, ausgeschlossene Bestandteile und Prüfgrenzen: [review.md](review.md).

Die Skills liegen in `.agents/skills/`, dem in der [offiziellen OpenAI-Dokumentation](https://developers.openai.com/blog/skills-agents-sdk) beschriebenen Projektpfad.
Sie sollten ab dem nächsten Turn zur Verfügung stehen; falls die Oberfläche den Katalog nicht aktualisiert, eine neue Sitzung in diesem Ordner öffnen.
Die Erkennung durch die Oberfläche wurde hier nicht live nachgewiesen. Bis dahin kann Codex die jeweilige SKILL.md direkt lesen.
Es wurden keine globalen Skills oder Codex-Einstellungen geändert.

## Ablauf nach dem Briefing

1. **Briefing:** Zielgruppe, wichtigste Besucheraktion, Seiten, Sprachen, verfügbare Spielbilder/Logo, Stimmung und Referenzen klären. Ergebnis knapp festhalten, ohne fehlende Fakten zu erfinden.
2. **Richtung:** `brainblooms-taste-direction` erstellt zunächst textbasierte Vorschläge im vereinbarten Umfang. Vorschlag für den Einstieg: zwei kurze Richtungen, keine Bildgenerierung und keine Website-Änderung. Dies ist noch kein gestarteter Designauftrag.
3. **Entscheidung:** Nutzer wählt Richtung und Umfang. Vor größeren Läufen Anzahl der Varianten, Seiten, Bildaufrufe, Prüf-/Korrekturrunden und Verbrauchsrahmen besprechen.
4. **Umsetzung:** Erst nach Auftrag; bestehende statische HTML/CSS/JS-Struktur als Ausgangspunkt. Neue Pakete nur bei belegtem Nutzen und nach Lizenz-/Kostenprüfung.
5. **Kritik:** `brainblooms-impeccable-review` bewertet Verständlichkeit und technische Qualität; visuelle Aussagen anhand gerenderter Ansichten. Befunde priorisieren, Korrekturumfang begrenzen.
6. **Interaktionen:** `animate` nur für sinnvolle, beauftragte Bewegungen; `review-animations` prüft die Änderungen. CSS zuerst, keine Animationsbibliothek für einfache Effekte. Rechtstextseiten lesbar und ruhig halten.
7. **Abnahme:** Mobil/Desktop, Deutsch/Englisch, Tastatur/Fokus, reduzierte Bewegung, Textzoom, Links, CNAME und Rechtstext-Pfade prüfen. Asset-Register und Lizenzen vervollständigen. Veröffentlichung bleibt ein eigener Auftrag.

## Kosten und Rechte

Für die ausgewählten Skill-Dateien fallen nach ihren MIT-/Apache-2.0-Lizenzen keine Lizenzgebühren an; diese Vorbereitung hat keine Käufe, Dienst-Abos, API-Schlüssel oder kostenpflichtigen Dienste eingerichtet.
Codex-/Modellnutzung beansprucht dennoch das vorhandene Kontingent bzw. kann je nach Abrechnung Kosten verursachen. Ein konkreter Eurobetrag lässt sich ohne Tarif, Modell und Laufumfang nicht seriös angeben.

Taste beschreibt für seinen vollständigen v2-Ablauf grob 30–45 Minuten und einige hunderttausend Tokens im [Original-README](https://github.com/Leonxlnx/taste-skill/blob/f624f37a8c650b9cc550253104925efe4c8de246/README.md). Das ist eine Autorenangabe für den nicht installierten Vollablauf, keine Schätzung für unsere Textadaption. Kein solcher Lauf wurde gestartet.

MIT: Copyright- und Lizenztext bei Kopien/wesentlichen Teilen erhalten. Apache-2.0: Lizenz beilegen, einschlägige Hinweise erhalten und geänderte Dateien kennzeichnen; die mitgelieferte NOTICE.md bleibt erhalten. Die Skill-Lizenzen sind keine Lizenz für Bilder, Fonts, Marken oder externe Komponenten. Details stehen bei den jeweiligen Original-Lizenzdateien in den Skill-Ordnern.

Neue Assets einzeln im [Asset-Register](asset-register.md) prüfen und dokumentieren. Es wurden keine neuen Bilder, Fonts, Icons oder Web-Komponenten installiert oder freigegeben. Beispiel-Code und externe URLs in Fachreferenzen werden nicht automatisch Bestandteil der Website.

## Updates

Kein automatisches Update und keine Symlinks auf bewegliche Upstream-Branches. Bei Bedarf neue Commit-IDs abrufen, Lizenz-/Datei-Diff und ausführbare Bestandteile erneut prüfen, gezielt übernehmen und Lockdatei/Änderungshinweise aktualisieren. Installation/Prüfung ist keine Zusage, dass zukünftige Revisionen dieselben Eigenschaften haben.
