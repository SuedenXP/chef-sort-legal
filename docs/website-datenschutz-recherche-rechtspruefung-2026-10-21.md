# Website-Datenschutz: Beispiele und Rechtsprüfung

Stand: 21. Oktober 2026

Diese Notiz betrifft nur die Website von BrainBlooms. Die Fundstellen anderer Betreiber sind Beispiele für ihre jeweilige Umsetzung, keine Rechtsauskunft und keine geprüften Mustertexte zur Übernahme.

## Was andere deutschsprachige Websites zu GitHub Pages schreiben

- [Michael Boiman](https://mboiman.github.io/de/datenschutz/) beschreibt die Website als statisch und über GitHub Pages gehostet, nennt GitHub, Inc. und verweist auf die GitHub-Datenschutzhinweise. Die Seite enthält darüber hinaus eigene technische Abrufe; sie ist daher kein passgenaues Muster für BrainBlooms.
- [Dominik Lentrodt](https://dlentrodt.github.io/files/datenschutz.html) nennt GitHub Pages als Anbieter und führt technische Verbindungsdaten wie IP-Adresse, Abrufzeit, URL und Browsertyp für Auslieferung und Sicherheit auf.
- [Kostuno](https://kostuno.de/datenschutz/) nennt GitHub Pages, IP-Protokollierung zu Sicherheitszwecken, eine Interessenabwägung nach Art. 6 Abs. 1 lit. f DSGVO, mögliche Drittlandverarbeitung sowie GitHub als Empfänger. Die Erklärung deckt zugleich eine App und weitere Website-Funktionen ab.
- [REMSFAL](https://remsfal.de/datenschutz) verweist ebenfalls auf GitHub Pages, behauptet aber ohne konkrete Grundlage, GitHub-Cookies würden ausschließlich Sicherheit und Betrieb dienen. Diese Aussage sollte nicht als Vorlage dienen: GitHub Pages dokumentiert ausdrücklich die Protokollierung und Speicherung der Besucher-IP, aber damit nicht pauschal bestimmte Cookies für jede gehostete Website.
- [Keychange](https://keychange.dev/privacy.html) hat eine englische Erklärung mit deutschem Versionshinweis. Sie nennt IP-Adresse, Zeitpunkt, angeforderte Datei, Referrer sowie Browser-/Betriebssystemkennung, beschreibt die fehlende Einsicht des Betreibers in die GitHub-Logs und erläutert Drittlandtransfer. Das ist inhaltlich nah an unserem statischen Websitefall, aber auch hier sind die Aussagen des Betreibers nicht automatisch auf BrainBlooms übertragbar.

Gemeinsame, brauchbare Struktur dieser Beispiele: Hosting-Anbieter nennen, dokumentierte Verbindungsdaten und den Hostingzweck erklären, eigene Zugriffsgrenzen ehrlich angeben und auf GitHubs eigene Erklärung verweisen. Einige Beispiele enthalten zusätzliche Bestandteile (Apps, Cookies, Analyse oder andere Dienste), die BrainBlooms nicht ungeprüft übernehmen sollte.

## Prüfung der Rechtsverweise im BrainBlooms-Entwurf

### Art. 6 Abs. 1 lit. f DSGVO — Hosting und Website-Sicherheit

Als Rechtsgrundlage für die eigenen Zwecke des Websitebetreibers — stabile Bereitstellung und Sicherheit der Website — ist lit. f grundsätzlich plausibel und wird auch in den gefundenen GitHub-Pages-Erklärungen so verwendet. Die Erklärung muss das konkrete berechtigte Interesse benennen; die bloße Formel „berechtigtes Interesse“ reicht nicht. GitHub dokumentiert, dass beim Besuch einer Pages-Seite die Besucher-IP zu Sicherheitszwecken protokolliert und gespeichert wird ([GitHub Pages: What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)). Daraus folgt nicht automatisch, dass BrainBlooms selbst die Logs erhält oder dass GitHub in jedem Verarbeitungsschritt Auftragsverarbeiter ist. Rollen daher nicht ohne Vertrag oder weitere belastbare Grundlage festlegen.

### Art. 6 Abs. 1 lit. b DSGVO — E-Mail-Kontakt

Lit. b passt nur für Anfragen, bei denen die Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen auf Anfrage der Person erforderlich ist. Für allgemeine Support-, Feedback- oder sonstige Kontaktanfragen ist lit. f mit dem konkreten Interesse an der Bearbeitung die passendere Grundlage. Die beiden Fälle sollten im Text getrennt bleiben; lit. b nicht pauschal für jede E-Mail nennen. Die sechsmonatige Aufbewahrung nach Abschluss wurde vom Nutzer als die für Support-E-Mails geltende Regel bestätigt; längere gesetzliche Pflichten oder konkret erforderliche Rechtsverteidigung sind gesondert zu berücksichtigen.

### Art. 13 DSGVO — Pflichtinformationen

Der Entwurf muss vor Veröffentlichung insbesondere den tatsächlichen Verantwortlichen mit erreichbarer Anschrift nennen, Zweck und Rechtsgrundlage je Verarbeitung, berechtigte Interessen, Empfänger, etwaige Drittlandübermittlungen samt Garantie, Speicherdauer bzw. Kriterien, Betroffenenrechte und Beschwerderecht sowie — soweit einschlägig — Datenschutzbeauftragten und Pflicht/Freiwilligkeit von Angaben erläutern. Die im Entwurf vorhandenen Platzhalter für Betreiberidentität und zuständige Aufsicht sind echte offene Pflichtangaben, keine redaktionellen Details. Bei einer Grundlage nach lit. f gehört der Hinweis auf das Widerspruchsrecht nach Art. 21 dazu.

### Art. 15–21 DSGVO — Rechte

Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch sind im beschriebenen Umfang passend. Datenübertragbarkeit nach Art. 20 greift nur unter den dort genannten Voraussetzungen, insbesondere bei automatisierter Verarbeitung auf Grundlage von Einwilligung oder Vertrag; sie sollte nicht undifferenziert als stets bestehendes Recht dargestellt werden. Widerruf nach Art. 7 Abs. 3 ist nur relevant, falls tatsächlich eine Einwilligung als Rechtsgrundlage verwendet wird. Beschwerderecht ist Art. 77 DSGVO. Für die zuständige Aufsicht muss der Sitz des tatsächlichen Verantwortlichen feststehen.

### § 25 TDDDG — Local Storage und Session Storage

Die aktuelle Bezeichnung ist **TDDDG**; ältere Internettexte nennen noch TTDSG oder TTDSG/TTDSG. § 25 erfasst nicht nur Cookies, sondern auch Web Storage wie `localStorage` und `sessionStorage`. Die DSK-Orientierungshilfe bestätigt das ausdrücklich und nennt eine einfache Spracheinstellung wie `language: de` als Beispiel für eine Speicherung, für die kein dauerhafter Identifikator nötig ist ([DSK-Orientierungshilfe Digitale Dienste, Version 1.2, November 2024](https://datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf), insbesondere Rn. 21 und 81). § 25 Abs. 2 Nr. 2 macht eine Einwilligung entbehrlich, wenn die Speicherung unbedingt erforderlich ist, um einen ausdrücklich gewünschten digitalen Dienst bereitzustellen ([Gesetzestext § 25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html)). Das ist zusätzlich zur DSGVO-Rechtsgrundlage zu prüfen, keine solche Grundlage.

Für die BrainBlooms-Sprachauswahl bedeutet das: Die manuell gewählte Sprache und ihr Zweck, lokaler Speicherort und Löschmöglichkeit müssen transparent beschrieben werden. Die anbieterunabhängige Aufsichtsbehördenhilfe stuft einfache gespeicherte Spracheinstellungen als Beispiel ein, aber die konkrete Erforderlichkeit bleibt an der tatsächlichen Umsetzung zu messen. Die Vorschau-Sperre nutzt laut Quellprüfung `sessionStorage`; solange sie existiert, muss sie als tatsächlicher technischer Vorgang beschrieben und eigenständig nach § 25 geprüft werden. Nach dem geplanten Entfernen der Vorschau-Sperre ist dieser Passus aus der endgültigen Erklärung zu streichen. Keine pauschale Cookie-Aussage über GitHub ergänzen.

### Drittlandübermittlung und GitHub-Rolle

GitHub nennt in seiner aktuellen allgemeinen Datenschutzerklärung Speicher- und Verarbeitungsorte in den USA und weiteren Ländern sowie Standardvertragsklauseln für bestimmte Übermittlungen und eine Zertifizierung unter dem EU-US Data Privacy Framework ([GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)). Die BrainBlooms-Erklärung sollte nur die Übermittlung beschreiben, die für die konkrete Pages-Nutzung nachweisbar ist, und GitHubs eigene Angaben als solche kennzeichnen. Die Rechtsgrundlage des Betreibers nach Art. 6 DSGVO und GitHubs Transfermechanismus sind zwei unterschiedliche Fragen.

## Konsequenz für den Entwurf

Die Grundstruktur und die Bezugnahme auf Art. 6 Abs. 1 lit. f für Websitebereitstellung/Sicherheit sind mit den gefundenen Vergleichsseiten und der GitHub-Dokumentation vereinbar. Vor einer Veröffentlichung sollte die Erklärung aber anhand der tatsächlichen letzten Websitefassung nochmals auf diese Punkte geprüft werden: keine nicht belegten GitHub-Cookies behaupten; Art. 6 lit. b auf echte vorvertragliche/vertragliche Anfragen begrenzen; § 25 TDDDG von Art. 6 DSGVO trennen; Speicherangaben für Spracheinstellung und temporäre Vorschau-Sperre exakt beschreiben; Betreiberidentität, Anschrift und zuständige Aufsicht ergänzen; und Rechte nur mit ihren jeweiligen Voraussetzungen aufführen. Diese Recherche ändert oder veröffentlicht keine Website-Dateien.
