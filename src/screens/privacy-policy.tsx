
export function PrivacyPolicy(): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

      {/* Main content area */}
      <main className="flex-1 bg-background w-full">
        <div className="px-6 py-12 max-w-4xl mx-auto">
          <h1 className="text-black text-3xl md:text-4xl font-normal [font-family:'Antonio',Helvetica] mb-6">Datenschutzerklärung</h1>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-4">
            Diese Website dient ausschließlich der Präsentation meiner Arbeiten und Projekte. Der Schutz Ihrer persönlichen Daten ist mir wichtig. Nachfolgend informiere ich Sie darüber, welche Daten beim Besuch dieser Website verarbeitet werden.
          </p>

          <h2 className="text-black text-2xl font-normal [font-family:'Antonio',Helvetica] mb-3">1. Verantwortliche Stelle</h2>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-4">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            Sabine Hansen<br />
            Schwentinental, Deutschland<br />
            E-Mail: kontakt@sabinehansen.art
          </p>

          <h2 className="text-black text-2xl font-normal [font-family:'Antonio',Helvetica] mb-3">2. Zugriffsdaten / Server-Logs</h2>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-3">
            Beim Aufrufen dieser Website werden automatisch Daten durch den Hosting-Provider Heroku erfasst. Dies sind:
          </p>
          <ul className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-4 list-disc list-inside">
            <li>IP-Adresse des anfragenden Geräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Übertragene Datenmenge</li>
            <li>Verwendeter Browser und ggf. Betriebssystem</li>
          </ul>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-4">
            Diese Daten werden ausschließlich zur technischen Sicherstellung des Betriebs der Website, zur Fehlerbehebung und zur Auswertung der Besucherzahl verwendet. Eine Zusammenführung mit anderen Datenquellen oder eine Weitergabe an Dritte erfolgt nicht.
          </p>

          <h2 className="text-black text-2xl font-normal [font-family:'Antonio',Helvetica] mb-3">3. Cookies / Tracking</h2>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-4">
            Diese Website verwendet keine Cookies und keine Tracking-Tools wie Google Analytics.
          </p>

          <h2 className="text-black text-2xl font-normal [font-family:'Antonio',Helvetica] mb-3">4. Kontaktaufnahme</h2>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-4">
            Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage verarbeitet. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
          </p>

          <h2 className="text-black text-2xl font-normal [font-family:'Antonio',Helvetica] mb-3">5. Ihre Rechte</h2>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-3">
            Sie haben das Recht auf:
          </p>
          <ul className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-4 list-disc list-inside">
            <li>Auskunft über die gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-4">
            Zur Ausübung dieser Rechte genügt eine formlose E-Mail an mich.
          </p>

          <h2 className="text-black text-2xl font-normal [font-family:'Antonio',Helvetica] mb-3">6. Hosting</h2>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-4">
            Diese Website wird bei Heroku gehostet. Heroku speichert ggf. Server-Logfiles (siehe Punkt 2).
          </p>

          <h2 className="text-black text-2xl font-normal [font-family:'Antonio',Helvetica] mb-3">7. Aktualität</h2>
          <p className="text-black text-lg font-thin [font-family:'Antonio',Helvetica] mb-6">
            Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
          </p>
        </div>

        {/* Contact section placed in normal flow below the privacy text */}
        <div className="w-full flex justify-center py-12">
          <div className="w-full max-w-[560px] px-6">
          </div>
        </div>

        {/* Footer is now global */}
      </main>
    </div>
  );
}

export default PrivacyPolicy;
