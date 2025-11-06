import Container from "@/components/Container";

export default function Page() {
  return (
    <main>
      <section>
        <Container>
          <div className="py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Formations pratiques pour <span className="underline decoration-4">projets industriels</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Cours Udemy + librairie gratuite : cheat sheets, templates, articles, mini-vidéos.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="/freebies" className="rounded-2xl px-5 py-3 text-sm font-semibold bg-black text-white hover:opacity-90">Télécharger des freebies</a>
                <a href="/courses" className="rounded-2xl px-5 py-3 text-sm font-semibold border hover:shadow">Voir les cours</a>
              </div>
            </div>
            <div className="md:h-[320px] h-56 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl">📊</div>
                <p className="mt-3 text-gray-600">Dashboards, modèles financiers, fiches réflexes</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
