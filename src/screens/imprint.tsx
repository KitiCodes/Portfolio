import { LegalPage } from "../components/LegalPage";

export const Imprint = (): JSX.Element => (
  <div className="min-h-screen bg-background text-foreground flex flex-col">
    <main className="flex-1 w-full bg-background flex flex-col">
      <LegalPage title="Impressum">
        <section>
          <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mt-4 md:mt-6">Angaben gemäß § 5 TMG</h2>
          <div className="mt-2 leading-relaxed">
            <p>Sabine Hansen</p>
            <p>Elsa-Brandström-Straße 7</p>
            <p>24223 Schwentinental</p>
            <p className="mt-4">
              E-Mail: <a href="mailto:kontakt@sabinehansen.art" className="underline hover:no-underline">kontakt@sabinehansen.art</a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <div className="mt-2 leading-relaxed">
            <p>Sabine Hansen</p>
            <p>Elsa-Brandström-Straße 7</p>
            <p>24223 Schwentinental</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mt-8">Haftung für Inhalte</h2>
          <div className="mt-2 leading-relaxed space-y-4">
            <p>Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
            <p>Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mt-8">Haftung für Links</h2>
          <div className="mt-2 leading-relaxed space-y-4">
            <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.</p>
            <p>Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
            <p>Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg md:text-2xl font-normal [font-family:'Antonio',Helvetica] mt-8">Urheberrecht</h2>
          <div className="mt-2 leading-relaxed space-y-4">
            <p>Die durch mich erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.</p>
            <p>Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung.</p>
          </div>
        </section>
      </LegalPage>

      {/* Footer is now global */}
    </main>
  </div>
);
