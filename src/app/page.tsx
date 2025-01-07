import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="bg-navy text-slate">
      <div className="container mx-auto px-6 max-w-6xl">
        <Section id="hero" className="flex items-center">
          <div>
            <h1 className="text-7xl font-semibold text-lightest-slate mb-4">
              Matthias Schott
            </h1>

            <h2 className="text-6xl font-semibold text-slate mb-8">
              Frontend-Engineer
            </h2>

            <p className="max-w-xl text-lg mb-12">
              Ich bin spezialisiert auf die Entwicklung außergewöhnlicher
              digitaler Erlebnisse im Web.
            </p>

            <div className="flex gap-4">
              <a
                className="inline-block px-7 py-4 border border-green text-green font-mono hover:bg-green/10 transition-colors"
                href="https://github.com/Nonag"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>

              <a
                className="inline-block px-7 py-4 border border-green text-green font-mono hover:bg-green/10 transition-colors"
                href="https://linkedin.com/in/matthias-schott/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
