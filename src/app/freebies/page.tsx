import Container from "@/components/Container";
import Newsletter from "@/components/Newsletter";
import fs from "fs";
import path from "path";

export default function Page() {
  const dir = path.join(process.cwd(), "public", "freebies");
  const items = fs.existsSync(dir) ? fs.readdirSync(dir) : [];

  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold">Ressources gratuites</h1>
          <p className="text-gray-600 mt-2">Cheat sheets, modèles Excel, guides et mini-vidéos.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {items.map((file) => (
              <a key={file} href={`/freebies/${encodeURIComponent(file)}`} className="rounded-2xl border p-4 bg-white hover:shadow transition block">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold break-all">{file}</h3>
                  <span className="text-xs rounded-full border px-2 py-0.5">{file.split(".").pop()?.toUpperCase()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Cliquez pour télécharger / ouvrir</p>
              </a>
            ))}
            {items.length === 0 && (
              <p className="text-sm text-gray-500">Ajoute des fichiers dans <code>public/freebies</code> puis pousse sur GitHub.</p>
            )}
          </div>

          <div className="mt-8 rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">Accès complet à la librairie</h3>
            <p className="text-sm text-gray-600">Recevez le lien + mises à jour mensuelles.</p>
            <div className="mt-4">
              <Newsletter />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
