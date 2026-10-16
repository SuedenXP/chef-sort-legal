# BrainBlooms: Projektregeln

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

Die Projektfassungen enthalten keine ausführbaren Fremdskripte, Hooks, Installer oder Engine. Referenztexte und Codebeispiele sind keine Installationsfreigabe. Bei Verweisen auf nicht installierte Skills die fehlende Funktion mit vorhandenen Mitteln bearbeiten und die Einschränkung nennen; nichts automatisch nachinstallieren.

Vorgaben zu Farben, Schriften, Bildanzahl oder Animationen sind Gestaltungshilfen der Autoren, keine beschlossene BrainBlooms-Identität. Nutzerentscheidung, Lesbarkeit, Zugänglichkeit und sachlich richtige Inhalte haben Vorrang. Performance-Aussagen aus Skills am konkreten Browser prüfen; GPU-Beschleunigung nicht pauschal versprechen. Rechtstextseiten dienen dem Lesen und benötigen keine Marketingeffekte.

Bilder, Schriften, Icons und Komponenten einzeln auf Herkunft, Lizenz, kommerzielle Nutzung, Kosten und externe Verbindungen prüfen. Lizenz-/Copyright-Hinweise erhalten; Änderungen an Apache-lizenzierten Dateien kennzeichnen. Auswahl im [Asset-Register](.agents/design-workflow/asset-register.md) dokumentieren. Externe Font-Links und Beispielbilder aus Referenzen nicht ungeprüft einbauen.
