import { LegalPage } from "../components/LegalPage";

export function PrivacyPolicy(): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 bg-background w-full">
        <LegalPage
          title="Datenschutzerklärung"
          intro={
            <p>
              Diese Website dient ausschließlich der Präsentation meiner Arbeiten und Projekte. Der Schutz Ihrer persönlichen Daten ist mir wichtig. Nachfolgend informiere ich Sie darüber, welche Daten beim Besuch dieser Website verarbeitet werden.
            </p>
          }
        >
          <section>
            <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mb-2">1. Verantwortliche Stelle</h2>
            <p className="mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              Sabine Hansen<br />
              Schwentinental, Deutschland<br />
              E-Mail: <a href="mailto:kontakt@sabinehansen.art" className="underline hover:no-underline">kontakt@sabinehansen.art</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mb-2">2. Zugriffsdaten / Server-Logs</h2>
            <p className="mb-3">
              Beim Aufrufen dieser Website werden automatisch Daten durch den Hosting-Provider Heroku erfasst. Dies sind:
            </p>
            <ul className="mb-4 list-disc list-inside space-y-1">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Übertragene Datenmenge</li>
              <li>Verwendeter Browser und ggf. Betriebssystem</li>
            </ul>
            <p className="mb-4">
              Diese Daten werden ausschließlich zur technischen Sicherstellung des Betriebs der Website, zur Fehlerbehebung und zur Auswertung der Besucherzahl verwendet. Eine Zusammenführung mit anderen Datenquellen oder eine Weitergabe an Dritte erfolgt nicht.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mb-2">3. Cookies / Tracking</h2>
            <p className="mb-4">Diese Website verwendet keine Cookies und keine Tracking-Tools wie Google Analytics.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mb-2">4. Kontaktaufnahme</h2>
            <p className="mb-4">Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage verarbeitet. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mb-2">5. Ihre Rechte</h2>
            <p className="mb-3">Sie haben das Recht auf:</p>
            <ul className="mb-4 list-disc list-inside space-y-1">
              <li>Auskunft über die gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
            <p className="mb-4">Zur Ausübung dieser Rechte genügt eine formlose E-Mail an mich.</p>
          </section>

          <section>
            <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mb-2">6. Hosting</h2>
            <p className="mb-4">Diese Website wird bei Heroku gehostet. Heroku speichert ggf. Server-Logfiles (siehe Punkt 2).</p>
          </section>

          <section>
            <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mb-2">7. Aktualität</h2>
            <p className="mb-0 md:mb-2">Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.</p>
          </section>
        </LegalPage>

        {/* Footer is now global */}
      </main>
    </div>
  );
}
